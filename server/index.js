PORT = 9000
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
const path = require('path')
const jwt  = require('jsonwebtoken')
const stripe  = require('stripe')('sk_test_51OtjfxSAS07zWerBa5H39hN4HgJPQksyjRXxmLDzuGEj328ORnP0kLcMQyq71VJdtDf9GBD748WyjdznslhO12Rv00YljxN9WJ')
const app = express()
app.use(cors())
app.use(express.json())

//Database Connection With MongoDB
main().catch(err => console.log(err));

async function main(){
mongoose.connect('mongodb+srv://adwaidhks2002:1234@cluster0.mfe62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log("database connected")

}

app.get("/",(req,res)=>{
    res.send("API is running ....")
})
// image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})
// Creating upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

//schema for Review
const reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'name require']
    },
    rating:{
        type:Number,
        default:0
    },
    comment:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
})

//Schema for creating for products
const Product =  mongoose.model("Product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    reviews:[reviewSchema],
        rating:{
            type:Number,
            default:0
        },
        numReviews:{
            type:Number,
            default:0
        },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.post("/addproduct",async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0]
        id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        description:req.body.description,
        
    })
    console.log(product)
    await product.save()
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating an APi for deleting products
app.post("/removeproduct",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating an API for getting all products
app.get("/allproducts",async(req,res)=>{
    const products = await Product.find({});
    res.send(products)
})

//Creation endpoint for newarrived data
app.get("/newarrived",async(req,res)=>{
    let product = await Product.find({})
    let newarrived = product.slice(1).slice(-8)
    res.send(newarrived)
})

//Schema creating for user model
const User = mongoose.model('User',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})
//Creatin Endpoint for registering the user
app.post("/signup", async(req,res)=>{
    let check = await User.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false,error:"existing user found with same email address "})
    }
   let cart ={};
   for (let i = 0; i < 300; i++) {
    cart[i] = 0;
   }
    const user = new User({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
        
    })
    await user.save()

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom')
    res.json({success:true,token})
})
// Creating enpoint for user login
app.post("/login", async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else{
            res.json({success:false,error:"Wrong Password"})
        }
    }
    else{
        res.json({success:false,error:"Wrong Emial"})
    }
})

//Creating middelware to fetch user
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token,'secret_ecom')
            req.user=data.user;
            next();
        } catch (error) {
            res.status(401).send({error:"please authenticate using valid token"})
        }
    }
} 

//Creating endpoint for adding product in cartdata
app.post("/addtocart",fetchUser ,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1 ;
   await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("Added")
})
//Creating endpoint to remove product from cartdata
app.post("/removefromcart",fetchUser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
   userData.cartData[req.body.itemId] -=1 ;
   await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("Removed")
})

//creating endpoint to get cartdata
app.post("/getcart",fetchUser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData)
})
// Schema creating for user complain 
const Usercomplain = mongoose.model('Usercomplain',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})
//Creating endpoint to user complain
app.post("/usercomplain",async(req,res)=>{
    const usercomplain = new Usercomplain({
        name:req.body.username,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message,
    })
    await usercomplain.save()
    res.json({
        success:true,
        name:req.body.name,
    })
})
//Creating  for getin all complaints
app.get("/getusercomplain",async(req,res)=>{
    const usercomplain = await Usercomplain.find({})
    res.send(usercomplain);
})

//Creating an endpoint to checkout
const YOUR_DOMAIN = 'http://localhost:3000';
app.post('/create-checkout-session', async (req, res) => {
    const {cartItem} = req.body
    const {all_products} = req.body
    const line_items = all_products.map((item)=>{
         if(cartItem[item.id]>0){
            return{
                price_data: {
                    currency: 'inr',
                    product_data: {
                      name: item.name,
                    //   images:[item.image],
                      metadata:{
                        id:item.id
                      }
                    },
                    unit_amount: item.new_price * 100
                  },
                  quantity: cartItem[item.id],
            }
        }
        
    })
    const session = await stripe.checkout.sessions.create({
    
      shipping_address_collection:{
        allowed_countries:['US','IN']
      },
        line_items,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cart`,
    });
    
    res.send({url: session.url});
  });

app.listen(9000,()=>{
    console.log(`server run in port ${PORT}`)
})
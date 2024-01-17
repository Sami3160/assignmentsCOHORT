const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require("../db");
const {Course}=require("../db");
// Admin Routes
router.post('/signup', (req, res) => {
    let uname=req.headers.username
    let pw=req.headers.password
    var admin=new Admin({
        username : uname,
        password :pw
    })
    admin.save()
    .then((err , ad)=>{
        console.log("new admin "+ ad +" created")
        res.status(200).json({msg:"admin created successfully"})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg: "error in admin.js /signup file :("})
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    let courseTitle= req.body.title
    let courseDescription= req.body.description
    let coursePrice= req.body.price
    let courseImageLink= req.body.imageLink
    console.log(courseTitle)
    console.log(courseDescription)
    console.log(coursePrice)
    console.log(courseImageLink)
    let course=new Course({
        title : courseTitle,
        description: courseDescription,
        price: coursePrice,
        imageLink: courseImageLink,
    })
    course.save().then((err, value)=>{
        console.log(value)
        res.status(200).json({msg:"done!!!"})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"error in inserting course"})
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"something wrong in /course "+err})
    })
});

module.exports = router;
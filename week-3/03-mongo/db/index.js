const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:root@cluster0.od8zpg8.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{type:"String", required: true},
    password:{type:"String", required: true},
});

const UserSchema = new mongoose.Schema({
    username:{type:"String", required: true},
    password:{type:"String", required: true},
    purchasedCourses:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const CourseSchema = new mongoose.Schema({
    title :{type:"String"},
    description : {type:"String"},
    price : {type:"Number"},
    imageLink : {type:"String"},
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
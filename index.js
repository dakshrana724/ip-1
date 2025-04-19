
const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const logindata=require('./schema');

const session = require('express-session');
const app = express();
app.use(session({
  secret: 'your-secret-key',  //  Replace with a strong, random secret!
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } //  Set to true in production with HTTPS
}));


// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/logindata');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// main()
// .then(()=>{
//     console.log('successfully connected');
// })
// .catch((error)=>{
//     console.log(error);
// })



app.set("views", path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'This/Paryatana/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\about.html');
});
app.get('/favourite', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\favourites.html');
});
app.get('/tours', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\tours.html');
});
app.get('/contact', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\contact.html');
});
app.get('/payment', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\payment.html');
});
app.get('/sdg', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\sdg.html');
});
app.get('/bucket-list', (req, res) => {
    res.sendFile('C:\\I.P project\\This\\Paryatana\\bucket.html');
});
app.get('/randi', (req, res) => {
    res.render('randi.ejs');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});




app.post('/signup',(req,res)=>{
    const userdata=req.body;
    const user=new logindata(userdata);
    user.save()
    .then((response)=>{
        console.log(response);
    });
    res.redirect('/login');
});

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    console.log(password);
    const user=await logindata.findOne({email:email,password:password});
    console.log(user);
    if (user){
        console.log("Login Successfull");
            res.redirect('/');
    }
    else{
        console.log("Error Register First");
        res.sendFile('C:\\I.P project\\This\\Paryatana\\error.html');
    }
    
});
app.get('/login',(req,res)=>{
    res.sendFile('C:\\I.P project\\This\\Paryatana\\login.html');
});

app.get('/signup',(req,res)=>{
    res.sendFile('C:\\I.P project\\This\\Paryatana\\signup.html');
});
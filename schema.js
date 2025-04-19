const mongoose=require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/travelwise_agency");
}

main()
.then((res)=>{
    console.log("Succesfully Connected With Database");
})
.catch((error)=>{
    console.log(error);
});

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
   
    password:{
        type:String
    }
});

const logindata=mongoose.model('logindata',userSchema);

module.exports=logindata;
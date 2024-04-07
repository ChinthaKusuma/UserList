
const express=require("express");

const path=require("path");

// const cors=require("cors");
// app.use(cors);
const sqlite3=require("sqlite3")
const dbPath=path.join(__dirname,'user.db');
const {open}=require("sqlite");
const app=express();
app.use(express.json());
let db=null;
const initializeDBAndServer=async()=>{
   

try{ db=await  open({
    filename:dbPath,
    driver:sqlite3.Database
  });
app.listen(3000,()=>{
    console.log("server Started");
})
app.get("/register",async(request,response)=>{
  const getQuery=`select * from Registration;`;
  const Array1=await db.all(getQuery);
  console.log("one");
  response.send(Array1)
})}
  catch(e){
    console.log("DB Error");
    process.exit(1)
  }
}
initializeDBAndServer();





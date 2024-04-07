import {Component} from "react"
import DisplayUser1 from '../DisplayUser1'


import axios from "axios";
import "./index.css";

class UserRegistration extends Component{
    state={list2:[],name1:"",email1:"",DOB1:"",pno1:"",age1:"",display:false}
  

    
    changeName=(event)=>{
      this.setState({
       name1:event.target.value
      })
 
    }
    changeEmail=(event)=>{
      this.setState({
       email1:event.target.value
      })
 
    }
    changeDOB=(event)=>{
      this.setState({
       DOB1:event.target.value
      })
 
    }
    changePhoneNo=(event)=>{
      this.setState({
        pno1:event.target.value
       })
    }
    changeAge=(event)=>{
      this.setState({
        age1:event.target.value
       })
    }


    addUser=async(event)=>{
        event.preventDefault()
        const {name1,email1,DOB1,pno1,age1}=this.state
        const user1={
    
          name1,
          email1,
          DOB1,
          pno1,
         age1
        }
        this.setState(prevState=>({
          list2:[...prevState.list2,user1],
          name1:"",
          email1:"",
          DOB1:"",
          age1:"",
          pno1:""
        }))
      
    }

    displaysUsersList=()=>{
      this.setState({
        display:true
      })
    }

    render(){
       const {list2,name1,email1,DOB1,pno1,age1,display}=this.state
      
      return(
        <div className="one1">{display==false?<form onSubmit={this.addUser}>
        <label htmlFor="name">Name</label><br/>
        <input id="name" onChange={this.changeName} value={name1}/><br/>
        <label htmlFor="email">Email</label><br/>
        <input id="email" onChange={this.changeEmail} value={email1}/><br/>
        <label htmlFor="DOB">Date Of Birth</label><br/>
        <input id="DOB" onChange={this.changeDOB} value={DOB1}/><br/>
        <label htmlFor="age">Age</label><br/>
        <input id="age" onChange={this.changeAge} value={age1}/><br/>
        <label htmlFor="pno">Mobile No</label><br/>
        <input id="pno" onChange={this.changePhoneNo} value={pno1}/><br/>
        <button type="submit">Register</button>
        <button type="button" onClick={this.displaysUsersList}>Display Users</button>
        </form>:
       <>{display===true&&<DisplayUser1 list2={list2}/>}</>
      }</div>
        
    )
}
}
export default UserRegistration
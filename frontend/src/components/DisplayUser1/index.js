
import {Link} from "react-router-dom"
import "./index.css"
import UserRegistration from "../UserRegistration"

const DisplayUser1=(props)=>{
   
    const {list2}=props;
    const getData=(each)=>{
        const {name1,email1,DOB1,age1,pno1}=each;
        return(
            <>
            <table className="table2" >
        <tr >
            <td className="table1">{name1}</td>
            <td className="table1">{email1}</td>
            <td className="table1">{DOB1}</td>
            <td className="table1">{age1}</td>
            <td className="table1">{pno1}</td>
        </tr>
        </table>
        
        </>
            
        )
    }
    return(
        <>
        <table className="table2" >
        <tr >
            <th className="table1">Name</th>
            <th className="table1">Email</th>
            <th className="table1">DOB</th>
            <th className="table1">Age</th>
            <th className="table1">Phone No</th>
        </tr>
        </table>
        {list2.map((each)=>getData(each))}</>
    )

}



export default DisplayUser1
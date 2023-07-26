import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

function Addcourse(){
    const [Title , setTitle] = useState("")
    const [Description , setDescription] = useState("")
    const [ImageLink , setLink] = useState("")
    const [price , setPrice] = useState(0)
    
    return <div style={{
        display:'flex',
        justifyContent:'center',
    }}>
    <Card variant="outlined" style={{width :400 , padding:20}}> 
        <TextField
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Title"
        variant="outlined"/>
        <br/><br/>   
        <TextField
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"/>
        <br/><br/>
        <TextField
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
        fullWidth={true}
        label="price"
        variant="outlined"/>
        <br/><br/>
        <TextField
        onChange={(e)=>{
            setLink(e.target.value)
        }}
        fullWidth={true}
        label="ImageLink"
        variant="outlined"/>
        <br/><br/>
        <Button size= "large"variant="contained" 
        onClick={()=>{
            fetch('http://localhost:3000/admin/courses',{
                method :"POST",
                body:JSON.stringify({
                    title:Title ,
                    description:Description,
                    price,
                    imageLink:ImageLink,
                    published:true
                }),
                headers:{
                    "Content-type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                alert('course added !')
                console.log(data)
            })
        }}>Add course</Button>
        </Card>
    </div>
}
export default Addcourse;
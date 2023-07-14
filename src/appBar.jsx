import { Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function Appbar(){
    const navigate = useNavigate()
    const [userEmail , setuserEmail] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/admin/me',{
            method:"GET",
            headers:{   
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
    }).then(
        (res)=>{ return res.json()}
        ).then((data)=>{
            if(data.username)setuserEmail(data.username)
            console.log(data)
        })
    },[])
    if(userEmail){
        return <div style={{
            display:"flex",
            justifyContent:'space-between',
            paddingTop:4
        }}>
            <div>
            <Typography>GyanHub</Typography>
            </div>
            <div style={{display:'flex'}}>
            <Button   style={{marginRight:10}}
            variant="text"
            onClick={()=>{ 
                window.location='/Addcourse'
            }}>Add course</Button>
            <Button   style={{marginRight:10}}
            variant="text"
            onClick={()=>{ 
                window.location='/courses'
            }}>Courses</Button>
    
            <div style={{marginRight:10}}>
            <Button 
            variant="contained"
            onClick={()=>{
                localStorage.setItem("token",null) 
                window.location='/'
            }}>Logout</Button>
                </div>
            </div>
        </div>
    }

    return <div style={{
        display:"flex",
        justifyContent:'space-between',
        paddingTop:4
    }}>
        <div>
        <Typography>GyanHub</Typography>
        </div>
        <div style={{display:'flex'}}>
            <div style={{marginRight:10}}>
        <Button 
        variant="contained"
        onClick={()=>{
            navigate("/signup") 
        }}>Sign up</Button>
            </div>
            <div style={{marginRight:10}}>
        <Button 
        variant="contained"
        onClick={()=>{
            navigate("/signin") 
        }}>Sign in</Button>
            </div>
        </div>
    </div>
}
export default Appbar 
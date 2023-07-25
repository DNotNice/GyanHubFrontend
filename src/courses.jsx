import { Button, Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Courses(){

    const [courses , setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses/',{
            method : "GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setCourses(data.courses)
            console.log(data.courses)
        })
    },[])

    return <div style={{display:'flex' ,flexWrap:'wrap' , justifyContent:'center'}}>
        
        {courses.map((course) =>  { 
            return <Course course={course} />}
        )}
    </div>
}
 export function Course({course}){
    const navigate = useNavigate()
    return <Card style={{
        margin:10,
        width:300,
        padding:20,
        minHeight:200
    }}>
        <Typography  textAlign= "center" variant="h5">{course.courseTitle}</Typography>
        <Typography  textAlign= "center" variant="subtitle1">{course.courseDesc}</Typography>
        <Typography  textAlign= "center" variant="subtitle1">{course.price}</Typography>
        <div style={{display:'flex' , justifyContent:'center'}}><img src= {course.imageLink} style={{height:150 }}></img></div>
        <div style={{display:'flex' , justifyContent:'center',marginTop:20}}>
            <Button variant="contained" size="large" onClick={()=>{navigate("/course/"+course.courseId)}} > Edit</Button></div>
    </Card>
}
export default Courses 

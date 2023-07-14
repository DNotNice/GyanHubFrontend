import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Course(){
    let {courseId} = useParams();
    console.log('inside main card')
    const [course , setCourse] =useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses/'+courseId,{
            method : "GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setCourse(data.course)
         
        })
    },[])
    if (!course) {
        return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
            Loading....
        </div>
    }
    return <div>
        <GrayTopper title={course.courseTitle}/>
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard course={course} setCourse={setCourse} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseCard course={course} />
            </Grid>
        </Grid>
    </div>
}
function UpdateCard({course,setCourse}){  
    console.log('inside update card')
    const [Title , setTitle] = useState(course.courseTitle)
    const [Description , setDescription] = useState(course.courseDesc)
    const [ImageLink , setLink] = useState(course.imageLink)
    const [price , setPrice] = useState(course.price)
  
    return <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
    <Card variant="outlined" style={{width :600 ,marginTop:200}}>
        <div style={{padding:20}}>
    <Typography>Update Course Details <br/></Typography>
        <TextField
        style={{marginBottom:10}}
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        fullWidth={true}
        value={Title}
        label="Title"
        variant="outlined"/>
        <TextField
        style={{marginBottom:10}}
        value={Description}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"/>
        
        <TextField
        style={{marginBottom:10}}
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
        value={price}
        fullWidth={true}
        label="price"
        variant="outlined"/>
        <TextField
        style={{marginBottom:10}}
        value={ImageLink}
        onChange={(e)=>{
            setLink(e.target.value)
        }}
        fullWidth={true}
        label="ImageLink"
        variant="outlined"/>
    

        <Button size= "medium"variant="contained" 
        onClick={()=>{
            fetch('http://localhost:3000/admin/courses/'+course.courseId,{
                method :"PUT",
                body:JSON.stringify({
                    title:Title ,
                    Desc:Description,
                    price,
                    image:ImageLink,
                }),
                headers:{
                    "Content-type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                let updatedCourse = {
                    courseId : course.courseId,
                    courseTitle :  Title ,
                    courseDesc :   Description,
                    imageLink : ImageLink,
                    price 

                }
                    
                
                setCourse(updatedCourse)
                console.log(data)
            })
        }}>Update course</Button>
        </div> 
        </Card>
        </div>
}
function CourseCard({course}){
    console.log('inside course card')
     

        return <div style={{display:'flex',justifyContent:'center' ,marginTop:50 ,width:'100%'}}>
        <Card style={{
        margin:10,
        width:350,
        minHeight:200,
        borderRadius:20,
        marginRight:50,
        paddingBottom:15,
        zIndex:2
    }}>
        <div style={{marginLeft:10}}>
        <Typography  textAlign= "center" variant="h5">{course.courseTitle}</Typography>
        <Typography  textAlign= "center" variant="subtitle1">{course.courseDesc}</Typography>
        <Typography variant="subtitle2"   style={{color:'gray'}}>price</Typography>
        <Typography variant="subtitle1"><b>Rs {course.price}</b></Typography>
        </div>
        <img src= {course.imageLink} style={{width:350}}></img>
    </Card>
    </div>
}
function GrayTopper({title}) {
    return <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

export default Course ;

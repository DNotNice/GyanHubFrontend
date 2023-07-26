import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Appbar from './components/appBar';
import Addcourse from './components/Addcourse';
import HomePage from './components/HomePage';
import Courses from './components/courses';
import Course from './components/Course';
import { userState } from './store/atoms/user';
import {RecoilRoot, useSetRecoilState} from 'recoil';
import { useEffect } from 'react';

function App() {
  const setUser = useSetRecoilState(userState)
  const init = async()=>{
    try {
      
    fetch('http://localhost:3000/admin/me',{
            method:"GET",
            headers:{   
                "Content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
    }).then( (res)=>{ return res.json()}).then((data)=>{
              if(data.username){
                setUser({
                  isLoading :false,
                  userEmail:data.username
                })
              }else{
                setUser({
                  isLoading :false,
                  userEmail :null
                })
              }
            console.log(data)
        })
        
    } catch (error) {
        setUser({
           isLoading:false,
           userEmail:null
        })      
    }
  }
  useEffect(()=>{
    init()
  } , [])

  return (
    
     <div style={{
      width:'100vw',height:'100vh' ,background:'#eeeeee'
  }}>
   <RecoilRoot>
      <Router>
      <Appbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/addCourse'element={<Addcourse/>}></Route>
        <Route path='/course/:courseId'element={<Course/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        </Routes>
      </Router> 
    </RecoilRoot>
    </div>   
    
    )
}


export default App

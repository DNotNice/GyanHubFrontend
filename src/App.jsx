import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Appbar from './appBar';
import Addcourse from './Addcourse';
import HomePage from './HomePage';
import Courses from './courses';
import Course from './Course';
import {RecoilRoot} from 'recoil';

function App() {

  return (
    
     <div style={{
      width:"100% ",
      height: "100vh",
      backgroundColor:'#eeeeee',
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

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Appbar from './appBar';
import Addcourse from './Addcourse';
function App() {

  return (
    
     <div style={{
      width:'100vw' ,
      height:'100vh',
      backgroundColor:'#eeeeee'
  }}>
   
    <Router>
    <Appbar/>
      <Routes>
      <Route path='/addCourse'element={<Addcourse/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </Router> 
    </div>   
    
    )
}


export default App

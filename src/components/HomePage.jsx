import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { isUserLoading } from "../store/selectors/isUserLoading"
import { userState } from "../store/atoms/user"

function HomePage(){
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading)
    const setUser = useSetRecoilState(userState)
    return <div> 
        <div style={{display:'flex' ,justifyContent:'center' , flexWrap:'wrap',marginTop:10 , background:'#F0FFFF'}}>
        <div>
    <div style={{marginLeft:50}}> <Typography variant="h1">Transform Lives </Typography> </div>
    <div style={{marginLeft:100}}> <Typography variant="h1">Through Learning </Typography> </div>
    <div style={{marginLeft:50}}><Typography variant="h5">Start, switch, or advance your career with our courses.<br/>
    Help us bring affordable, job-relevant education to every corner <br/> of the world.
        </Typography></div>
        { userLoading && <div style={{marginLeft:300, marginTop:30 ,marginBottom:10}}><Button variant="outlined" color="error" size="large" onClick={()=>{
           navigate('/signup')
           }}>Join For Free</Button></div> }
            </div>
        <div style={{ marginLeft: 50,padding:10 }}>
            <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            style={{height:400 ,width:600}} />
        </div>
        </div>
    </div>
}
export default HomePage
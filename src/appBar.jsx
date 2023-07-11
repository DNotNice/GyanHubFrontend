import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
function Appbar(){
    const navigate = useNavigate()
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
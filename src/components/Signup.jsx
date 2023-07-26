import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';

function Signup({}){
    const [Email , setEmail] = useState("")
    const [Password , setPassword] = useState("")
    const navigate = useNavigate()
    const setUser = useSetRecoilState(userState)
    return <div>
            <div style={{
                paddingTop :150 ,
                 marginBottom:10,
                 display:'flex',
                 justifyContent:'center'
                 }}>
                    <Typography variant='h6'>
                Welcom to GyanHub, Sign up Below
                </Typography>
            </div>
       
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
        <Card variant="outlined" style={{width :400 , padding:20}}> 
        
            <TextField onChange={
                (e)=>{
                    setEmail(e.target.value)
                    }
                }
                    label="Email"
                    variant="outlined"
                    fullWidth />
            <br/><br/>   
            <TextField onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }
                label="Password"
                variant="outlined"
                type="password"
                fullWidth />
            <br/><br/>
            <Button  size= "large"variant="contained"
            onClick={()=>{
            fetch('http://localhost:3000/admin/signup',{
                method :"POST",
                body:JSON.stringify({
                    username:Email ,
                    password:Password
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                localStorage.setItem("token", data.token)
                setUser({
                    userEmail: Email , isLoading :false
                })
                navigate('/')
            })
            }}>Sign Up</Button>
            </Card>
        </div>
    </div>
}
export default Signup
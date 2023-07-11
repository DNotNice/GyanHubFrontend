import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Signin(){
    return <div>
       
            <div style={{
                paddingTop :150 ,
                 marginBottom:10,
                 display:'flex',
                 justifyContent:'center'
                 }}>
                    <Typography variant='h6'>
                Welcom Back, Sign in Below
                </Typography>
            </div>
       
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
        <Card variant="outlined" style={{width :400 , padding:20}}> 
        
            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
            <br/><br/>   
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth />
            <br/><br/>
            <Button  size= "large"variant="contained">Signin</Button>
            </Card>
        </div>
    </div>
}
export default Signin
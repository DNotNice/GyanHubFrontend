import { Button, CircularProgress, ThemeProvider, Typography, createTheme } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userState } from "../store/atoms/user";
import {userEmailState} from '../store/selectors/userEmail'
const SearchBar = ({setSearchQuery}) => (
    <div >
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="What do you want to learn today"
        variant="outlined"
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
      </div>
  );
  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };
   
  
function Appbar(){
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading)
    const userEmail = useRecoilValue(userEmailState)
    const setUser = useSetRecoilState(userState)
    const theme = createTheme({
        typography: {
          poster: {
            fontSize: '2rem',
            color: 'black',
          },
        },
        components: {
          MuiTypography: {
            defaultProps: {
              variantMapping: {
                // Map the new variant to render a <h1> by default
                poster: 'h3',
              },
            },
          },
        },
      });
    if(userLoading)console.log('loadin')
    if(userEmail){
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1,
            background:"#eeeeee"
        }}>
            <div style={{marginLeft: 10 ,cursor:'pointer'}} onClick={()=>{
              navigate('/')
            }}>
                <ThemeProvider theme={theme}>
                <Typography variant={"poster"}>GyanHub</Typography>
                </ThemeProvider>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/addcourse")
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/courses")
                            }}
                        >Courses</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                              isLoading : true,
                              userEmail:null
                            })
                            navigate('/')
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1,
        background:"#eeeeee"
    }}>
        <div style={{marginLeft: 10 ,cursor:'pointer'}} onClick={()=>{
              navigate('/')
            }}>
                <ThemeProvider theme={theme}>
                <Typography variant={"poster"}>GyanHub</Typography>
                </ThemeProvider>
            </div>
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10
      }}
    >
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
    
        <div style={{display: "flex"}}>
            <div style={{marginRight: 10}}>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signup")
                    }}
                >Signup</Button>
            </div>
            <div>
            <Button
    style={{
        marginRight:10,
        borderRadius: 3,
        backgroundColor: "#21b6ae",
    }}
    variant="contained"
    onClick={()=>{navigate('/signin')}}
    >
    Signin
</Button>
            </div>
        </div>
    </div>


}
export default Appbar 
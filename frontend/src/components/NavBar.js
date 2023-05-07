import React from "react";
import insta_log from "../images/logoinsta.png"
import home from "../images/home.svg";
import message from "../images/message.svg";
import find from "../images/find.svg";
import react from "../images/love.svg";
import pp from "../images/pp1.png"
import foodies_logo from "../images/foodies_logo.svg";
import home_logo from "../images/icons8-home.svg";
import home2_logo from "../images/icons8-home1.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function NavBar(){
    return(
        <>
                <div className="navbar__barContent">

                    <Grid container sx={{position:"fixed" }}>
                        <Grid item xs={2}>
                            <Link to="/Home" sr>
                                <img  src={foodies_logo} width="105px" />  
                            </Link>
                        </Grid>

                        <Grid item xs={5} sx={{marginTop:1}}>
                           <input text="text" className="navbar__searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={5} style={{"display":"flex"}}>

                            <Link to="/Home">
                                {/* <AddCircleOutlineOutlinedIcon fontSize="large" sx={{marginTop:1}}/> */}
                                
                            </Link>
                            <Link to="#">
                                <CollectionsOutlinedIcon fontSize="large" sx={{marginTop:1}}/>
                            </Link>

                            <Link to="/Home/Profile">
                                {/* <AccountCircleOutlinedIcon fontSize="large" sx={{marginTop:1}}/> */}
                                <Avatar src={pp} className="navbar__img" style={{"maxWidth":"40px","maxHeight":"40px"}} />
                            </Link>

                        </Grid>
                       
                    </Grid>
            
                </div>
        </>
    )

}

export default NavBar
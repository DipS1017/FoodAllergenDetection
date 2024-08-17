import React from "react"
import bg from "../../assets/food-allergies-1080x675.svg";
import { Box, Button, ButtonGroup, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Camera, Upload } from "@mui/icons-material";
import { Link } from "react-router-dom";


function Home() {
  const theme=useTheme();
const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
const isMediumScreen=useMediaQuery(theme.breakpoints.down('md'));


  return (
  <>
    <Box
      sx={{
        width: "100%",
        height: "80svh", // Adjust the height as needed
               position: "relative",
        display:'flex',
        justifyContent:'right',
        alignItems:'top'
      }}
    >

        <Container sx={{flex:isMediumScreen?'static':'50%',backgroundColor:isMediumScreen?'rgba(213,237,150,0.9)':'#D5ED9F',padding:'5%',zIndex:2,textAlign:'center'}}>

              <Typography variant={isSmallScreen?"h4":"h3"} sx={{zIndex:2,fontWeight:600,padding:'5%'}}>
        Food Allergen Classification using CNN
      </Typography>
          <Typography variant={isSmallScreen?"h6":"h5"} sx={{paddingX:'5%'}}>Discover our Food Allergen Classification tool—your solution for accurate, real-time allergen detection. Simplify food safety with our advanced technology!</Typography>
          <Typography variant="h6" sx={{padding:'5%',fontWeight:'600'}}>Use AI to detect allergens in your food quickly and easily.</Typography>
          <ButtonGroup sx={{
            padding:'5%'
          }}
            size={isSmallScreen?"small":"large"}
        disableElevation  variant="contained" >
           <Link to="/captured-picture">
<Button><Upload/> Upload Photo</Button>
            </Link> 
            <Link to="/realtime-camera">

            <Button><Camera/>Real-Time Camera</Button>
            </Link>
          </ButtonGroup>
        </Container>
      <Box
          
          sx={{

         backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
            flex:'50%',
            position:isMediumScreen?'absolute':'flex',
          width: isMediumScreen?"100%":"40%",
          height: "80svh",

        }}
      />
    </Box>
    
      </>
  );
}

export default Home;

import { useState } from "react";
import bg from "../../assets/food-allergies-1080x675.svg";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grow,
  Paper,
  Typography,
} from "@mui/material";
import { Camera, Login, Upload } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import Cards from './Cards';
import { ResponsiveTypography } from "../Theme/StyledComponents";
function Home() {
  const { isSmallScreen, isMediumScreen } = useResponsive();
  const [checked, ] = useState(true);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80svh", // Adjust the height as needed
          position: "relative",
          display: "flex",
          justifyContent: "right",
          alignItems: "top",
        }}
      >
        <Grow in={checked}>
          <Container
            sx={{
              flex: isMediumScreen ? "static" : "50%",
              backgroundColor: isMediumScreen
                ? "rgba(213,237,150,0.9)"
                : "#D5ED9F",
              padding: "5%",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant={isSmallScreen ? "h5" : "h3"}
              sx={{ zIndex: 2, fontWeight: 600, padding: "5%" }}
            >
              Food Allergen Classification
            </Typography>
            <Typography
              variant={isSmallScreen ? "body1" : "h5"}
              sx={{ paddingX: "3%" }}
            >
              Discover our Food Allergen Classification tool—your solution for
              accurate, real-time allergen detection. Simplify food safety with
              our advanced technology!
            </Typography>
            <Typography variant="h6" sx={{ padding: "2%", fontWeight: "600" }}>
              Use AI to detect allergens in your food quickly and easily.
            </Typography>
            <ButtonGroup
              sx={{
                paddingX: "3%",
              }}
              size={isSmallScreen ? "small" : "large"}
              disableElevation
              variant="contained"
            >
              <Link to="/captured-picture">
                <Button>
                  <Upload /> Upload Photo
                </Button>
              </Link>
              <Link to="/realtime-camera">
                <Button>
                  <Camera />
                  Real-Time Camera
                </Button>
              </Link>
            </ButtonGroup>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "600", padding: "2%  " }}
            >
              Not logged in? Log in to use the real-time camera feature.
            </Typography>
            <Link to="/login">
            <Button variant="contained" color="success">

              <Login></Login>Log In
            </Button>
</Link>
          </Container>
        </Grow>
        
        <Grow in={checked}>
          <Box
            sx={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flex: "50%",
              position: isMediumScreen ? "absolute" : "flex",
              width: isMediumScreen ? "100%" : "40%",

              height: "80svh", // Adjust the height as needed
            }}
          />

        </Grow>
      </Box>
        <Box sx={{
          paddingX:'5%',paddingY:'1%'
        }}>
        <Paper sx={{padding:'8%',textAlign:'center'}}><ResponsiveTypography>Classification Groups</ResponsiveTypography>

      <Cards/>
          </Paper>

        
        </Box>

          </>
  );
}

export default Home;

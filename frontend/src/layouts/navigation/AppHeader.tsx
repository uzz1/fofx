import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Box
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import {logoFofx} from "../../assets"
  import { useSelector, useDispatch } from "react-redux";
  import { logOutUser } from "redux/actions/user";
  import { logOutAdmin } from "redux/actions/admin";
  import { RootState } from "redux/reducers";
import { padding } from "@mui/system";
import { PaddingTwoTone } from "@mui/icons-material";

  
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },

    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "center",
      paddingTop: 10,
      paddingLeft: 10
  
    },
    logo2: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFFFF",
      textAlign: "center",
      paddingTop: 10,
      paddingLeft: 10
  
    },
    logoImg: {
      width: 50
  
    },
    logoBox: {
     display: "flex",
     flexDirection: "row"
  
    },
    logoBox2: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      backgroundColor: "#400CCC",
   
     },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 800,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  const AppHeader: React.FC = (): JSX.Element => {
    const { header, logo, logoImg, logoBox, logo2, logoBox2, menuButton, toolbar, drawerContainer } = useStyles();
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);
    const admin = useSelector((state: RootState) => state.admin);

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {fofxLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
                      <Box className={logoBox2}>
      <img src={logoFofx} alt="Fofx" className={logoImg} />
      <Typography variant="h6" component="h1" className={logo2}>
      Fofx
    </Typography>
      </Box>
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{fofxLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
        return (
          user.isAuthenticated && user.user.role === "user" ? (
           <>
            <Link
              component={RouterLink}
              to="/stocks/v2"
              color="inherit"
              style={{ textDecoration: "none" }}
          >
            <MenuItem>Dashboard</MenuItem>
          </Link>
          
          <Link
          component={RouterLink}
          to="#"
          color="inherit"
          style={{ textDecoration: "none" }}
          onClick={(e) => dispatch(logOutUser())}
      >
        <MenuItem>Logout</MenuItem>
      </Link>
      </>
          ) : admin.isAuthenticated && admin.admin.role === "admin" ? (
           <> 
            <Link
              component={RouterLink}
              to="/users"
              color="inherit"
              style={{ textDecoration: "none" }}
          >
            <MenuItem>Dashboard</MenuItem>
          </Link>
          <Link
          component={RouterLink}
          to="/stocks/v1"
          color="inherit"
          style={{ textDecoration: "none" }}
      >
        <MenuItem>Stocks</MenuItem>
      </Link>
          <Link
          component={RouterLink}
          to="#"
          color="inherit"
          style={{ textDecoration: "none" }}
          onClick={(e) => dispatch(logOutAdmin())}
      >
        <MenuItem>Logout</MenuItem>
      </Link>
          </>
          ) : 

         <>
          <Link
          component={RouterLink}
          to="/register"
          color="inherit"
          style={{ textDecoration: "none" }}
      >
        <MenuItem>Register</MenuItem>
      </Link>
      <Link
          component={RouterLink}
          to="/"
          color="inherit"
          style={{ textDecoration: "none" }}
      >
        <MenuItem>Login</MenuItem>
      </Link>
        </>
        
        );
      
    };
  
    const fofxLogo = (
      <>
      <Box className={logoBox}>
      <img src={logoFofx} alt="Fofx" className={logoImg} />
      <Typography variant="h6" component="h1" className={logo}>
      Fofx
    </Typography>
      </Box>
      
      
      </>
     
    );
  
    const getMenuButtons = () => {
        return (
          user.isAuthenticated && user.user.role === "user" ? (
            <>
            <Button
              color="inherit"
              to="/stocks/v2"
              component={RouterLink}
              className="menuButton"
          >
            Dashboard
          </Button>

          <Button
              color="inherit"
              to="#"
              component={RouterLink}
              className="menuButton"
              onClick={(e) => dispatch(logOutUser())}

          >
            Logout
          </Button>
           
       </>
           ) : admin.isAuthenticated && admin.admin.role === "admin" ? (
            <> 
             <Button
              color="inherit"
              to="/users"
              component={RouterLink}
              className="menuButton"
          >
            Dashboard
          </Button>
          <Button
              color="inherit"
              to="/stocks/v1"
              component={RouterLink}
              className="menuButton"
          >
            Stocks
          </Button>
          <Button
              color="inherit"
              to="#"
              component={RouterLink}
              className="menuButton"
              onClick={(e) => dispatch(logOutAdmin())}
          >
            Logout
          </Button>
           </>
           ) :
           <>
            <Button
              color="inherit"
              to="/register"
              component={RouterLink}
              className="menuButton"
          >
            Register
          </Button>
          <Button
              color="inherit"
              to="/"
              component={RouterLink}
              className="menuButton"
          >
            Login
          </Button>
           </>
          
        );
  
    };
  
    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
  export default AppHeader;

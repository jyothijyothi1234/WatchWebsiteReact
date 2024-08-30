import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Link } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),

    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ background: "black" }} open={open}>
        <Toolbar>
          <Grid
            container
            xs={12}
            md={12}
            sx={{
              paddingTop: { xs: "2px", md: "22px" },
              height: "7vh",

            }}
          >
            <Grid
              item
              xs={7}
              md={6}
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: { xs:"flex-start", md: "center" },
              }}
            >
              <EnergySavingsLeafIcon
                sx={{ height: { xs: "60px", md: "40px" }, width: "40px" }}
                />
            </Grid>

            <Grid
              container
              item
              xs={4}
              md={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: { xs: "space-around", md: "space-around" },
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontSize: { xs: "5px", md: "20px" } }}
                >
                  SHOP
                </Typography>
              </Link>

              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontSize: { xs: "5px", md: "20px" } }}
                >
                  WORKSHOP
                </Typography>
              </Link>

              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontSize: { xs: "5px", md: "20px" } }}
                >
                  BLOG
                </Typography>
              </Link>

              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontSize: { xs: "5px", md: "20px" } }}
                >
                  CONTACT
                </Typography>
              </Link>
            </Grid>

            <Grid container item xs={1} md={2}>
              <ShoppingCartIcon
                sx={{ height: { xs: "60px", md: "30px" }, width: "40px" }}
              />
            </Grid>
          </Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          },
        }}
        // variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            flexDirection:"column",
            paddingLeft:"20px",
          
          }}
        >
          <Link style={{ textDecoration: "none",padding:"10px 0" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "18px", md: "20px",":hover":{
                color:"violet"
              } } }}
            >
              SHOP
            </Typography>
          </Link>

          <Link style={{ textDecoration: "none",padding:"10px 0" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "18px", md: "20px",":hover":{
                color:"violet"
              } } }}
            >
              WORKSHOP
            </Typography>
          </Link>

          <Link style={{ textDecoration: "none",padding:"10px 0" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "18px", md: "20px" ,":hover":{
                color:"violet"
              }} }}
            >
              BLOG
            </Typography>
          </Link>

          <Link style={{ textDecoration: "none",padding:"10px 0" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "18px", md: "20px",":hover":{
                color:"violet"
              } } }}
            >
              CONTACT
            </Typography>
          </Link>
        </Grid>
      </Drawer>
    </Box>
  );
}

import React from "react";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

function BelowNavBar() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        border: "12px solid black",
        bgcolor: "black",
        padding: { xs: "0px 0 0px 0", md: "70px 0 40px 0" },
        height: { xs: "60vh", md: "0" },
      }}
    >
      <Grid container item xs={12} sx={{ display: "flex" }}>
        <Grid container item xs={12} md={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              02-233 Warszawa
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              Al. Jerozolimskie 12
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              email@contact.com
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              +48 500 500 500
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              Store Regulations
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              Privacy policy
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              Delivery
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "21px", md: "16px" }, color: "white" }}
            >
              Returns & exchanges
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={2} sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Grid
              item
              xs={3}
              md={4}
              sx={{ height: { xs: "10px", md: "20px" } }}
            >
              <IconButton>
                <FacebookIcon color="primary" />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={3}
              md={4}
              sx={{ height: { xs: "10px", md: "20px" } }}
            >
              <IconButton>
                <TwitterIcon color="primary" />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={3}
              md={4}
              sx={{ height: { xs: "10px", md: "20px" } }}
            >
              <IconButton>
                <InstagramIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BelowNavBar;


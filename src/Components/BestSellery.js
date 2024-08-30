import React from "react";
import { Grid, Typography } from "@mui/material";

function BestSellery() {
  return (
    <Grid container xs={12}>
      <Grid
        container
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            marginTop: { xs: "100px", md: "250px" },
            fontWeight: "bold",
            fontSize: { xs: "40px", md: "60px" },
          }}
        >
          Bestsellery
        </Typography>
      </Grid>

      <Grid container item xs={12} md={12} justifyContent="center">
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/images/blackcupimage.png"
            alt="not found"
            style={{ height: "60%", width: "100%" }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "20px", md: "18px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "15px 0 20px 0", md: "20px 0 0 0px" },
            }}
          >
            Moon Plate
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "25px", md: "22px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "15px 0 5px 0", md: "10px 0 0 0px" },
            }}
          >
            75$
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/images/steelimage.png"
            alt="not found"
            style={{ height: "60%", width: "90%", margin: "0 auto" }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "20px", md: "19px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "15px 0 20px 0px", md: "20px 0 0 0px" },
            }}
          >
            Silver set
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "25px", md: "22px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "5px 0 5px 0px", md: "10px 0 0 0px" },
            }}
          >
            125 zl
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/images/bottleimage.png"
            alt="not found"
            style={{ height: "60%", width: "100%", margin: "0 auto" }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "20px", md: "18px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "15px 0 20px 0px", md: "20px 0 0 0px" },
            }}
          >
            Nordic container
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "25px", md: "22px" },
              textAlign: {xs:"center",md:"left"},
              padding: { xs: "5px 0 5px 0px", md: "10px 0 0 0px" },
            }}
          >
            90$
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BestSellery;

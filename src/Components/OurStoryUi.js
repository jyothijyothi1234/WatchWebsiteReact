import React from "react";
import { Grid, Typography } from "@mui/material";

function OurStoryUi() {
  return (
    <Grid container xs={12}>
      <Grid container item xs={12} md={5} sx={{ position: "absolute" }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              paddingTop: { xs: "100px", md: "200px" },
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "40px", md: "60px" },
            }}
          >
            Our story
          </Typography>

          <Grid
            item
            xs={12}
            md={11}
            sx={{ padding: { xs: "20px", md: "10px 0 1px 250px" } }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "16px", md: "23px" },
                color: "white",
                textAlign: { xs: "center", md: "left" },
                lineHeight: { xs: "30px", md: "30px" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
              Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
              imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
              Curabitur egestas sed nisl rhoncus finibus.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          paddingTop: "7px",
          height: { xs: "500px", md: "900px" },
          width: "100px",
        }}
      >
        <img
          src="/images/blackcupimage.png"
          alt="not found"
          style={{ height: "100%", width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

export default OurStoryUi;

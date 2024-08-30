import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function CeramicStudio() {
  return (
    <Grid container xs={12} sx={{ marginTop: { xs: "30px", md: "10px" } }}>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "90vh" },
          overflow: "hidden",
        }}
      >
        <img
          src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/ls0ljcz6/element_210/rwdMode_1/2400x836/main.webp"
          alt="not found"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Grid
          container
          item
          xs={12}
          sx={{
            justifyContent: "center",
            position: "absolute",
            alignItems: "center",
            height: { xs: "40%", md: "100%" },
            top: 0,
          }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "60px", md: "70px" },
                padding: { xs: "100px 0  0px 0px", md: "100px  0 0 20px" },
              }}
            >
              Ceramics studio
            </Typography>

            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "white",
                fontSize: { xs: "20px", md: "24px" },
                display: "flex",
                padding: { xs: "30px 40px 0 40px", md: "10px 20px 0 30px" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              orci massa, dapibus quis molestie sit amet, pharetra vitae dolor.
              Praesent auctor, dui id maximus sagittis, lectus enim pharetra
              quam, ut laoreet tortor metus ut ipsum.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "brown",
                width: { xs: "90px", md: "250px" },
                height: { xs: "25px", md: "60px" },
                fontSize: { xs: "10px", md: "17px" },
                margin: { xs: "50px 0 0 15px", md: "33px 0 20px 0" },
                padding: { xs: "25px 90px " },
              }}
            >
              ShowMore
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CeramicStudio;

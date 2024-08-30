import React from "react";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";

function PotUi() {
  return (
    <Grid container item xs={12}>
      <Grid
        container
        item
        xs={12}
        md={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: { xs: "30px 0 80px 0", md: " 50px 0 100px 200px" },
        }}
      >
        <Grid container item xs={12} md={5}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              height: { xs: "260px", md: "600px" },
              width: { xs: "230px", md: "700px" },
            }}
          >
            <img
              src="/images/workpotimage.png"
              alt="not found"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} md={5}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "50px", md: "60px" },

                paddingTop: { xs: "50px", md: "50px" },
                margin: { xs: "0 20px 15px 0", md: "0 100px 0px 200px" },
              }}
            >
              Workshops
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "17px", md: "23px" },
                margin: { xs: "0 0 30px 0", md: "0 10px 0 220px" },
                textAlign: { xs: "center", md: "left" },
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

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                padding: { xs: "15px 50px  ", md: "20px 60px " },
                margin: { xs: "5px 0px 0 0", md: "10px  150px 0 170px" },
                fontSize: { xs: "15px", md: "15px" },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PotUi;

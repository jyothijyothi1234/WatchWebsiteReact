import React from "react";
import { Grid, Typography } from "@mui/material";

function CupsUi() {
  return (
    <Grid container xs={12} justifyContent={"center"}>
      <Grid
        container
        item
        xs={12}
        md={8}
        sx={{
          padding: { xs: "30px 0 90px 0", md: "100px 0px 5px 0" },
          marginBottom: { xs: "10px", md: "100px" },
        }}
      >
        <Grid item xs={5} md={6} sx={{ height: { xs: "500px", md: "700px" } }}>
          <img
            src="/images/bottleimage.png"
            alt="not found"
            style={{ height: "100%", width: "90%" }}
          />
        </Grid>

        <Grid
          container
          item
          xs={7}
          md={6}
          sx={{
            height: { xs: "300px", md: "560px" },
            padding: { xs: "0  0 0 10px", md: "0 0 0 0" },
          }}
        >
          <Grid item xs={11} height={"50%"}>
            <img
              src="/images/cup1image.png"
              alt="not found"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            display={"flex"}
            width={"100%"}
            sx={{
              padding: { xs: "0px 0 0px 0px ", md: "20px 0 0 0" },
              height: { xs: "300px", md: "820px" },
            }}
          >
            <Grid item xs={12} md={6} sx={{ display: "flex", height: "50%" }}>
              <img
                src="/images/steelimage.png"
                alt="not found"
                style={{ width: "100%", height: "100%", paddingRight: "15px" }}
              />
            </Grid>
            <Grid
              item
              xs={11}
              md={6}
              sx={{ height: { xs: "200px", md: "400px" } }}
            >
              <img
                src="/images/onlyonebottleimage.png"
                alt="not found"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CupsUi;

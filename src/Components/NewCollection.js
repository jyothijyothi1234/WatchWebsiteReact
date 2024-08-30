import React from "react";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";

function NewCollection() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        marginBottom: { xs: "10px", md: "50px" },
        paddingBottom: { xs: "50px", md: "120px" },
        border: "1px solid white",
        bgcolor: "grey",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container item xs={12} md={10} sx={{ justifyContent: "center" }}>
        <Grid container item xs={12} md={4}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "35px", md: "30px" },
                fontWeight: "bold",
                padding: {
                  xs: "50px 0px 0px 0px",
                  md: "150px 50px 20px 20px",
                },
              }}
            >
              New collection
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                textAlign: {xs:"center",md:"left"},
                lineHeight: { xs: "18px", md: "30px" },
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
          <Grid item xs={12} md={7} sx={{ marginTop: { xs: "10px", md: "20px" } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "brown",
                padding: { xs: "12px 70px ", md: "15px 70px" },
                fontSize: { xs: "15px", md: "15px" },
              }}
            >
              More
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={4}
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "50px 0 0 0", md: "100px  0 0 100px" },
          }}
        >
          <Grid container item xs={12}>
            <Grid
              item
              justifyContent="center"
              xs={6}
              md={11}
              sx={{
                height: { xs: "200px", md: "250px" },
                width: { xs: "100px", md: "300px" },
                marginBottom: "20px",
              }}
            >
              <img
                src="/images/steelimage.png"
                alt="not found"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid
              item
              justifyContent="center"
              xs={6}
              md={11}
              sx={{
                height: { xs: "200px", md: "250px" },
                width: { xs: "10px", md: "300px" },
              }}
            >
              <img
                src="/images/steelimage.png"
                alt="not found"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
         container  item
          xs={12}
          md={4}
          sx={{
            padding: { xs: "0px 0 0 0", md: "50px 50px 0 0" },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              height: { xs: "300px", md: "565px" },
              width: { xs: "100px", md: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: { xs: "0px 0 0 0", md: "49px 0 0 0" },
            }}
          >
            <img
              src="/images/steelimage.png"
              alt="not found"
              style={{
                height: "100%",
                width: "100%",
                padding: { xs: "0px 0px 0px 0px", md: "100px 0 0 25px" },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewCollection;

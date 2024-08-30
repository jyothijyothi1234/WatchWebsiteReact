import React from "react";
import { Grid, Typography } from "@mui/material";

function EmployeesUi() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        bgcolor: "grey",
        height: { xs: "100vh", md: "80vh" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            paddingTop: { xs: "70px", md: "40px" },
            fontWeight: { xs: "bold" },
            fontSize: { xs: "40px", md: "60px" },
            marginBottom: "10px",
          }}
        >
          Our employees
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Grid item xs={3} md={4} sx={{ height: { xs: "90px", md: "130px" } }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvQlpZ9znrHNVQBbgYK3nr3htmSSys_LiUXCP-hZZDu7-0LswgU6UnHTQBA&s"
              alt="not found"
              style={{ borderRadius: "50%", height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "25px", md: "25px" },
                padding: { xs: "20px  0", md: "20px 0  " },
              }}
            >
              Mary Smith
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Grid
            item
            xs={3}
            md={4}
            sx={{
              height: { xs: "90px", md: "130px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtg4aeguhQK3c7-1lRUZJ8m55eByGR0PdBY-y80y1qLRqZp8tJ_l17R6jRw&s"
              alt="not found"
              style={{ borderRadius: "50%", height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "25px", md: "25px" },
                padding: { xs: "10px 0 10px 0", md: "20px 0 20px 0" },
              }}
            >
              James Jones
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Grid
            item
            xs={3}
            md={4}
            sx={{
              height: { xs: "90px", md: "130px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZKx0RUH-oKeAheDlxd9D1hAuDJn-XTVg7O4JEE61CRIWbz0EpZJWBdHI-A&s"
              alt="not found"
              style={{ borderRadius: "50%", height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "25px", md: "25px" },
                padding: { xs: "10px 0 10px 0", md: "20px 0 20px 0" },
              }}
            >
              Emily Murphy
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "15px", md: "20px" },
                margin: { xs: "0 0 80px 0", md: "0" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeesUi;

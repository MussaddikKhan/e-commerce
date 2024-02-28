import { Grid, Link, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      color={"white"}
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Company
        </Typography>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            About
          </Button>
        </div>

        <div>
          <Button variant="body2" component="p" gutterBottom>
            Blog
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Jobs
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Press
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Partners
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Solutions
        </Typography>

        <div>
          <Button variant="body2" component="p" gutterBottom>
            Marketing
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Analytics
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Commerce
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Insights
          </Button>
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Support
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Documentation
        </Typography>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Guides
          </Button>
        </div>

        <div>
          <Button variant="body2" component="p" gutterBottom>
            API Status
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Legal
        </Typography>
        <div></div>
        <Button variant="body2" component="p" gutterBottom>
          Claim
        </Button>{" "}
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Privacy
          </Button>{" "}
        </div>
        <div>
          <Button variant="body2" component="p" gutterBottom>
            Terms
          </Button>{" "}
        </div>
      </Grid>
      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 My Company. All rights reserved.
        </Typography>
        <Button variant="body2" component="p" align="center">
          Made with love by Me.
        </Button>
        <Typography variant="body2" component="p" align="center">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.flaticon.com/"
            color="inherit"
            underline="always"
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

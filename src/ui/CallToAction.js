import React from "react";
import ReactGA from "react-ga";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("assets/mobileBackground.jpg")`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      className={classes.background}
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h1"
              style={{ lineHeight: matchesSM && 1.1 }}
              gutterBottom
            >
              Simple Software. <br />
              {matchesSM && <br />} Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" }}
              gutterBottom
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              <Button
                component={Link}
                href="/revolution"
                className={classes.learnButton}
                variant="outlined"
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            ReactGA.event({
              category: "Estimate",
              action: "Call To Action Pressed",
            });
            props.setValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;

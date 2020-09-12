import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    display: "flex",
    alignSelf: "flex-end",
  },
});

class Nav extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.nav}>
        <ListAltIcon fontSize="large" color="secondary" />
        <h1 style={{ letterSpacing: "1px" }}> to do list</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);

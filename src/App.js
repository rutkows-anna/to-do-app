import React from "react";
import ToDo from "./components/ToDo";
import Nav from "./components/Nav";
import { Container, CircularProgress } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import firebase from "firebase";

const styles = (theme) => ({
  toDoApp: {
    padding: "2%",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "14px",
    fontFamily: "Roboto",
  },
});

class App extends React.Component {
  state = {
    user: null,
    loading: true,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
        this.setState({
          user: true,
          loading: false,
        });
      } else {
        this.setState({
          user: false,
          loading: false,
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="sm" className={classes.toDoApp}>
          <Nav />
          {this.state.loading ? (
            <CircularProgress color="secondary" className={classes.loader} />
          ) : this.state.user ? (
            <ToDo />
          ) : (
            <SignIn />
          )}
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(App);

import React from "react";
import ToDo from "./components/ToDo";
import Nav from "./components/Nav";
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import SignIn from "./components/SignIn";
import firebase from "firebase";

const Logged = 'Logged'
const Login = 'Login'


const styles = theme => ({
    toDoApp: {
      padding: '5%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '14px',
      fontFamily: 'Roboto'
  },
})

class App extends React.Component { 
  state = {
    user: null,
  }

  handleLogin = () => {
    this.setState({
      user: Login
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
        this.setState({
          user: Logged
        })
      } else {
        this.setState({
          user: null
        })
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
      <Container className={classes.toDoApp} >
          <Nav /> 
          { this.state.user === Logged ? <ToDo /> : <SignIn onLogin={this.handleLogin} /> }
      </Container>
      </>
    )
  }
}

export default withStyles(styles)(App);
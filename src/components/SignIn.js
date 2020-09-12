import React from "react";
import { Button, TextField, Link } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";

const styles = (theme) => ({
  form: {
    width: "100%",
    maxWidth: 400,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  signUp: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    fontWeight: "600",
    marginLeft: "1.5%",
    fontSize: "14px",
  },
});
class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    errorStyle: false,
    signUp: false,
  };

  validation = (error) => {
    if (error.code === "auth/invalid-email") {
      return "Niepoprawny adres e-mail.";
    } else if (error.code === "auth/weak-password") {
      return "Hasło musi posiadać co najmniej 6 znaków.";
    } else {
      return "Nieudana próba rejestracji.";
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSignUp = (event) => {
    event.preventDefault();
    this.setState({
      signUp: !this.state.signUp,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.state.signUp) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          firebase.database().ref(`/users/${user.uid}`).set({
            email: this.state.email,
          });
        })
        .catch((error) => {
          this.setState({
            error: this.validation(error),
            errorStyle: true,
          });
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          this.setState({
            error: "Nieudana próba logowania.",
            errorStyle: true,
          });
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={this.handleOnSubmit}
        >
          <TextField
            className={classes.input}
            variant="outlined"
            color="secondary"
            size="small"
            label="E-mail"
            name="email"
            autoComplete="username"
            value={this.state.email}
            onChange={this.handleOnChange}
            error={this.state.errorStyle}
          />

          <TextField
            className={classes.input}
            color="secondary"
            type="password"
            label="Hasło"
            name="password"
            variant="outlined"
            size="small"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleOnChange}
            helperText={this.state.error}
            error={this.state.errorStyle}
          />

          <Button
            className={classes.input}
            type="submit"
            variant="contained"
            color="secondary"
          >
            {" "}
            {this.state.signUp ? "Zarejestruj się" : "Zaloguj się"}
          </Button>
          {this.state.signUp ? (
            <p className={classes.signUp}>
              Posiadasz już konto?{" "}
              <Link
                component="button"
                color="secondary"
                className={classes.link}
                onClick={this.handleOnSignUp}
              >
                {" "}
                Zaloguj się.
              </Link>
            </p>
          ) : (
            <p className={classes.signUp}>
              Nie posiadasz jeszcze konta?{" "}
              <Link
                component="button"
                color="secondary"
                className={classes.link}
                onClick={this.handleOnSignUp}
              >
                {" "}
                Zarejestruj się.
              </Link>
            </p>
          )}
        </form>
      </>
    );
  }
}

export default withStyles(styles)(SignIn);

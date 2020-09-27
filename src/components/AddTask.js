import React from "react";
import { Button, TextField } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { DATABASE_URL } from "../index";

const styles = (theme) => ({
  form: {
    width: "100%",
    maxWidth: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
});

class AddTask extends React.Component {
  state = {
    task: "",
    done: false,
  };

  handleOnChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const user = firebase.auth().currentUser;
    fetch(`${DATABASE_URL}/users/${user.uid}/todo.json`, {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then(() => {
      this.props.onFetchTasks();
      this.setState({
        task: "",
      });
    });
  };
  
 handleOnKeypress = (event) => {
  if (event.keyCode === 13) {
    this.handleOnSubmit();
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
            onChange={this.handleOnChange}
            value={this.state.task}
            onKeyPress={this.handleOnKeypress}
          />

          <Button
            className={classes.input}
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
          >
            Dodaj zadanie
          </Button>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(AddTask);

import React from "react";
import {
  Checkbox,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { DATABASE_URL } from "../index";

const styles = (theme) => ({
  list: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    boxShadow: "0 .5rem 1rem rgba(0,0,0,0.15)",
  },
});

class ToDoItemEdit extends React.Component {
  state = {
    task: this.props.task,
    done: this.props.done,
  };

  handleOnChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleOnCloseClick = () => {
    this.props.onClose();
  };

  handleOnSaveClick = () => {
    const user = firebase.auth().currentUser;
    fetch(`${DATABASE_URL}/users/${user.uid}/todo/${this.props.id}.json`, {
      method: "PUT",
      body: JSON.stringify(this.state),
    }).then(() => {
      this.props.onSave();
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <List className={classes.list}>
          <ListItem dense button onClick={this.handleOnDoneTask}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                type="checkbox"
                onChange={this.handleOnDoneTask}
                checked={this.state.done}
              />
            </ListItemIcon>
            <ListItemText>
              <TextField
                variant="outlined"
                color="secondary"
                size="small"
                name="task"
                value={this.state.task}
                onChange={this.handleOnChange}
              />{" "}
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title="Zapisz">
                <IconButton onClick={this.handleOnSaveClick}>
                  <SaveIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Anuluj">
                <IconButton onClick={this.handleOnCloseClick} color="secondary">
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </>
    );
  }
}

export default withStyles(styles)(ToDoItemEdit);

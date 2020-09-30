import React from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";
import ToDoItemEdit from "./ToDoItemEdit";
import { Tooltip, Fab, CircularProgress, Chip } from "@material-ui/core/";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { DATABASE_URL } from "../index";

const styles = (theme) => ({
  list: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(4),
    boxShadow: "0 .5rem 1rem rgba(0,0,0,0.15)",
  },
  loader: {
    marginBottom: theme.spacing(2),
  },
  chips: {
    width: "100%",
    marginBottom: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
  chip: {
    margin: theme.spacing(1),
  },
  signOut: {
    margin: "1%",
  },
});
class ToDo extends React.Component {
  state = {
    todo: [],
    editId: null,
    loading: true,
    showDone: true,
    showUndone: true,
  };

  fetchTasks = () => {
    const user = firebase.auth().currentUser;
    fetch(`${DATABASE_URL}/users/${user.uid}/todo.json`)
      .then((response) => response.json())
      .then((todo) => {
        const todoList = todo
          ? Object.keys(todo).map((key) => {
              return {
                id: key,
                ...todo[key],
              };
            })
          : [];
        this.setState({
          todo: todoList,
          loading: false,
        });
      });
  };

  handleItemEdit = (editId) => {
    this.setState({
      editId,
    });
  };

  resetEditId = () => {
    this.setState({
      editId: null,
    });
  };

  handleShowDone = () => {
    this.setState({
      showDone: true,
    });
  };

  handleShowUndone = () => {
    this.setState({
      showUndone: true,
    });
  };

  handleDeleteShowDone = () => {
    this.setState({
      showDone: false,
    });
  };

  handleDeleteShowUndone = () => {
    this.setState({
      showUndone: false,
    });
  };

  handleItemSave = () => {
    this.fetchTasks();
    this.resetEditId();
  };

  handleOnSignOutClick = () => {
    firebase.auth().signOut();
  };

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <AddTask onFetchTasks={this.fetchTasks} />
        <div className={classes.chips}>
          <Chip
            size="small"
            label="ZROBIONE"
            clickable
            className={classes.chip}
            color={this.state.showDone ? "secondary" : "default"}
            icon={<CheckBoxIcon />}
            onClick={this.handleShowDone}
            onDelete={this.handleDeleteShowDone}
          />
          {"   "}
          <Chip
            size="small"
            label="NIEZROBIONE"
            clickable
            className={classes.chip}
            color={this.state.showUndone ? "secondary" : "default"}
            icon={<CheckBoxOutlineBlankIcon />}
            onClick={this.handleShowUndone}
            onDelete={this.handleDeleteShowUndone}
          />
        </div>
        {this.state.loading ? (
          <CircularProgress color="secondary" className={classes.loader} />
        ) : (
          this.state.todo
            .filter((todoItem) => {
              if (this.state.showDone && this.state.showUndone) {
                return true;
              } else if (this.state.showDone) {
                return todoItem.done === true;
              } else if (this.state.showUndone) {
                return todoItem.done === false;
              } else {
                return false;
              }
            })
            .map((todoItem) =>
              todoItem.id === this.state.editId ? (
                <ToDoItemEdit
                  key={todoItem.id}
                  onClose={this.resetEditId}
                  onSave={this.handleItemSave}
                  onFetchTasks={this.fetchTasks}
                  {...todoItem}
                />
              ) : (
                <ToDoItem
                  key={todoItem.id}
                  onFetchTasks={this.fetchTasks}
                  onEdit={this.handleItemEdit}
                  {...todoItem}
                />
              )
            )
        )}
        <Tooltip title="Wyloguj się">
          <Fab
            color="secondary"
            className={classes.signOut}
            onClick={this.handleOnSignOutClick}
          >
            <ExitToAppIcon />
          </Fab>
        </Tooltip>
      </>
    );
  }
}

export default withStyles(styles)(ToDo);

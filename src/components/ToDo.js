import React from "react";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";
import ToDoItemEdit from "./ToDoItemEdit";
import { Tooltip, Fab } from "@material-ui/core/";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
});
class ToDo extends React.Component {
  state = {
    todo: [],
    editId: null,
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
        {this.state.todo.map((todoItem) =>
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
        )}
        <Tooltip title="Wyloguj się">
          <Fab
            color="secondary"
            className={classes.icon}
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

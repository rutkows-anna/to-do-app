import React from "react";
import { Checkbox, Tooltip, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton  } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import firebase from "firebase";
import { DATABASE_URL } from "../index";

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(4),
    boxShadow: '0 .5rem 1rem rgba(0,0,0,0.15)'
  },
  undone: {
    color: 'rgba(0, 0, 0, 0.9)',
  },
  done: {
    color: 'rgba(0, 0, 0, 0.4)',
    textDecoration: 'line-through',
    textDecorationColor: 'rgba(0, 0, 0, 0.3)'
  },
})

class ToDoItem extends React.Component {
  state = {
    task: this.props.task,
    done: this.props.done,
  };

  handleOnDeleteTask = () => {
    const user = firebase.auth().currentUser;
    fetch(`${DATABASE_URL}/users/${user.uid}/todo/${this.props.id}.json`, {
      method: "DELETE",
    }).then(() => {
      this.props.onFetchTasks();
    });
  };
  handleOnDoneTask = (event) => {
    this.setState(
      {
        done: !this.state.done,
      },
      () => {
        const user = firebase.auth().currentUser;
        fetch(`${DATABASE_URL}/users/${user.uid}/todo/${this.props.id}.json`, {
          method: "PUT",
          body: JSON.stringify(this.state),
        }).then(() => {
          this.props.onFetchTasks();
        });
      }
    );
  };

  handleOnEditClick = (event) => {
    event.preventDefault();
    this.props.onEdit(this.props.id);
    console.log(this.props.id)
  };

  render() {
    const { classes } = this.props;
    return (
      <>
      <List className={classes.list}>
          <ListItem dense button onClick={this.handleOnDoneTask}>
              <ListItemIcon>
              <Tooltip title={this.state.done ? 'Oznacz jako niezrobione' : 'Oznacz jako zrobione'}>
                <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                  type="checkbox"
                  onChange={this.handleOnDoneTask}
                  checked={this.state.done}
                />
                </Tooltip>
              </ListItemIcon>
            <ListItemText className={this.state.done ? classes.done : classes.undone}>    
                {this.props.task} 
            </ListItemText>
            <ListItemSecondaryAction>
            <Tooltip title="Edycja">
              <IconButton  onClick={this.handleOnEditClick}>
                 <EditIcon />
              </IconButton>
              </Tooltip>
              <Tooltip title="Usuń">
              <IconButton edge="end" onClick={this.handleOnDeleteTask} color="secondary">
                 <DeleteIcon />
              </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
          </List>

      </>
    );
  }
}

export default withStyles(styles)(ToDoItem);
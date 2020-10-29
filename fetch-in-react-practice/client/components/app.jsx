import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(error => console.error(error.message));
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: this.state.todos.concat(data)
        });
      })
      .catch(error => console.error(error.message));
  }
  /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

  toggleCompleted(todoId) {

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        const newObjOpp = {
          isCompleted: !this.state.todos[i].isCompleted
        };
        const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newObjOpp)
        };
        fetch(`/api/todos/${todoId}`, requestOptions)
          .then(res => res.json())
          .then(data => {
            const newListArray = [...this.state.todos];
            newListArray.splice(i, 1, data);
            this.setState({
              todos: newListArray
            });
          })
          .catch(error => console.error(error.message));
      }
    }

    /**
     * Find the index of the matching todo in the state array.
     * Find its "isCompleted" status.
     * Make a new Object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in state.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

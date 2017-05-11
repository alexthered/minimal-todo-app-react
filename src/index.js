import React from 'react';
import ReactDOM from 'react-dom'


import TodoDataService from './service/TodoDataService';
import TodoApp from './components/TodoApp'

console.log("App is starting...");
const todoDataService = new TodoDataService();
ReactDOM.render(
	<TodoApp dataService={todoDataService} />,
	document.getElementById('app')
);
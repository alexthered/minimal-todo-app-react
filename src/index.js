import React from 'react';
import ReactDOM from 'react-dom'


class TodoApp extends React.Component {
	render() {
		return (
			<h2> Down and dirty TodoApp based on React.js </h2>
		);
	}
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
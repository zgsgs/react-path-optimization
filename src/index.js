import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {Types, Typography, GuttersGrid}  from './components';

function App() {
  return (
  	<div >
    	<Button variant="contained" color="primary">
      		Hello World
    	</Button>
    	<Types />
    	<Typography />
    	<GuttersGrid />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
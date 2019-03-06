import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './styles.scss';  // const styles = require('./styles.scss'); <-- Also works

import RootComponent from './components/root/root_component';

ReactDOM.render(
	<RootComponent name="Webpack!"/>,
	document.getElementById('root')
);

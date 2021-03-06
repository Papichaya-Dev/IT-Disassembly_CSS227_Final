import React, { Component } from 'react';
import NewsOne from './NewsOne';
import NewsTwo from './NewsTwo';
import NewsThree from './NewsThree';
import NewsFour from './NewsFour';
import NewsFive from './NewsFive';
import { Switch } from '@material-ui/core';
import Dashboard from '../dashboard/Dashboard';

class index extends React.Component {
	render() {
		switch (this.props.match.params.newsNum) {
			case 'NewsOne':
				return <NewsOne />;
			case 'NewsTwo':
				return <NewsTwo />;
			case 'NewsThree':
				return <NewsThree />;
			case 'NewsFour':
				return <NewsFour />;
			case 'NewsFive':
				return <NewsFive />;
			default:
				return <Dashboard />;
		}
	}
}

export default index;

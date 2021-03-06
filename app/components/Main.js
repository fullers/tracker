//this is the main app component.. sets up the header and static content

//include react & react-router
var React = require('react');
var Search = require('./Login.js');

//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass({
	//every component has to have a render function
	render: function() {
		return (

				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-1">
							<div className="jumbotron">
								<h1 className="text-center"><img src="/assets/images/Diabetes Monitor-48.png"/> Glucose Tracker</h1>
								<p className="lead text-center">Track your diabetes glucose levels!</p> 
							</div>
						</div>
					</div>
				<div className="container">
						<div className="row">
							<div className="col-md-12">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
		);
	}
});

module.exports = Main;
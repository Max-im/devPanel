module.exports = function(React, ReactDOM) {
	

	const Component = React.createClass({
		render: function () {
			return (
				<div>
					<h1 className="header">Hello world</h1>
					<p>lorem</p>
				</div>

			);
		}
	});



	ReactDOM.render(
		<Component />, 
		document.getElementById('app')
	);


};
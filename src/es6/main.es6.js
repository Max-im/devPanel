module.exports = function(React, ReactDOM, Component) {
	

	class Comp extends Component{
		render(){
			return (
				<div>
					<h1 className="header">Hello world</h1>
					<p>lorem</p>
				</div>
			)
		}
	}


	ReactDOM.render(
		<Comp />, 
		document.getElementById('app')
	);


};
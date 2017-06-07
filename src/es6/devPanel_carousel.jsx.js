module.exports = function(React, ReactDOM, Component, $) {
	

	const array = []; 
	const api = '../json/courses.json';

	fetch(api)
		.then( blob => blob.json() )
		.then( data => {
			array.push(...data);

			reactStart(array);
		})

	function reactStart(arr){

		function ElemFactory(props){
			return (
				<section className={props.cls}>
					<h4 className="courses__header">{props.title}</h4>		
					<img className="courses__img" src={props.img}  alt={props.title} />
					<a href={props.link} target="_blank" className="courses__link">Link</a>
				</section>
			)
		}


		class Courses extends Component{
			render(){
				return (
					<div className="courses">
						{this.props.elements.map(function(elem){
							return <ElemFactory key={elem.id} title={elem.h4} img={elem.img} link={elem.link} cls={elem.cls} />
						})}
					</div>
				)
			}
		}



	





		ReactDOM.render(
			<Courses elements={arr} />, 
			document.getElementById('coursesWrap')
		);

	}






};


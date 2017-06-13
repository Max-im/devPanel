module.exports = function(React, ReactDOM, Component, $) {
	

	const arr 			= [];
	const api = '../json/devPanel.json';

	fetch(api)
		.then( blob => blob.json() )
		.then( data => {
			arr.push(...data);
			reactStart(arr[0]);

		});
 

	function reactStart(arr){


		function ElemFactory(props){
			return (
				<li className="links__item">
					<a className={`${props.cls} links__linkItem`} href={props.link} target="_blank">{props.name}</a>
				</li>
			)
		}



		// social
		class Mails extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">mails</h4>
						<ul className="links__render">
						{this.props.elements.soc.mails.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}

		class Work extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">work</h4>
						<ul className="links__render">
						{this.props.elements.soc.work.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}

		class Tools extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">tools</h4>
						<ul className="links__render">
						{this.props.elements.soc.tools.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		

		// prepare
		class Env extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">environment</h4>
						<ul className="links__render">
						{this.props.elements.prepare.environment.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Fonts extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">fonts</h4>
						<ul className="links__render">
						{this.props.elements.prepare.fonts.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Backgrounds extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">backgrounds</h4>
						<ul className="links__render">
						{this.props.elements.prepare.backgrounds.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Random extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">random</h4>
						<ul className="links__render">
						{this.props.elements.prepare.random.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		// HTML
		class Microdata extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">microdata</h4>
						<ul className="links__render">
						{this.props.elements.html.microdata.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}

		class Articles extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">articles</h4>
						<ul className="links__render">
						{this.props.elements.html.articles.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}



		// JS
		class Libraries extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">libraries</h4>
						<ul className="links__render">
						{this.props.elements.js.libraries.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Plagins extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">plagins</h4>
						<ul className="links__render">
						{this.props.elements.js.plagins.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}

		class ReactEl extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">react</h4>
						<ul className="links__render">
						{this.props.elements.js.react.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Games extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">games</h4>
						<ul className="links__render">
						{this.props.elements.js.games.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}


		class Node extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">node</h4>
						<ul className="links__render">
						{this.props.elements.js.node.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}
	
		class Tests extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">tests</h4>
						<ul className="links__render">
						{this.props.elements.js.tests.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}
	
		class Useful extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">useful</h4>
						<ul className="links__render">
						{this.props.elements.js.useful.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}
	


		// English
		class English extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">english</h4>
						<ul className="links__render">
						{this.props.elements.english.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}



		// News
		class News extends Component{
			render(){
				return (
					<div className={`links__mails links__block ${this.props.classN}`}>
						<h4 className="links__header">news</h4>
						<ul className="links__render">
						{this.props.elements.news.map((elem, i) => {
							return <ElemFactory key={i.toString()} link={elem.link} cls={elem.cls} name={elem.name} />
						})}
						</ul>
					</div>
				)
			}
		}




		ReactDOM.render(

			<div className="links">
				<div className="links__social links__section">
					<Mails classN="links__block_social" elements={arr} />
					<Work classN="links__block_social" elements={arr} /> 
					<Tools classN="links__block_social" elements={arr} /> 
				</div>
				<div className="links__prepare links__section">
					<Env classN="links__block_prepare" elements={arr} />
					<Fonts classN="links__block_prepare" elements={arr} />
					<Backgrounds classN="links__block_prepare" elements={arr} />
					<Random classN="links__block_prepare" elements={arr} />
				</div>
				<div className="links__html links__section">
					<Microdata classN="links__block_html" elements={arr} />
					<Articles classN="links__block_html" elements={arr} />
				</div>
				<div className="links__js links__section">
					<Libraries classN="links__block_js" elements={arr} />
					<Plagins classN="links__block_js" elements={arr} />
					<ReactEl classN="links__block_js" elements={arr} />
					<Games classN="links__block_js" elements={arr} />
					<Node classN="links__block_js" elements={arr} />
					<Tests classN="links__block_js" elements={arr} />
					<Useful classN="links__block_js" elements={arr} />
				</div>
				<div className="links__eng links__section">
					<English classN="links__block_eng" elements={arr} />
				</div>
				<div className="links__news links__section">
					<News classN="links__block_news" elements={arr} />
				</div>
 
			</div>,
			document.querySelector('.linksTarget')
		);

	}



};


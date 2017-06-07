module.exports = function($) {
	

	const allPanels = document.querySelectorAll('.panelLink__item');
	const panelLink = document.querySelector('.panelLink');

	function openToggle(e){

		for(let i = 0 ; i < allPanels.length ; i++){
			allPanels[i].closest('.panelLink__item').classList.remove('panelLink__item_open');
		
		}
			e.target.closest('.panelLink__item').classList.toggle('panelLink__item_open');
			// activeToggle(e);
	}	

	function activeToggle(e){

		// setTimeout(function(){
		// 	e.target.closest('.panelLink__item').classList.toggle('panelLink__item_open');
		// }, 700)
	}

	panelLink.addEventListener('click', openToggle);




};
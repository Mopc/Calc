let total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('changes-check'),
	cmsCheck = document.getElementById('changes-cms'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');


const 	land = 5000, //Стоимость за лендинг 
		corp = 12000, //Стоимость за корпоративный сайт
		cms = 4000, //Стоимость за подключение CMS
		changes = 1000, //Стоимость за внесение изменений
		blocks = 500, //Стоимость за 1 блок
		pages = 2500; //Стоимость за 1 страницу

window.addEventListener('DOMContentLoaded', function() {
	tabLeft.addEventListener('click', () => {

		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		if(changesCheck.checked) {
			changesCheck.checked = false;
		};
		if(cmsCheck.checked) {
			cmsCheck.checked = false;
		};

		total = land;
		totalValue.value = total;
	});

	tabRight.addEventListener('click', () => {

		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';

		tabRight.classList.add('active');
		tabLeft.classList.remove('active');

		if(changesCheck.checked) {
			changesCheck.checked = false;
		};
		if(cmsCheck.checked) {
			cmsCheck.checked = false;
		};

		total = corp;
		totalValue.value = total;
	});

	counterBlock.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterBlock.value * blocks;
		totalValue.value = total;
	});

	counterPages.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterPages.value * pages;
		totalValue.value = total;
	});

	counterHours.addEventListener('change', () => {
		counterBlock.value = '';
		counterPages.value = '';
		total = 0;
		time = counterHours.value;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});

	counterRate.addEventListener('change', () => {
		counterBlock.value = '';
		counterPages.value = '';
		total = 0;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});

	changesCheck.addEventListener('change', () => {
		if(changesCheck.checked) {
			total += changes;
			totalValue.value = total;
		} else {
			total -= changes;
			totalValue.value = total;
		}
	});

	cmsCheck.addEventListener('change', () => {
		if(cmsCheck.checked) {
			total += cms;
			totalValue.value = total;
		} else {
			total -= cms;
			totalValue.value = total;
		}
	});
});




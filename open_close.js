const target = document.querySelectorAll('.target');

document.addEventListener('click', () => {
    target.forEach((item) => item.addEventListener('click', () => 
	item.querySelector('.hide').style.display = 'block'));
});
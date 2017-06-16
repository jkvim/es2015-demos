const addButton = document.querySelector('#btn_add');
const input = document.querySelector('.post input')

let data = { name: input.value}
console.log('data:', data)

addButton.addEventListener('click',function(){
	let data = { name: input.value}
	var options = {
		method: 'POST',
		headers:{'Content-Type': 'application/json'},
		body:JSON.stringify(data)
	}

	fetch('http://localhost:3000/heros', options)
})

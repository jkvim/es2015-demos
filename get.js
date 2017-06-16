const submitButton = document.querySelector('#btn_search');
const searchInput = document.querySelector('.search input');
const heroList = document.querySelector('.hero-list');

const fetchHero = () => {
    const keyword = searchInput.value;
    fetch(`http://localhost:3000/heros?name_like=${keyword}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
                heroList.innerHTML = '';
                result.forEach(hero => {
                    const li = document.createElement('li');
                    li.innerText = hero.name;
                    heroList.appendChild(li);
                });
        });
}

submitButton.onclick = fetchHero;

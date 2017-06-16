import './index.scss';
const submitButton = document.querySelector('.submit');
const searchInput = document.querySelector('.search input');
const heroList = document.querySelector('.hero-list');

const fetchHero = () => {
    const keyword = searchInput.value;
    fetch(`http://localhost:3000/heros?keyword=${keyword}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result.length > 0) {
                heroList.innerHTML = '';
                result.forEach(hero => {
                    const li = document.createElement('li');
                    li.innerText = hero.name;
                    heroList.appendChild(li);
                });
            } else {
                alert('没有找到相关数据');
            }
        });
}

submitButton.onclick = fetchHero;
searchInput.onkeydown = function (event) {
    if (event.keyCode === 13) fetchHero()
}

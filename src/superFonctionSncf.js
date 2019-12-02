let button = document.getElementById('complete_station__button');
let listHolder = document.getElementById('list__holder');
let list = document.getElementById('cities__list');
let searchInput = document.getElementById('station_search__input');
let searchForm = document.getElementById('search__form');

/**
 * @param city
 * @returns {Promise<void>}
 */
async function completeList(city) {
    const promise = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=' + city);
    const promiseJson = await promise.json();
    const cities = promiseJson.records;
    cities.map((city) => {
        let li = document.createElement('li');
        let liContent = document.createTextNode(city.fields.gare_alias_libelle_noncontraint);
        li.appendChild(liContent);
        list.appendChild(li);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML = '';
    completeList(searchInput.value).then(_ => console.log('Call completed without problem'));
}, false);

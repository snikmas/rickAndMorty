//Example fetch using pokemonapi.co
document.querySelector('.press').addEventListener('click', getFetch)

function openDiv() {
  document.querySelector('.grid-display').style.display = 'grid';
}


function getFetch(){

  openDiv();


  const url = 'https://rickandmortyapi.com/api/'
  const characterId = Math.floor(Math.random() * 827);


  fetch(`${url}character/${characterId}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data);
    document.querySelector('.character').src = data.image;
    document.querySelector('.name').innerHTML = "Name: " + data.name;
    document.querySelector('.gender').innerHTML = "Gender: " + data.gender;
    document.querySelector('.race').innerHTML = "Race: " + data.species;
    document.querySelector('.location').innerHTML = "Location: " + data.location.name;
    document.querySelector('.status').innerHTML = 'Status: ' + data.status;
  })


  .catch(err => {
      console.log(`error ${err}`)
  });
}
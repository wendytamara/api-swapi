
const url = 'https://swapi.co/api/people/';
const $containerImg = $('#responseContainer');

function showPersonajes() {
  for (let i = 0; i < personajes.length; i++) {
    let output = `<div class="">
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img class="img-person " src="${personajes[i].img}" alt="">
        <div class="caption text-center">
          <h3>${personajes[i].name}</h3>
          <p><a href="#" data-name="${personajes[i].name}" data-toggle="modal" data-target="#myModal" class="btn btn-primary box" type="button" >More</a></p>
        </div>
      </div>
    </div>
  </div>`;
    $containerImg.append(output);
  }
}
showPersonajes();
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data.results);
    console.log(personajes);
    const objectData = data.results;
    $('.box').on('click', function() {
      for (j = 0; j < personajes.length; j++) {
        if ($(this).data('name') === personajes[j].name) {
          $('#imagenStart').attr('src', personajes[j].img);
          $('#overview').text(personajes[j].description);
        }
      }
    });
    $('.box').on('click', function() {
      for (i = 0; i < objectData.length; i++) {
        if ($(this).data('name') === personajes[i].name) {
          console.log(objectData[i].name);
          $('#title').text(objectData[i].name);
          $('#height').text(objectData[i].height);
          $('#mass').text(objectData[i].mass);
          $('#eyesColor').text(objectData[i].eye_color);
          $('#hairColor').text(objectData[i].hair_color);
          break;
          FilterElements();
        }
      }
    });
  })
  .catch(function(error) {
    console.log(error);
  });

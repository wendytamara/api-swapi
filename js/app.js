
const url = 'https://swapi.co/api/people/';
const $containerImg = $('#responseContainer');

function showPersonajes() {
  for (let i = 0; i < personajes.length; i++) {
    let $boxImg = $('<div></div>');
    $boxImg.addClass('col-xs-4 col-md-3 collection box');
    $boxImg.attr('data-name', personajes[i].name);
    $boxImg.attr('data-toggle', 'modal');
    $boxImg.attr('data-target', '#myModal');
    $containerImg.append($boxImg);

    let $img = $(' <img/> ');
    $img.addClass('img-responsive img-thumbnail food-img');
    $img.attr('src', personajes[i].img);
    $boxImg.append($img);
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
      ;
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


  // filtro para el input
// $('#filtro').on('keyup', FilterElements);
// function FilterElements(){

//   var nombre = $(this).val();
//   $('.collection').hide();
//   $('.collection').each(function() {
//     for (var i = 0; i < personajes.length; i++)
//     var search = personajes[i].name;
//     if (search.indexOf(nombre) !== -1) {
//       $(this).show();
//     }
//   });
// }

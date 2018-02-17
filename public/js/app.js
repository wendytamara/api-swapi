const $containerImg = $('#responseContainer');

function showPersonajes() {
  for (let i = 1; i <= 9; i++) {
    const url = `https://swapi.co/api/people/?page=${i}`;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const object = data.results;
        $.each(data.results, function(i, element) {
          var numbImg = element.url;
          if (numbImg.length < 31) {
            var numb = numbImg.substr(-2, 1);
          } else {
            var numb = numbImg.substr(-3, 2);
          }

          let output = `<div class="">
           <div class="col-sm-4 col-md-3">
             <div class="thumbnail">
               <img class="img-person " src="https://starwars-visualguide.com/assets/img/characters/${numb}.jpg" alt="">
               <div class="caption text-center">
                 <h3>${object[i].name}</h3>
                 <p><a href="#" data-name="${object[i].name}" data-toggle="modal" data-target="#myModal" class="btn btn-primary box" type="button" >More</a></p>
               </div>
             </div>
           </div>
         </div>`;
          $containerImg.append(output);
        });

        $('.box').on('click', function() {
          for (i = 0; i < object.length; i++) {
            if ($(this).data('name') === object[i].name) {
              $('#title').text(object[i].name);
              $('#height').text(object[i].height);
              $('#mass').text(object[i].mass);
              $('#eyesColor').text(object[i].eye_color);
              $('#hairColor').text(object[i].hair_color);
              break;
            }
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
showPersonajes();

// $('.box').on('click', function() {
//   for (j = 0; j < personajes.length; j++) {
//     if ($(this).data('name') === personajes[j].name) {
//       $('#imagenStart').attr('src', personajes[j].img);
//       $('#overview').text(personajes[j].description);
//     }
//   }
// });

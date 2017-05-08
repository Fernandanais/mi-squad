/*function MiembroSquad( nombre, edad, hobbies, foto){
	this.nombre = nombre,
	this.edad = edad,
	this.hobbies = [],
	this.foto = foto,
	this.susHobbies = function(hacer){
		this.hobbies.push(hacer);
	}

}


var Vale = new MiembroSquad("Valentina Miranda", "25", );
Vale.susHobbies("Dibujar","Ver series animé", "Cocinar");

var Naty = new MiembroSquad("Natalia Villalobos", "30", ../img/naty.jpg);
Naty.susHobbies("Tocar batería", "Dormir", "Hacer queques");

var Espe = new MiembroSquad("Esperanza Lucero", "25");
Espe.susHobbies("Fotografía", "Leer", "Dormir");

var Diana = new MiembroSquad("Diana Villasmil", "29");
Diana.susHobbies("Cantar", "Ver series coreanas", "Leer");

var Cindy = new MiembroSquad("Cindialy Berrios", "23");
Cindy.susHobbies("Trekking", "Escuchar música", "Deporte");

var Fernanda = new MiembroSquad("Fernanda Zamora", "30") 
Fernanda.susHobbies("Escuchar música", "Hacer fotografías", "Pensar en el existencialismo");

var Van = new MiembroSquad("Vanessa Pellegrini", "25") 
Van.susHobbies("Jugar lol", "Ver series", "Visitar parques");

var Vanne = new MiembroSquad("Vanessa García", "25") 
Vanne.susHobbies("Aprender de agilidad", "Probar cervezas", "Escuchar música");

var contenedor = document.getElementById("datos");
*/
function MiembroSquad( foto, nombre, edad, hobbies, comentario ){
  this.foto = foto;
  this.nombre = nombre;
  this.edad = edad;
  this.hobbies = hobbies;
  this.comentario = comentario;
 
}
var squad = [
                new MiembroSquad("<img src='img/naty.jpg'>","Natalia Villalobos","30", ["Tocar batería", "Dormir", "Hacer queques"]),
                new MiembroSquad("<img src='img/diana.jpg'>", "Diana Villasmil","29", ["Ver series Coreanas", "Cantar", "Escuchar música"]),
                new MiembroSquad("<img src='img/fda.jpg'>","Fernanda Zamora", "30", ["Escuchar música", "Hacer fotografías", "Pensar en el existencialismo"]),
                new MiembroSquad("<img src='img/van.jpg'>","Vanessa Pellegrini", "25", ["Jugar lol", "Ver series", "Visitar parques"]),
                new MiembroSquad("<img src='img/vanne.jpg'>","Vanessa García", "25", ["Aprender de agilidad", "Probar cervezas", "Escuchar música"]),
                new MiembroSquad("<img src='img/vale.jpg'>","Valentina Miranda", "26", ["Dibujar","ver anime y series", "Cocinar"]),
                new MiembroSquad("<img src='img/cindy.jpg'>","Cindialy Berrios", "23", ["Trekking","Escuchar música", "Deporte"]),
                new MiembroSquad("<img src='img/espe.jpg'>","Esperanza Lucero", "25", ["Fotografía", "Leer", "Dormir"], '<textarea id="myTextarea">"<p>Escribe tu comentario...</p>"</textarea><br><button type="button" onclick="myFunction()">Publicar</button>')
                ];


// = document.getElementById('datos');

squad.forEach(function(miembroSquad) {
  var integrante = miembroSquad.foto + '<br><strong>Nombre: </strong>' + miembroSquad.nombre +
  			 '<br/><strong>Edad: </strong>' + miembroSquad.edad +
            '<br/><strong>Hobbies: </strong><ul>' + this.comentario;

 miembroSquad.hobbies.forEach(function(hobby){
    integrante += '<li>' + hobby + '</li>';
  });

 integrante += '</ul><br>';

 datos.innerHTML += integrante;
})

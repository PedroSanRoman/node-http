const data = [
    {
      title: "El señor de los anillos: La comunidad del anillo",
      director: "Peter Jackson",
      puntuacion: "9/10"
    },
    {
      title: "El señor de los anillos: Las dos Torres",
      director: "Peter Jackson",
      puntuacion: "8/10"
    },
    {
      title: "El señor de los anillos: El retorno del Rey",
      director: "Peter Jackson",
      puntuacion: "10/10"
    },
  ];
  
  function peliculas() {
    let html = '';
  
    data.forEach(pelicula => {
      html += `<div>
        <h1>Título: ${pelicula.title}</h1>
        <h2>Puntuación: ${pelicula.puntuacion}</h2>
        <p>Director: ${pelicula.director}</p>
      </div>`;
    });
  
    return html;
  }
  
  const templateGeneral = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Películas del Señor de los Anillos</title>
  </head>
  <body>
    ${peliculas()}
  </body>
  </html>
  `;

  module.exports = { templateGeneral };
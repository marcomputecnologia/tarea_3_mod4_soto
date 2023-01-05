//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

/*
tabla();

function tabla() {
    document.getElementById('paises').style.visibility = 'hidden';
}

function mostrarTabla() {
    document.getElementById('paises').style.visibility = 'visible';
}
*/


agregarMonitores();

function agregarMonitores() {
  document.getElementById("mostrarPaises").addEventListener("click", mostrarPaises);
  document.getElementById("agregarPais").addEventListener("click", agregarPais);
}

function crearTablaPaises(paises) {
  const tabla = document.createElement('table');
  tabla.classList.add('table');
 
  const headTable =document.createElement('thead');
  const filaEncabezados = document.createElement('tr');
  const encabezados = ['Nombre', 'Bandera', 'Capital', 'Idioma oficial', 'Moneda'];
  encabezados.forEach(encabezado => {
    const celda = document.createElement('th');
    celda.textContent = encabezado;
    filaEncabezados.appendChild(celda);
  });
  tabla.appendChild(filaEncabezados);

  
  paises.forEach(pais => {
    const fila = document.createElement('tr');
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = pais.nombre;
    fila.appendChild(celdaNombre);

    const celdaBandera = document.createElement('td');
    const imagenBandera = document.createElement('img');
    imagenBandera.src = pais.bandera;
    imagenBandera.alt = `Bandera de ${pais.nombre}`;
    imagenBandera.classList.add('img-fluid');
    celdaBandera.appendChild(imagenBandera);
    fila.appendChild(celdaBandera);

    const celdaCapital = document.createElement('td');
    celdaCapital.textContent = pais.capital;
    fila.appendChild(celdaCapital);

    const celdaIdioma = document.createElement('td');
    celdaIdioma.textContent = pais.idioma_oficial;
    fila.appendChild(celdaIdioma);

    const celdaMoneda = document.createElement('td');
    celdaMoneda.textContent = pais.moneda;
    fila.appendChild(celdaMoneda);

    tabla.appendChild(fila);
  });

  return tabla;
}


function mostrarPaises(){
  const tablaPaises = crearTablaPaises(paises);
  document.getElementById("paises").appendChild(tablaPaises);
}
 /*

   function agregarPais() {
    mostrarTabla();
    let nombre1 = prompt("Ingresa nombre del País");
    let capital1 = prompt("Ingresa Capital del País");
    let idioma_oficial1 = prompt("Ingresa Idioma del País");
    let moneda1 = prompt("Ingresa Moneda del País");
    let bandera1 = prompt("Ingresa dirección url de imagen bandera");

    */
       function agregarPais() {
        const nuevoPais = {
          nombre: prompt("Escriba el nombre del pais: "),
          bandera: prompt("Escriba el link a la bandera"),
          capital: prompt("Escriba la capital del pais"),
          idioma_oficial: prompt("Escriba el idioma oficial:"),
          moneda: prompt("Escriba la moneda:")
        };
        paises.push(nuevoPais);
        mostrarPaises();
      }
      
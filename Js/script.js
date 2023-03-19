//Aceptar el formulario
document.querySelector('#Formulario').addEventListener('click',GuardarSolucion);
//Enviar a crear los datos
function GuardarSolucion (){

    //Acepta los valores escritos en los campos
    var nombre = document.querySelector("#nombre-del-error").value,
        numero = document.querySelector("#numero-del-error").value,
        complejidad = document.querySelector("#complejidad-del-error").value,
        usuario = document.querySelector("#usuario-del-error").value,
        fecha = document.querySelector("#fecha-del-error").value,
        esperado = document.querySelector("#resultado-esperado-del-error").value,
        obtenido = document.querySelector("#resultado-obtenido-del-error").value,
        descripcion = document.querySelector("#descripcion-del-error").value,
        solucion = document.querySelector("#solucion-del-error").value,
        fuentes = document.querySelector("#fuentes-del-error").value;
    //Manda a crear un nuevo objeto, llamando a la funcion en el otro Js
    AgregarRegistro(nombre,numero,complejidad,usuario,fecha,esperado,obtenido,descripcion,solucion,fuentes);
    MostrarSoluciones();
}

//Imprimir el contenido de datos
function MostrarSoluciones () {
    //Obtener listado de soluciones
    var ListadoSoluciones2 = RetornarSoluciones (),
    //Seleccionar la porcion de html que se desea actualizar
    TarjetaSolucion = document.getElementById("Tarjeta-solucion");
    //Limpiar todo antes de agregar
    TarjetaSolucion.innerHTML = "";
    //Recorre todos los elementos del arreglo y crea tarjetas parra cada uno de ellos
    ListadoSoluciones2.map((x) => {
        //Se inserta HTML, se deera usar comillas invertidas
        TarjetaSolucion.innerHTML += `
        <div class="card text-bg-dark border-light mb-3">
        <div class="card-body">
          <h1>Nombre del error: ${x.nombre}</h1>
          <h5 class="card-title">Codigo del error: ${x.numero}</h5>
          <p class="card-text">Nivel de complejidad: ${x.complejidad}</p>
          <p class="card-text">Usuario que lo reporto: ${x.usuario}</p>
          <p class="card-text">Fecha del error: ${x.fecha_reporte}</p>
          <h5 class="card-text">Resultado esperado</h5>
          <p class="card-text"></p>
          <p class="card-text">${x.resultado_esperado}</p>
          <h5 class="card-text">Resultado obtenido</h5>
          <p class="card-text"></p>
          <p class="card-text">${x.resultado_obtenido}</p>
          <h5 class="card-text">Solucion utilizada</h5>
          <p class="card-text"></p>
          <p class="card-text">${x.solucion}</p>
          <h5 class="card-text">Fuentes</h5>
          <p class="card-text"></p>
          <p class="card-text">${x.fuentes}</p>
          <p class="card-text">A ${x.utilidad} personas les ha sido util </p>
        </div>
        <img src="..." class="card-img-bottom" alt="${x.numero}">
      </div>
        `;

    })
}
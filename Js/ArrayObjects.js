var ListadoSoluciones = [];
//Funcion agregar registros, sera llamada desde el script principal
function AgregarRegistro (e_nombre,e_numero,e_complejidad,
    e_usuario,e_fecha,e_esperado,e_obtenido,e_descripcion,
    e_solucion,e_fuentes) {
    console.log(ListadoSoluciones);    
    //Se crea un objeto json para guardar el registro nuevo
    var SolucionNueva = {
        nombre : e_nombre,
        numero : e_numero,
        complejidad : e_complejidad,
        usuario: e_usuario,
        fecha : e_fecha.toString(),
        resultado_esperado : e_esperado,
        resultado_obtenido : e_obtenido,
        descripcion : e_descripcion,
        solucion : e_solucion,
        fuentes : e_fuentes,
        utilidad : 0
    };
    //El registro se agrega al arreglo de soluciones
    ListadoSoluciones.push(SolucionNueva);
    //Imprimir el objeto agregado
    console.log(SolucionNueva);
}
//Retornar el listado de soluciones
function RetornarSoluciones () {
    return ListadoSoluciones;
}
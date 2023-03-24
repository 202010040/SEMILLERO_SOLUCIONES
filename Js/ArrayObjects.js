//Arreglo general de elementos
var ListadoSoluciones = [];
//Funcion agregar registros, sera llamada desde el script principal
function AgregarRegistro (e_nombre,e_numero,e_ID,e_complejidad,
    e_usuario,e_fecha,e_esperado,e_obtenido,e_descripcion,
    e_solucion,e_fuentes) {
    console.log(ListadoSoluciones);    
    //Se crea un objeto json para guardar el registro nuevo
    var SolucionNueva = {
        "Nombre del error" : e_nombre.toString(),
        "Codigo de retorno" : e_numero.toString(),
        "ID del mensaje de error" : e_ID.toString(),
        "Complejidad": e_complejidad.toString(),
        "Reportado por" : e_usuario.toString(),
        "Dia del reporte" : e_fecha.toString(),
        "Resultado esperado" : e_esperado.toString(),
        "Resultado obtenido" : e_obtenido.toString(),
        "Descripcion del error" : e_descripcion.toString(),
        "Solucion implementada" : e_solucion.toString(),
        "Fuentes de consulta" : e_fuentes,
        "utilidad" : 0
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
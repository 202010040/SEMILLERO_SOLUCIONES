var ListadoSoluciones = [];
//Funcion agregar registros, sera llamada desde el script principal
function AgregarRegistro (e_nombre,e_numero,e_ID,e_complejidad,
    e_usuario,e_fecha,e_esperado,e_obtenido,e_descripcion,
    e_solucion,e_fuentes) {
    console.log(ListadoSoluciones);    
    //Se crea un objeto json para guardar el registro nuevo
    var SolucionNueva = {
        "Nombre del error " : e_nombre,
        "Codigo de retorno" : e_numero,
        "ID del mensaje de error " : e_ID,
        "Complejidad": e_complejidad,
        "Reportado por" : e_usuario,
        "Dia del reporter" : e_fecha.toString(),
        "Resultado esperado" : e_esperado,
        "Resultado obtenido" : e_obtenido,
        "Descripción del error" : e_descripcion,
        "Solución implementada" : e_solucion,
        "Fuentes de consulta" : e_fuentes
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
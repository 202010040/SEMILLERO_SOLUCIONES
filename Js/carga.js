var selectedFile;
var ArregloCargaMasiva = [];
var input_file = document.getElementById('Excel')
input_file.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

document.getElementById('EnviarExcel').addEventListener("click", () => {
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         workbook.SheetNames.forEach(sheet => {
              ArregloCargaMasiva = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log((ArregloCargaMasiva));
         });

         ArregloCargaMasiva.map((i) => {
            ListadoSoluciones.push(i);
         });
         MostrarSoluciones();
        }
    }
});
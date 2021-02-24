$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [
            {
                text: "Código",
                key: "codigo"
            },
            {
                text: "Nombre",
                key: "name"
            },
            {
                text: "Apellido",
                key: "apellido"
            },
          {
              text: "Curso",
              key: "curso"
          },
          {
              text: "Género",
              key: "gender"
          },
          {
              text: "Notas",
              key: "notas"
          },        
        ],
 
        //carga de datos
        data: [
            {
                codigo: 5656561,
                name: 'José',
                apeliido: 'Perez',
                curso: 11,
                gender: 'M',
                notas: 3    
            },
            {
                codigo: 1313132,
                name: 'Maria',
                apeliido: 'Perez',
                curso: 8,
                gender: 'F',
                notas: 7       
          },
          {
                codigo: 7171715,
                name: 'María',
                apeliido: 'Pía',
                curso: 3,
                gender: 'F',
                notas: 7    
          },
          {
                codigo: 0202023,
                name: 'Ken',
                apeliido: 'Kakeru',
                curso: 10,
                gender: 'M',
                notas: 7 
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "curso") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    
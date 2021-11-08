function AutoIniciarCliente(){
    
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client1");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}
function autoIniciarCabin(){

    $.ajax({
        url:"http://localhost:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-cabin1");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
         
            }); 
        }
    
    })
}


function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}
//Manejador GET
function traerInformacionCabin() {
    $.ajax({
        url:"http://localhost:8080/api/Cabin/all",
        //url: "http://localhost:8080/api/Skate/all",
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            pintarRespuestaCabin(response);
        }

    });

}

function pintarRespuestaCabin(response){
  if(response.length>0){
    let myTable="<table>"
    myTable+="<tr>";
        myTable+="<td>NAME</td>";
        myTable+="<td>BRAND</td>";
        myTable+="<td>ROOMS</td>";
        myTable+="<td>DESCRIPTION</td>";
        myTable+="<td>CATEGORY</td>";
        myTable+="<td>BORRAR</td>";
        myTable+="<td>ACTUALIZAR</td>";
       "</tr>";
    for(i=0;i<response.length;i++)
    {
        let filas ="<tr>";            
            filas+="<td>" + response[i].name + "</td>";
            filas+="<td>" + response[i].brand + "</td>";
            filas+="<td>" + response[i].rooms + "</td>";
            filas+="<td>" + response[i].description + "</td>";
            filas+="<td>" + response[i].category.name + "</td>";
            filas+='<td><button class = "botonCabana" onclick="borrar(' + response[i].id + ')">Borrar</button></td>';
            filas+='<td><button class = "botonCabana" onclick="actualizar(' + response[i].id + ')">Actualizar</button></td>';
            
            filas+="</tr>";
            myTable+=filas;  

           
    }
    
    myTable+="</table>";
    $("#miListaCabin").html(myTable);
  }
  else
    {
        alert("No Hay Resulta")
    }
}
//Capturar informacion para Actualizar
function cargarDatosCabana(id) {
    $.ajax({
        dataType: 'json',
        url:"http://localhost:8080/api/Cabin/"+id,
        //url: "http://localhost:8080/api/Skate/" + id,
        type: 'GET',

        success: function (response) {
            console.log(response);
            var item = response;

            $("#id").val(item.id);
            $("#name2").val(item.name);
            $("#brand").val(item.brand);
            $("#rooms").val(item.rooms);
            $("#description2").val(item.description);

        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function agregarCabana() {

    if($("#name2").val().length == 0 || $("#brand").val().length == 0 || $("#rooms").val().length == 0 || $("#description2").val().length == 0){
       alert("Todos los campos son obligatorios")
    }else{

            let elemento = {
                name: $("#name2").val(),
                brand: $("#brand").val(),
                rooms: $("#rooms").val(),
                description: $("#description2").val(),
                category:{id: +$("#select-category").val()},
            }

            let dataToSend = JSON.stringify(elemento);
            console.log(elemento);

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url:"http://localhost:8080/api/Cabin/save",
                //url: "http://localhost:8080/api/Skate/save",
                data: dataToSend,
                datatype: 'json',

                success: function (response) {
                    console.log(response);
                    console.log("Se guardo Correctamente");
                    //Limpiar Campos
                    $("#resultado2").empty();
                    $("#name2").val("");
                    $("#brand").val("");
                    $("#rooms").val("");
                    $("#description2").val("");
                    

                    //Listar Tabla

                    alert("Se ha guardado Correctamente jhvkjjccchvh  !")
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("No se Guardo Correctamente")
                }
            });
    }
}
//Manejador DELETE
function borrar(idElemento) {
    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);
console.log(dataToSend);
    $.ajax(
        {
            dataType: 'json',
            data: dataToSend,
            url:"http://localhost:8080/api/Cabin/"+idElemento,
            //url: "http://localhost:8080/api/Skate/" + idElemento,
            type: 'DELETE',
            contentType: "application/JSON",
            success: function (response) {
                console.log(response);
                $("#miListaCabana").empty();

                alert("se ha Eliminado Correctamente!")
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Elimino Correctamente!")
            }
        });
}

//Manejador PUT
function actualizar(idElemento) {
    
    if($("#name2").val().length == 0 || $("#brand").val().length == 0 || $("#rooms").val().length == 0 || $("#description2").val().length == 0){
        alert("Todos los campos deben estar llenos")
    }else{
        let elemento = {
            id: idElemento,
            name: $("#name2").val(),
            brand: $("#brand").val(),
            year: $("#rooms").val(),
            description: $("#description2").val(),
            category:{id: +$("#select-category").val()},
        }

        console.log(elemento);
        let dataToSend = JSON.stringify(elemento);

        $.ajax({
            datatype: 'json',
            data: dataToSend,
            contentType: "application/JSON",
            url:"http://localhost:8080/api/Cabin/update",
            //url: "http://localhost:8080/api/Skate/update",
            type: "PUT",

            success: function (response) {
                console.log(response);
                $("#miListaSkate").empty();
                listarSkate();
                alert("se ha Actualizado Correctamente!")

                //Limpiar Campos
                $("#resultado2").empty();
                $("#id").val("");
                $("#name2").val("");
                $("#brand").val("");
                $("#rooms").val("");
                $("#description2").val("");


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Actualizo Correctamente!")
            }
        });
    }
}

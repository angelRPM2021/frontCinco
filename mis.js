function guardarInformacion(){
    
    let elemento={
       email:$("#email").val(),
       password:$("#password").val(),
       name:$("#name").val(),      
       age:$("#age").val(),
      };

     $.ajax({
             type:'POST', 
             contentType: "application/json; charset=utf-8",
             datatype: 'JSON', 
             url:"http://localhost:8080/api/Client/save",
             data: JSON.stringify(elemento),

             success:function(respuesta){
                  console.log(respuesta);
                  alert("se guardo corrctamente");
              },
              error:function(jqxHR,textStatus,errorThrown){
  
          }


      });


    }


// zona de trabajo en proceso de ////////////////////////////////////////////////////////////////////////

function optenerChbox(){

    let reservacion={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        }; 

    let va1= document.getElementById("select-status");
    let t= va1.options[va1.selectedIndex].value;
    alert(t);

    let combo= document.getElementById("select-status");
    let tex= combo.options[combo.selectedIndex].text;

    alert(tex);
} 
    
function crearTablaReservacion(){  

    let reservacion={
       startDate:$("#startDate").val(),
       devolutionDate:$("#devolutionDate").val(),
       };    
     alert("entramos");
     $.ajax({
             type:'POST', 
             contentType: "application/json; charset=utf-8",
             datatype: 'JSON', 
             url:"http://localhost:8080/api/Reservation/save",
             data: JSON.stringify(reservacion),
             success:function(respuesta){
                  console.log(respuesta);
                  alert("Guardo corrctamente");
              },
              error:function(jqxHR,textStatus,errorThrown){
  
          }


      });
}


  
  function ListaReservacion(){
       $.ajax({
            url:"http://localhost:8080/api/Reservation/all",
            type:'GET',
            datatype: 'JSON',
            success:function(respuesta){
                 console.log(respuesta);
                 let myTable="<table>";
                 for(i=0;i<respuesta.length;i++){
                    myTable+="<tr>";        
                    myTable+="<td>"+respuesta[i].startDate+"</td>";
                    myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
                    myTable+="<td> <button onclick=' actualizarInformacionCliente("+i+")'>Actualizar</button>";
                    myTable+="<td> <button onclick='borrarCliente("+i+")'>Borrar</button>";
                    myTable+="</tr>";
                }
                myTable+="</table>";
                $("#tablaReservacion").html(myTable);
             }
          
     }); 
     
    

}
   
      
  

function crusBasedeDatos(){
$.ajax({
    URL:"https://gcbc6ab0e15feb8-dbreto3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type:"GET",
    datatype:"JSON",
    success:function(datos){
        console.log(datos);
        pintarTabla(datos.items);
    }
        
})

}
function ListaCliente(){    
    $.ajax({
            url:"http://localhost:8080/api/Client/all",
            type:'GET',
            datatype: 'JSON',
            success:function(respuesta)
            {
                    console.log(respuesta);
                    let myTable="<table>";
                    for(let i=0;i<respuesta.length;i++){
                        myTable+="<tr>";        
                        myTable+="<td>"+respuesta[i].name+"</td>";
                        myTable+="<td>"+respuesta[i].email+"</td>";
                    
                        myTable+="<td> <button onclick=' actualizarInformacionCliente("+i+")'>Actualizar</button>";
                        myTable+="<td> <button onclick='borrarCliente("+i+")'>Borrar</button>";
                        myTable+="</tr>";
                    }
                        myTable+="</table>";
                        $("#idtabla").html(myTable);
            }
        });   
   }
 function GuardarCategoria(){
    let elemento2={
    name:$("#namecategoria").val(),
    description:$("#desc").val(),
    };
   
    $.ajax({
          type:'POST', 
          contentType: "application/json; charset=utf-8",
          dataType: 'JSON',
          data: JSON.stringify(elemento2),
          url:"http://localhost:8080/api/Category/save",
          

          success:function(respuesta){
               console.log(respuesta);
               alert("se guardo corrctamente");
           },
           error:function(jqxHR,textStatus,errorThrown){

       }


   });
 }
  
 function GuardarCabin()
 {
    let cabin={

    name:$("#nomCabin").val(),
    brand:$("#barndCabin").val(),
    rooms:$("#rooms").val(),
    description:$("#description").val(),
    };
   
    $.ajax({
          type:'POST', 
          contentType: "application/json; charset=utf-8",
          dataType: 'JSON',
          data: JSON.stringify(cabin),
          url:"http://localhost:8080/api/Cabin/save",
          

          success:function(respuesta){
               console.log(respuesta);
               alert("se guardo corrctamente");
           },
           error:function(jqxHR,textStatus,errorThrown){

       }


   });
 }
 function GuardarMensaje(){
    let elemento2={
        messageText:$("#messageText").val(),
        
        };
       
        $.ajax({
              type:'POST', 
              contentType: "application/json; charset=utf-8",
              dataType: 'JSON',
              data: JSON.stringify(elemento2),
              url:"http://localhost:8080/api/Message/save",
               success:function(respuesta){
                   console.log(respuesta);
                   alert("se guardo corrctamente");
               },
               error:function(jqxHR,textStatus,errorThrown){
        }
    
    
       });

 }

 function ListarMensajes(){
    $.ajax({
        url:"http://localhost:8080/api/Message/all",
        type:'GET',
        datatype: 'JSON',
        success:function(respuesta)
         {
            let myTable="<table>";
            "<tr>Nombre detalle</tr><tr>Actualizar</tr><tr>Borrar</tr>"     
            for(i=0;i<respuesta.length;i++)
             {
                myTable+="<tr>";     
                    myTable+="<td>"+respuesta[i].idMessage+"</td>";
                    myTable+="<td>"+respuesta[i].messageText+"</td>";
                    myTable+="<td> <button onclick=' actualizarInformacionCliente("+i+")'>Actualizar</button>";
                    myTable+="<td> <button onclick='borrarCliente("+i+")'>Borrar</button>";
                myTable+="</tr>";
                   
            }
                    myTable+="</table>";
                    $("#tablaListaMensaje").html(myTable);
        }
    });   
     
 }

 function ListaDeCabin()
{
    $.ajax({
        url:"http://localhost:8080/api/Cabin/all",
        type:'GET',
        datatype: 'JSON',
        success:function(respuesta)
         {
            let myTable="<table>";
            "<tr>Nombre detalle</tr><tr>Actualizar</tr><tr>Borrar</tr>"     
            for(i=0;i<respuesta.length;i++)
             {
                myTable+="<tr>";     
                    myTable+="<td>"+respuesta[i].id+"</td>";
                    myTable+="<td>"+respuesta[i].name+"</td>";
                    myTable+="<td>"+respuesta[i].brand+"</td>";
                    myTable+="<td>"+respuesta[i].rooms+"</td>";
                    myTable+="<td>"+respuesta[i].description+"</td>";
                    myTable+="<td> <button onclick=' actualizarInformacionCliente("+i+")'>Actualizar</button>";
                    myTable+="<td> <button onclick='borrarCliente("+i+")'>Borrar</button>";
                myTable+="</tr>";
            }
                    myTable+="</table>";
                    $("#tablaCabin").html(myTable);
        }
    });   
}

function ListaDeCategory(){
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type:'GET',
        datatype: 'JSON',
        success:function(respuesta)
         {
            let myTable="<table>";
            "<tr>Nombre detalle</tr><tr>Actualizar</tr><tr>Borrar</tr>"     
            for(i=0;i<respuesta.length;i++)
             {
                myTable+="<tr>";     
                    myTable+="<td>"+respuesta[i].id+"</td>";
                    myTable+="<td>"+respuesta[i].name+"</td>";
                    myTable+="<td>"+respuesta[i].description+"</td>";
                    myTable+="<td> <button onclick=' actualizarInformacionCliente("+i+")'>Actualizar</button>";
                    myTable+="<td> <button onclick='borrarCliente("+i+")'>Borrar</button>";
                myTable+="</tr>";
            }
                    myTable+="</table>";
                    $("#tablaCategory").html(myTable);
        }
    });  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
function autoInicioCabin(){

    $.ajax({
        url:"http://localhost:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-cabin");
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
function autoInicioRelacionCliente(){
    
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}

function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
       myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://localhost:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        let myTable="<table>";
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
        myTable+="<th>total</th>";
            myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
            myTable+="<td>"+respuesta[i].startDate+"</td>";
            myTable+="<td>"+respuesta[i].status+"</td>";
          
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoDate").html(myTable);
    }

    function traerReporteClientes(){
        $.ajax({
            url:"http://localhost:8080/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientes(respuesta);
            }
        });
    }
    function pintarRespuestaClientes(respuesta){

        let myTable="<table>";
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
        myTable+="<th>total</th>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoClientes").html(myTable);
    }

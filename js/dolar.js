const cotizar = () => {
    $.ajax({
        // url: "./ejemplo.json",
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        type: "GET",
        dataType: "json"
    }).done(function(resultadoJson){

       cotizacion = parseFloat(resultadoJson[1].casa.venta).toFixed(2);
        
       $('#usd').append(`<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
       <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
     </svg> $${cotizacion}`);


    }).fail(function(xhr, status, error){
        console.log(xhr);
        console.log(status);
        console.log(error);
    })
}

$(document).ready(cotizar);
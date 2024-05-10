
$( document ).ready(function() {
    $.ajax({
        url: 'languages.json',
        type: 'get',
        dataType: 'json',
        error: function (xhr, status, error) {
            console.error("Error fetching data:", error);
 
        },
        success: function(data){
            var tr = $('<tr>');
            tr.append('<td>' + data.code + '<td>');
            tr.append('<td>' + data.name + '<td>');


            $('#tabela').append(tr);           
        }
    });
});
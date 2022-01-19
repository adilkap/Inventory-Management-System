$("#add_item").submit(function(event){
    alert("Inventory Item Inserted Successfully!");
})

$("#update_item").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/items/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Inventory Item Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this item?")){
            $.ajax(request).done(function(response){
                alert("Inventory Item Deleted Successfully!");
                location.reload();
            })
        }

    })
}
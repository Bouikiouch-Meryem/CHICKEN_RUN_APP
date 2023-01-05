


$("#add_chicken").submit(function(event){
    alert("Data Inserted Successfully!");
})


$("#update_chicken").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
     console.log();

    var request = {
        "url" : `http://localhost:3000/chicken/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.location = '/'
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/chicken/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}
if(window.location.pathname == "/"){
    $onincrease = $(".table tbody td a.increase");
    $onincrease.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/chicken/run/${id}`,
            "method" : "PATCH"
        }

            $.ajax(request).done(function(response){
                location.reload();
            })
        

    })
}

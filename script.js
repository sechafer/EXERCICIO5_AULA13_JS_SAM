$(document).ready(function() {
    var api_key = "563492ad6f91700001000001aeb9ca07ce134faea3cde2d2cb300f77"
    var image = '' 

    $("#form").submit(function(event){
        event.preventDefault()
        var search = $("#search").val()

        imagesearch()
    })
    function imagesearch(){
        $.ajax({
            method: 'GET',
            beforSend: function(xhr){
                xhr.setRequestHeader ( "Authorization", api_key);
            },
            url:"https://api.pexels.com/v1/search?query="+search+"&per_page=3&page=1",
            success: function (data) {
                console.log(data)
                data.photo.forEach (photo => {
                  image=`
                  
                  <img src="${photo.src.original}"width="400" height="300"/>

                  `
                  $("#images").append(image)
                }); 
            },
            error: function(error){
                 console.log(error)
            }
        })
        
    }
})

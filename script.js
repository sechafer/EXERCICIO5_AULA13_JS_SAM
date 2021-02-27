$(document).ready(function() {
    var api_key = "563492ad6f91700001000001966bf3f6c7a147e0aded31703f161d99"
    var image = '' 

    $("#form").submit(function(event){
        event.preventDefault()
        var search = $("#search").val()

        imagesearch()
    })
    function imagesearch(){
        $.ajax({
            beforeSend: function(xhr){
                xhr.setRequestHeader ("Authorization", api_key);
            },
            url:"https://api.pexels.com/v1/search?query="+search+"&per_page=15&page=1",
            success: function (data) {
                console.log(data)
                data.photos.forEach (photos => {
                  image=`
                  
                  <img src="${photos.src.tiny}"/>

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

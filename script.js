$(document).ready(function() {
    var api_key = "563492ad6f91700001000001966bf3f6c7a147e0aded31703f161d99"
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
            url:"https://api.pexels.com/v1/search?query=" + search + "&per_page=15&page=1"
            success: function (data) {
                console.log(data)
                data.photo.forEach (photo => {
                  image=`
                  
                  <img src="${photo.src.orignal}"width="400" height="300"/>
                  `
                  
                }); 
            },
            error: function(eror){
                 console.log(error)
            }
        })
        
    }
})

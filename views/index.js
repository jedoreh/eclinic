$(document).ready(function(){
    $("#errorlogin").hide()
    $(".form-signin").submit(function(evt){
        evt.preventDefault()
        
                
        var postData = $(this).serialize()
        var url = $(this).attr('action')
        
        $.post(url, postData, function(data){

            console.log(data)
           if(data=="Record Found"){
               $(location).prop("href", "dashboard.html")
               
           } else {
               $("#errorlogin").show()
               let error_html = `
                            <strong>Error!</strong> A <a href="#" class="alert-link">problem</a> has been occurred while submitting your data.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
               `
               $("#errorlogin").html(error_html)

           }

        })
            
    })

     let getlogin = 'getlogin'
    $.post("controllers/masterpage.php", {getlogin: getlogin}, function(data){
        if(data != "Not Logged In"){
           $(location).attr('href', "dashboard.html")
        } 
    })

})
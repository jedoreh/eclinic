$(document).ready(function(){
    let getlogin = 'getlogin'
    $.post("controllers/masterpage.php", {getlogin: getlogin}, function(data){
        if(data == "Not Logged In"){
           $(location).attr('href', "index.html")
        } 
    })
})
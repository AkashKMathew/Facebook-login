$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:5,
                maxlength:10
            },
            emailadd:{
                required:true,
            },
            password1:{
                required:true,

            },
            password2:{
                required:true,
                
            },
            day:{
                required:true, 
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true,
            }
        }
    })
    $("#password2").blur(function() {
        var password = $("#password1").val();
        var confirmPassword = $("#password2").val();
        if (password != confirmPassword){
          $("#CheckPasswordMatch").text("Password does not match !")
        }else{
          $("#CheckPasswordMatch").text("")
        }
      });
})
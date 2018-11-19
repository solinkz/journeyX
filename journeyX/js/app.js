var username = "solinkz";
var password = "password";
var status;
// username and password objects
var $username = $('#username');
var $password = $('#password');


function usernameValidation() {
    return ($username.val() !== username);
}
function passwordValidation() {
    return ($password.val() !== password);
}
// turn borders of input field red to signify error

    $username.blur(function(){
       if(usernameValidation()){
           $username.css('border-bottom','5px solid #c20909');
       }else{
           $username.css('border-bottom', 'none');
       }
    });


    $password.blur(function () {
        if (passwordValidation() ) {
            $password.css('border-bottom', '5px solid #c20909'); 
        } else {
            $password.css('border-bottom', 'none');
        }

    });



// if username and password match go enable submit
// $username.blur().$password.blur(function(){
    
// });
$password.blur(function(){
    
    if(!usernameValidation() && !passwordValidation()){
        // console.log('reuw');
        $('#submit').prop('disabled', false).css('cursor','pointer');
        $('.alert').slideUp();
    }else{
        // console.log('faaf');
        // else flag error message
        $('.alert').slideDown();
    
        // disable submit button till the validation is succesful
        $('#submit').prop('disabled', true).css('cursor', 'not-allowed');
    }
})




// if you click the eye show or hide password
$(".makeVisible").click(function(){
    if($password.prop('type')=== "password"){
        $password.prop('type','text');
    }else{
        $password.prop('type','password');
    }
});
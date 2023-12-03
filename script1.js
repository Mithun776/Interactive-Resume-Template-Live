function test(){
    // Retriving Data
    var uid = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    
    // Storing Data
    var user = localStorage.setItem("uid", uid);
    var em = localStorage.setItem("email", email);

    // Retreiving stored data and using it for calculation
    var user = localStorage.getItem("uid", uid);
    var em = localStorage.getItem("email", email);
}

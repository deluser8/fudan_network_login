// Please hard code your username and password here
// i.e. username = '17212010000' passowrd = 'xxxx'
username = '';
password = '';
first_login = true;
function login(){
    var date = new Date();
    if (first_login == true || date.getHours() >= 3 && date.getHours() < 4){
        $("#loginname").val(username);
        $("#password").val(password);
        $("#button").click();
        first_login = false;
    }
}

login();
setInterval(login, 600000 + Math.round(Math.random()*10) * 60000);

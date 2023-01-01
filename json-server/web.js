function signin(e){
    event.preventDefault();
    const sb = document.querySelector('#cl')
    var cl = (sb.value);
    var teacher = document.getElementById("ta").checked;
    var student = document.getElementById("st").checked;
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == ""){
        alert("Sign in your information");
        return
    }
    getdata(handle);
    // const str = `<h1>abc</h1>
    // <style>
    //     body,html{
    //         background-color:blue;
    //     }
    //     .h1{
    //         color:red;
    //         font-size:100px;
    //     }
    // </style>
    //     `
    // document.getElementById("webmain").innerHTML = str;
}
let apiUse = "http://localhost:3000/user";
function getdata(callback){
    fetch(apiUse).then(function(res){
        return res.json().then(callback);
    })
}

function handle(data){
    let ch = 1
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    data.forEach((data) => {
        let check_us = data.username;
        let check_pass = data.password;
        let place = data.place;
        if (check_us == username && check_pass == password){
            alert("Sign in success");
            window.ch = 1;
            return;
        }else{
            window.ch = 0;
            return;
        }
    });
    if (window.ch == 0){
        alert("Fail to log in, please input your information again");
        return;
    }
    
}
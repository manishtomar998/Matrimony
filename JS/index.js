let login = (event) => {
    event.preventDefault();
    let loginEmail = document.getElementById("email").value;
    let loginPassword = document.getElementById("password").value;
    fetch("http://localhost:3000/users").then(response => {
        response.text().then(res => {
            findUser(JSON.parse(res), loginEmail, loginPassword)
        })
    })
}

let findUser = (res, loginEmail, loginPassword) => {
    let user = res.filter(data => data.email === loginEmail);
    if (user.length == 0) {
        alert("user not found");
    } else {
        if (user[0].password !== loginPassword) {
            alert("wrong password");
        } else {
            location.replace(`./Pages/home.html?gender=${user[0].gender}&&name=${user[0].name}`);
        }
    }

}
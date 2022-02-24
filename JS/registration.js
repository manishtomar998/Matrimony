let saveData = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.getElementById("age").value;
    let job = document.getElementById("job").value;
    let contact = document.getElementById("contact").value;
    let caste = document.getElementById("caste").value;
    let locality = document.getElementById("locality").value;
    let complexion = document.querySelector('input[name="complexion"]:checked').value;
    let data = {
        name: name,
        gender: gender,
        age: age,
        job: job,
        contact: contact,
        caste: caste,
        locality: locality,
        complexion: complexion,
        password: "hello"
    }
    
    let users = fetchApi(" http://localhost:3000/users", data, "post");    
}
let fetchApi = async (url, body, method) => {
    let data = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    }
    await fetch(url, data).then(response => {
        response.text().then(res => {
            return res;
        })
    })
}
let memberLoad = () => {
    let name = window.location.search;
    document.getElementById("name").innerText = name.split("name=")[1].split("%20")[0];
    localStorage.setItem("name",name.split("name=")[1].split("%20")[0]);
    fetch("http://localhost:3000/profiles").then(response => {
        response.text().then(res => {
            let persons = JSON.parse(res);
            loaded(persons);
        })
    })
}
let loaded = (person) => {
    let url = window.location.search;
    let gender = url.split("&&")[0].split("=")[1];
    person = person.filter(data=> data.gender!=gender )
    for (let i = 0; i < person.length; i++) {
        let personDiv = document.createElement("div");
        personDiv.className = "person";
        let personName = document.createElement("p");
        let personAge = document.createElement("p");
        let personGender = document.createElement("p");
        let personImg = document.createElement("img");
        let wishlistBtn = document.createElement("button");
        wishlistBtn.onclick = function () {
            addToWishlist(person[i])
        }
        wishlistBtn.id = "like";
        wishlistBtn.innerHTML = `<img src="2702774.png" height="30px" width="30px"/>`
        personImg.src = person[i].image;
        personImg.height = "100";
        personImg.width = "100";
        personImg.alt = "photo";
        personGender.innerText = person[i].gender;
        personAge.innerText = person[i].age;
        personName.innerText = person[i].name;
        personDiv.appendChild(personImg);
        personDiv.appendChild(personName);
        personDiv.appendChild(personAge);
        personDiv.appendChild(personGender);
        personDiv.appendChild(wishlistBtn);
        document.getElementById("home").appendChild(personDiv);

    }
}
let addToWishlist = (person) => {
    let name = window.location.search.split("name=")[1].split("%20")[0];
    person.addedBy = name;
    let data = {
        method: "post",
        body: JSON.stringify(person),
        headers: {
            "content-type": "application/json"
        }
    }
    fetch("http://localhost:3000/wishlist", data);
}
let myWishlist = () => {
    fetch("http://localhost:3000/wishlist").then(response => {
        response.text().then(res => {
            let likes = JSON.parse(res);
            openWish(likes);
        })
    })
}
let openWish = (likes) => {
    let name = localStorage.getItem("name");
    likes = likes.filter(data => data.addedBy == name)
    for (let i = 0; i < likes.length; i++) {
        let personDiv = document.createElement("div");
        let personName = document.createElement("p");
        let personAge = document.createElement("p");
        let personImg = document.createElement("img");
        personImg.src = likes[i].image;
        personImg.height = "100";
        personImg.width = "100";
        personImg.alt = "photo";
        personAge.innerText = likes[i].age;
        personName.innerText = likes[i].name;
        personDiv.appendChild(personImg);
        personDiv.appendChild(personName);
        personDiv.appendChild(personAge);
        document.getElementById("wish").appendChild(personDiv);
    }
}

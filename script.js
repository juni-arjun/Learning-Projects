const URL = "https://api.thecatapi.com/v1/images/search";
const catBtn = document.querySelector("#cat-btn");
let imgtag = document.querySelector("#img");


// const getFacts = async () => {
//     console.log("Getting Cat Image.....");
//     let response = await fetch(URL);
//     console.log(response);
//     let img = await response.json();
//     // let imgsrc = img.url;
//     console.log(img[0].url);
//     imgtag.src = img[0].url;
// };

function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((img) => {
        console.log(img[0].url);
        imgtag.src = img[0].url;
    });
}

catBtn.addEventListener("click", getFacts);
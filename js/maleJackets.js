import { callApi } from "./api.js";
import {jacket} from "./api.js"

const maleJackets = document.querySelector(".male");



function createContentMale(){
    maleJackets.innerHTML = "";

    for(let i = 0; i < jacket.length; i++){
    let title = jacket[i].title
    title = title.replace("Rainy Days ", "") 
if(jacket[i].gender === "Male"){
maleJackets.innerHTML += `<div class="jackets1">
<img src="${jacket[i].image}">

<p>${title}</p> 
<p>${jacket[i].price}</</p>
<a href="specific.html?id=${jacket[i].id}" class="buyjacket">view more</a>
</div>`
}
}

}

createContentMale();
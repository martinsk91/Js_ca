import { callApi } from "./api.js";
import {jacket} from "./api.js"
// import { onSaleJackets } from "./api.js";


const button = document.querySelectorAll("button");
const saleContent = document.querySelector(".sale-cont");
const cross = document.querySelector(".cross");
const hidden = document.querySelector(".hidden")
const onSaleJackets = [];

for (let i  = 0; i < jacket.length; i++){
    if(jacket[i].onSale){
        onSaleJackets.push(jacket[i]);
    }


}



function createContent(){
  

    
    const onSale = document.querySelector(".theJackets")
  ;
    onSale.innerHTML = ``;
 
  hidden.classList.remove("hidden")
    for( let i = 0; i < onSaleJackets.length; i++){
        let title = onSaleJackets[i].title
        title = title.replace("Rainy Days ", "") 
        if(onSaleJackets[i].onSale){
       
        onSale.innerHTML += `<div class="jackets1">
        
        <img src="${onSaleJackets[i].image}">
  
  <p>${title}</p> 
  <p>${onSaleJackets[i].price}</p>
  <a href="specific.html/" class="buyjacket">view more</a>
  </div> `
}
if(i ===3){break;}
}




}

function closeContent(){

  
    hidden.classList.add("hidden");
    
    }

cross.addEventListener('click', closeContent);




for(let i = 0; i < button.length; i++){
button[i].addEventListener('click', createContent);
}




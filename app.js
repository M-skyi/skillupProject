// add to cart
let productCountEl = document.getElementById('product-count')
let addToCartButtons = document.querySelectorAll('.add-cart')

for (let i = 0; i < addToCartButtons.length; i++) {

 addToCartButtons[i].addEventListener("click",function() {
   productCountEl.textContent =  Number(productCountEl.textContent) + 1

 });
}

// change like

let moreDetails = document.querySelectorAll('.more-detailis')
let likeProd = document.querySelectorAll('.icon-like')

for (let i = 0; i < moreDetails.length; i++) {

   moreDetails[i].addEventListener("click",function() {

     likeProd[i].classList.toggle("chicked")

     if (likeProd[i].classList.contains("chicked") === true) {
      likeProd[i].style.backgroundColor = "#3366cc"
      likeProd[i].style.backgroundImage = "url(img/likeicon1.png)"
     }else{
      likeProd[i].style.backgroundImage = "url(img/likeicon.png)"
      likeProd[i].style.backgroundColor = "inherit"
     }
   })
}

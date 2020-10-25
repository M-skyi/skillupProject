









let productCountEl = document.getElementById('product-count')
let addToCartButtons = document.querySelectorAll('.add-cart')

for (let i = 0; i < addToCartButtons.length; i++) {

 addToCartButtons[i].addEventListener("click",addCount);

  function addCount() {
     
   productCountEl.textContent =  Number(productCountEl.textContent) + 1
}
}


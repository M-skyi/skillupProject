"use strict"
// add to cart
let productCountEl = document.getElementById('product-count')
let addToCartButtons = document.querySelectorAll('.add-cart')

for (let i = 0; i < addToCartButtons.length; i++) {

 addToCartButtons[i].addEventListener("click",function() {
   productCountEl.textContent =  Number(productCountEl.textContent) + 1

 });
}

// change like

// let iconLike = document.querySelectorAll('.icon-like')
let likeProd = document.querySelectorAll('.icon-like')

for (let i = 0; i < likeProd.length; i++) {

  likeProd[i].addEventListener("click",function(e) {

    //  likeProd[i].classList.toggle("liked")

    //  if (likeProd[i].classList.contains("liked") === true) {
    //   likeProd[i].style.backgroundColor = "#3366cc"
    //   likeProd[i].style.backgroundImage = "url(img/likeicon1.png)"
    //  }else{
    //   likeProd[i].style.backgroundImage = "url(img/likeicon.png)"
    //   likeProd[i].style.backgroundColor = "inherit"
    //  }
    let item = e.target
    console.log(item)

    if (item.classList.contains("liked")) {
      item.classList.remove("liked")
    }else {
      item.classList.add("liked")
    }

   })
}

//modal


  let moreDetailsButtons = document.querySelectorAll(".more-detailis")
  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".btn-close")

  moreDetailsButtons.forEach(function(btn) {
    btn.addEventListener("click",openModal)
  })

  closeBtn.addEventListener("click",closeModal)

function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
 }

 function openModal() {
  modal.classList.add("show")
  modal.classList.remove("hide")
 }

 modal.addEventListener("click",function (e) {

 if (e.target === modal ) {
  closeModal()
  }
})

$(".slider-block").slick()
 





  



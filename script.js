// ------------------------detail-product---------------------
const bigImg = document.querySelector(".detail-product__box-left-big-img img")
const smallImg = document.querySelectorAll(".detail-product__box-left-small-img .item-thumb img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})
// -------------------slide-home-----------------
const rightbtn = document.querySelector('#next-slide-right')
const leftbtn = document.querySelector('#next-slide-left')
const imgNumber = document.querySelectorAll('.slider-content img')
let index = 0
if(rightbtn) {
    rightbtn.addEventListener("click",function(){
        index += 1
        if(index>imgNumber.length-1)
        {
            index=0
        }  
        document.querySelector('.slider-content').style.right=index*100+"%"
      })
}
if(leftbtn) {
    leftbtn.addEventListener("click",function(){
        index -= 1
        if(index<0)
      {
          index=imgNumber.length-1
      }  
        document.querySelector('.slider-content').style.right=index*100+"%"
      })
    
}
// ---------------slide-list-----------------------
const listbox = document.querySelectorAll('.list-box-center .item-box-center')
listbox.forEach(function(item,index){
    item.addEventListener("click",function(){
        removeactive()
        document.querySelector('.slider-content').style.right=index*100+"%"
        item.classList.add('active')
    })
})
function removeactive(){
    let itemactive = document.querySelector('.active')
    itemactive.classList.remove('active')
}
// //   ---------------slide-auto-home--------------------
function imgAuto(){
    index += 1
    if(index>imgNumber.length-1)
    {
        index=0
    }  
    removeactive()
    document.querySelector('.slider-content').style.right=index*100+"%"
    listbox[index].classList.add('active')
}
setInterval(imgAuto,5000)
// ---------------------------------------------------
// --------------------------login---------------------------
const login = document.querySelector(".item-login")
const registration = document.querySelector(".item-registration")
if(login) {
    login.addEventListener('click', function(){
      document.querySelector(".item-login").style.color= "red" 
      document.querySelector(".item-registration").style.color= "black"  
      document.querySelector(".registration-form").style.display="none"
      document.querySelector(".login-form").style.display="block"
    })
}
if(registration) {
    registration.addEventListener('click', function(){
      document.querySelector(".item-login").style.color= "black" 
      document.querySelector(".item-registration").style.color= "red" 
      document.querySelector(".registration-form").style.display="block"
      document.querySelector(".login-form").style.display="none"
    })
}
// -------------------slide-sp-----------------
const btnright = document.querySelector('#btn-right')
const btnleft = document.querySelector('#btn-left')
const itemimg = document.querySelectorAll('.item-slide img')
let index1 = 0;
if(btnright){
    btnright.addEventListener('click', function(){
        index1 +=1
        if(index1>itemimg.length-1){
            index1=0
        }
        document.querySelector('.item-slide').style.right= index1*100+'%'
    })
}
if(btnleft){
    btnleft.addEventListener('click', function(){
        index1 -=1
        if(index1<0){
            index1=itemimg.length-1
        }
        document.querySelector('.item-slide').style.right= index1*100+'%'
    })
}
// ------------------auto-slide---------------------
function autoslide (){
    index1 +=1
    if(index1>itemimg.length-1){
        index1=0
    }
    const slideItem = document.querySelector('.item-slide')
    if(slideItem){
        slideItem.style.right= index1*100+'%'
    }  
}
setInterval(autoslide,5000)
// // -------------------slide2------------------------------
const btnright2 = document.querySelector('#btn-right2')
const btnleft2 = document.querySelector('#btn-left2')
const itemimg2 = document.querySelectorAll('.item-slide2 img')
let index2 = 0
if(btnright2){
    btnright2.addEventListener('click', function(){
        index2 += 1
        if(index2>itemimg2.length-1){
            index2 = 0
        }
        document.querySelector('.item-slide2').style.right = index2*100+'%'
    })
}
if(btnleft2){
    btnleft2.addEventListener('click',function(){
        index2 -=1
        if(index2<0){
            index2 = itemimg2.length-1
        }
        document.querySelector('.item-slide2').style.right = index2*100+'%'
    })
}
function autoslide2 (){
    index2 += 1
    if(index2>itemimg2.length-1){
        index2=0
    }
    const itemSlide2 = document.querySelector('.item-slide2')
    if (itemSlide2){
        itemSlide2.style.right = index2*100+'%'
    }

}
setInterval(autoslide2,5000)
// -------------------------cart-----------------------
const btnbuy = document.querySelector('.btn-buy')
if(btnbuy){
    btnbuy.addEventListener('click',function(event){
        var btnbuy = event.target
        var product = btnbuy.parentElement.parentElement.parentElement
        var productImg = product.querySelector('img').src
        var productName = product.querySelector('h3').innerText
        var productPrice = product.querySelector('.special-price span').innerHTML
        var productOldPrice = product.querySelector('.old-price').innerHTML
        addcart(productImg,productName,productPrice,productOldPrice)
     })
}
function addcart(productImg,productName,productPrice,productOldPrice){
    var adddiv = document.createElement('div')
    var divcontent = ' <div class="cart-center"> <div class="product-item"><div class="product-item-img"><img src="'+productImg+'" alt=""></div><div class="product-item-detail"><p>'+productName+'</p><div class="price"><p class="special-price"><span>'+productPrice+'</span>₫</p> <p class="old-price">'+productOldPrice+'</p></div> Chọn số lượng : <input type="number" style="width:40px" value="1" min="1"> </div><div class="btn-delete"><i class="bx bxs-x-circle"></i></div></div></div>'
    adddiv.innerHTML = divcontent
    var cartTable = document.querySelector('.cart-box')
    cartTable.append(adddiv)
    cartTotal()
    deleteCart()
}
// -------------------------open/close cart-----------------
const btncart = document.querySelector('.giohang')
const btnclose = document.querySelector('.close')
if(btncart){
    btncart.addEventListener('click', function(){
    document.querySelector('.tab').style.right = 0
    })
}
if(btnclose){
    btnclose.addEventListener('click', function(){
    document.querySelector('.tab').style.right = -100+'%'
    })
}
// -----------------Chọn màu----------------------------
const listColor = document.querySelectorAll('.swatch-link')
console.log(listColor);
let current = 0;
let currentElement = listColor[current]
if(listColor){
    listColor.forEach(function(itemColor, index){
        itemColor.addEventListener('click',function(){
            document.querySelector('.swatch-link').style.border='1px solid red'
            console.log("index===", index);
            current = index;
            currentElement = listColor[current]
            // console.log("currrent",current);
            // console.log("current image", currentElement);
                
        })
    })
}
const listColorImg = document.querySelectorAll('.swatch-link .item-color img')
listColorImg.forEach(function(imgItemColor,x){
    imgItemColor.addEventListener("click",function(){
        bigImg.src = imgItemColor.src
    })
})
// ------------------------ format price ------------

const formatPrice = (price) => {
    var formatter = new Intl.NumberFormat()
      
      return formatter.format(price);
}

// -----------------------total----------------------
function cartTotal(){
    var cartItem = document.querySelectorAll('div .cart-center')
    var totalB = 0
    for(var i=0 ;i<cartItem.length;i++){
            var inputValue = cartItem[i].querySelector('input').value
            var productPrice = cartItem[i].querySelector('.special-price span').innerHTML
            const subStr = productPrice.replace(".", "")
            totalA =+inputValue*+subStr
            totalB += totalA
    }
    var cartTotalSum = document.querySelector('.cart-sum span')
    cartTotalSum.innerHTML = formatPrice(totalB*1000)
    console.log(totalB);
    inputChange()
}
// ---------------delete-------------
function deleteCart(){
    var cartItem = document.querySelectorAll('div .cart-center')
    for(var i=0 ;i<cartItem.length;i++){
        var productDlt = document.querySelectorAll('.btn-delete')
        productDlt[i].addEventListener('click',function(event){
            var btnDelete = event.target
            var btnDeleteR = btnDelete.parentElement.parentElement.parentElement
            btnDeleteR.remove()
            cartTotal()
        })
    }
}
function inputChange(){
    var cartItem = document.querySelectorAll('div .cart-center')
    for(var i=0 ;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener('change',function(){
            cartTotal()
        })
    }
}
// -------------------------------------box-chat-----------------------
const chatoff = document.querySelector('.chat-box-off')
const chaton = document.querySelector('.chat-box-on i')
if(chatoff){
    chatoff.addEventListener('click', function(){
        document.querySelector('.chat-box-on').style.display = 'block'
        document.querySelector('.chat-box-off').style.display = 'none'
    })
}
if(chaton){
    chaton.addEventListener('click', function(){
        document.querySelector('.chat-box-on').style.display = 'none'
        document.querySelector('.chat-box-off').style.display = 'block'
    })
}

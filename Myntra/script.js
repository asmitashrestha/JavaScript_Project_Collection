let items = [
  {
    id:"1",
    img:"./images/img3.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(22% off)"
  },
  {
    id:"2",
    img:"./images/img2.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(32% off)"
  },
  {
    id:"3",
    img:"./images/img1.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(32% off)"
  },
  {
    id:"4",
    img:"./images/img2.jpg",
    rating: {
      stars:1.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    price: "Rs.2700",
    discount:"(22% off)"
  },
  {
    id:"5",
    img:"./images/img3.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    price: "Rs.2100",
    discount:"(20% off)"
  },
  {
    id:"6",
    img:"./images/img1.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(32% off)"
  },
  {
    id:"7",
    img:"./images/img2.jpg",
    rating: {
      stars:4.3,
      numlikes:1.2,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    price: "Rs.1700",
    discount:"(32% off)"
  },
  {
    id:"8",
    img:"./images/img3.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(32% off)"
  },
  {
    id:"9",
    img:"./images/img1.jpg",
    rating: {
      stars:5.3,
      numlikes:3.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    price: "Rs.9000",
    discount:"(32% off)"
  },
  {
    id:"10",
    img:"./images/img2.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    price: "Rs.1700",
    discount:"(22% off)"
  },
  {
    id:"11",
    img:"./images/img3.jpg",
    rating: {
      stars:4.7,
      numlikes:2.4,
    },
    itemName:"Cariton America",
    description:"Shirts with high quality silk",
    price: "Rs.900",
    discount:"(42% off)"
  },
  {
    id:"12",
    img:"./images/img2.jpg",
    rating: {
      stars:4.3,
      numlikes:1.4,
    },
    itemName:"Cariton London",
    description:"Shirts with high quality silk",
    original_price: 1045,
        current_price: 606,
    discount:"(32% off)"
  },
]

let cartItems 

const displayCount = ()=>{
    let countContainer = document.querySelector('.count')
    if(!countContainer){
      return
    }
    countContainer.innerText =  cartItems.length
    
}

const addToCart =(itemId)=>{
  cartItems.push(itemId)
  displayCount()
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

let displayItems = ()=>{
  let itemContainer = document.querySelector('.container')
  if(! itemContainer){
    return 
  }
let innerHTML = '';
items.forEach(item =>{
  innerHTML += `
<div class="store-box">
<img src="${item.img}" alt="">
<div class="size">
  <p>${item.rating.stars} ⭐</p>
  <p>${item.rating.numlikes} 🩷</p>
</div>
<div class="img-name">
 <h3>${item.itemName}</h3>
 <p>${item.description}</p> 
</div>
<div class="price">
  <p>${item.original_price}</p>
  <p>${item.discount}</p>
</div>
<button class="addto" onclick="addToCart(${item.id})">Add to Bag</button>
</div>`
})

itemContainer.innerHTML = innerHTML
}

const onloadPage = () =>{
  let cartItemStr = localStorage.getItem('cartItems')
  cartItems = cartItemStr ? JSON.parse(cartItemStr) : []
  displayItems()
  displayCount()
}
onloadPage()









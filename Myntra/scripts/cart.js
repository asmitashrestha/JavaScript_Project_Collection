let cartItemObject;
const CONVENIENCE_FEES = 99;

const loadCartItemObject = () => {
  console.log(cartItems);
  cartItemObject = cartItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });

  console.log(cartItemObject);

  // Now that cartItemObject is defined, call displayCartItems
  displayCartItems();
};
const removeFromCart = (itemId)=>{
  cartItems = cartItems.filter((cartitemId) => cartitemId != itemId)
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
  loadCartItemObject()
  displayCount()
  displayCartItems()
  displayPriceSummary()
}


const generateItemHtml = (item)=>{
    return `
    <div class="stores-box">
    <div class="click-item">
       <img src="../${item.img}" width="350px" height="150px" alt="">
    <div class="price">
      <p>${item.rating.stars} ⭐</p>
      <p>${item.rating.numlikes} 🩷</p>
    </div>
    <div class="img-name">
     <h2>${item.itemName}</h2>
     <p style="font-size: 17px;justify-content: center;text-align: center;font-weight: bold
     ;">${item.description}</p> 
    </div>
    <div class="price">
      <p>${item.original_price}</p>
      <p>${item.discount}</p>
    </div>
    <button class="cross" onclick="removeFromCart(${item.id})"><i class="fa fa-times" aria-hidden="true"></i></button>
    </div>
  </div>     
    `
   }


function displayPriceSummary(){
  let itemPrice = document.querySelector('.price-info') 
   let totalDiscount =0;
  let totalMrp = 0;
  if(!cartItemObject){
    return
  }
  cartItemObject.forEach(cartItem => {
    totalMrp += cartItem.original_price;
    totalDiscount += cartItem.original_price - cartItem.current_price;
  });

  let totalPayment = totalMrp - totalDiscount + CONVENIENCE_FEES;
 
 
  itemPrice.innerHTML = `
  <div class="price-container">
  <p class="price-details">
    Price details of items
  </p>
  <div class="prices">
    <div class="price">
    <p>Total MRP</p>
    <p>Rs. ${totalMrp}</p>
  </div>
    <div class="price">
    <p>Discount on MRP</p>
    <p>Rs. ${totalDiscount}</p>
  </div>
    <div class="price">
    <p>Convience fee</p>
    <p>${CONVENIENCE_FEES}</p>
  </div>
  <hr>
  <div class="price">
    <h3>Total Amount</h3>
    <h3>Rs. ${totalPayment} </h3>
  </div>
  </div>
  <button class="placeto" onclick="addToOrder()">Place Order</button>
  </div>
  `
}  

displayPriceSummary()

function displayCartItems(){
  let cartItemContainer = document.querySelector(".stores-box");
  let innerHTML = '';

  cartItemObject.forEach((cartItem) => {
    innerHTML += generateItemHtml(cartItem);
  });

  cartItemContainer.innerHTML = innerHTML;
};


const onLoad = () => {
  loadCartItemObject();
  displayCartItems()
  displayPriceSummary()
};

onLoad();

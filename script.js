var removeButton = document.getElementsByClassName("remove-items");
 
for(var i=0; i<removeButton.length; i++){
    var button = removeButton[i];
 
    button.addEventListener("click", (e) => {
        var clicked = e.target
        console.log("remove is clicked")
 
        clicked.parentElement.parentElement.remove()
        updatePrice()
    })
}
 
 
var quantity = document.getElementsByClassName("quantity");
for(var i=0; i<quantity.length; i++){
    var quant = quantity[i];
 
    quant.addEventListener("change", (e)=>{
        var input = e.target;
        if(input.value <= 0){
 
            input.parentElement.remove();
        }
        updatePrice()
    })
}
 
 
function updatePrice(){
    var price = document.getElementsByClassName("price")
    var quantity = document.getElementsByClassName("quantity")
    var tprice = 0;
    for(var i=0; i<price.length; i++){
        var actualPrice = parseInt(price[i].innerText.replace("$",''))
        var actualQuantity = quantity[i].value; 
 
        tprice = tprice + actualQuantity*actualPrice             
    }
    document.getElementsByClassName("total-price")[0].innerHTML = "$"+tprice;
 
 
}
 
updatePrice()

var AddToCart = document.getElementsByClassName("addtobasket");
 
for(var i=0; i<AddToCart.length; i++){
     var basketButton = AddToCart[i];
     basketButton.addEventListener('click',(e)=>{
        var currentButton = e.target;
        var myItem = currentButton.parentElement;
 
        var ItemName = myItem.getElementsByClassName("webItem")[0].innerText
        var ItemPrice = myItem.getElementsByClassName("Item-price")[0].innerText
        
        var Cartitems = document.getElementsByClassName("cart-items")[0];
        var CartItemName = Cartitems.getElementsByClassName("CartItemName");
 
        addItemToBasket(ItemName, ItemPrice)
 
    })
}
 
 
function addItemToBasket(name,price){
 
    var newProduct = document.createElement("div");
    newProduct.classList.add("product")

    var cartitems = document.getElementsByClassName('cart-items')[0];
    var CartItemName = cartitems.getElementsByClassName("CartItemName");
 
    for(var j=0;j<CartItemName.length;j++){
        if(CartItemName[j].innerText == name){
            alert("This product is already added in the cart")
            return;
        }
    }
 
    var cartnewRow = `
        <span class="CartItemName">${name}</span>
        <input type="number" class="quantity" min="1" value="1">
        <span class="price p500">${price}</span>
        <span><button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded remove-items">Remove</button></span>
    `
    newProduct.innerHTML = cartnewRow;
 
    var cartitems = document.getElementsByClassName('cart-items')[0];
    cartitems.append(newProduct)
    updatePrice()
    var newRemove = document.getElementsByClassName("remove-items");
    for(var i=0;i<newRemove.length;i++){
        var button = newRemove[i];
        button.addEventListener("click", (e)=>{
            var clicked = e.target;
            clicked.parentElement.parentElement.remove()
            updatePrice()
        })
    }
    
    var quantity = document.getElementsByClassName("quantity");
    for(var i = 0; i < quantity.length; i++){
        var quant = quantity[i]

        quant.addEventListener("change", (e)=>{
            var input = e.target;
            if(input.value == 0){

                input.parentElement.remove();
            }
            updatePrice();
        })
    }
 
 
}
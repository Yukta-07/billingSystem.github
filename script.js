let items =[];
function addItem(){
let itemName= document.getElementById("item-name").value;
let itemQuantity = document.getElementById("item-quantity").value;
let itemPrice = document.getElementById("item-price").value;

if(itemName && itemQuantity && itemPrice){
    items.push(
        {
            name:itemName,
            qunatity:itemQuantity,
            price:parseInt(itemPrice)

        }
    )
    console.log(items);
    showItems();

}
}

function showItems(){


}
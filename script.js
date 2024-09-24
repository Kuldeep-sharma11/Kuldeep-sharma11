console.log("Jai Shree Ram.");
let bagItems = [];
onload();
displayitems();
displayBagIcon();


function onload() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
     displayitems();
     displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let begItemCount = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        begItemCount.style.visibility = 'visible';
        begItemCount.innerText = bagItems.length;
    }else{ 
        begItemCount.style.visibility = 'hidden';
    }
}

function displayitems() {
let itemsContainerElement = document.querySelector('.items-container');
if (!itemsContainerElement) {
    return;
}
let innerHTML = '';
items.forEach(item => {
    innerHTML += `
    <div class="item-container">
<img class="item-image" src="${item.image}" alt="image1">
<div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
</div>
<div class="company-name"> ${item.company} </div>
<div class="item-name"> ${item.item_name} </div>
<div class="price">
    <span class="current-price">Rs ${item.current_price} </span>
    <span class="original-price">Rs ${item.original_price} </span>
    <span class="discount">( ${item.discount_percentage}% OFF)</span>
</div>
<button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
</div> `

});
itemsContainerElement.innerHTML = innerHTML; 
}




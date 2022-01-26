const orange = {
    barcode: 789,
    price: 7,
};
const pineapple = {
    barcode: 5367,
    price: 80,
};
const kiwi = {
    barcode: 765,
    price: 25,
};
const apple = {
    barcode: 123,
    price: 5,
};

const banana = {
    barcode: 456,
    price: 6
};
const items = [
    apple,
    banana,
    orange,
    pineapple,
    kiwi,
];
const basket = [];
function scanItem(barcode) {
    //barkodu eşleşen ürünü bul
    return items.find(urun => {
        if (urun.barcode === barcode) {
            return true;
        }
    })
}

function addItemToBasket(item) {
    return basket.push(item);
}

function getTotal(){
   return basket.reduce((acc,cur) =>{
        return acc+cur.price;
    },0);
}
function removeItem(item){
    const indexToRemove = basket.indexOf(item);
    basket.splice(indexToRemove);
}

module.exports = { scanItem, addItemToBasket,basket,getTotal ,removeItem};
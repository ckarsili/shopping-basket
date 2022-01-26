const {scanItem,addItemToBasket,basket,getTotal,removeItem} = require("../basket.js");
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
   
it("scan an item using its barcode",()=>{
expect(scanItem(456)).toEqual(banana);

});

it("add an item to basket.",()=>{
    addItemToBasket(apple);
    expect(basket).toContain(apple);
});
it("see the total price of all items ", ()=>{
   addItemToBasket(kiwi);
    expect(getTotal()).toBe(30);
});
it("should remove an item from my basket", ()=>{
    removeItem(kiwi);
    expect(basket).not.toContain(kiwi);
})
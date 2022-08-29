const user ={id:1, name: 'ohin', jon:'actor'};

const stringified = JSON.stringify(user);



// console.log(user);
// console.log(stringified);

const shop ={
    owner:'alia',
    address:{
        street: 'rampur feni bangladesh',
        city: 'feni',
        country: 'BD'
    },
    product:['leptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
  
};
console.log(shop);

const ShopJeson =JSON.stringify(shop);

console.log(ShopJeson);
const shopObj = JSON.parse(ShopJeson);
console.log(shopObj);
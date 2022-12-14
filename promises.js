let stocks ={
  Fruits: ["strawberry","grapes","banana","apple"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings: ["choclate","peanuts"]
};
let is_shop_open = true;
let order = (time,work)=>{
  return new Promise((resolve, reject) => {
    
    if(is_shop_open){
        setTimeout( ()=>{
          resolve(work());
        },time);
        
    }
    
    else{
      reject(console.log("Sorry sir for the inconvenience"))
    }
  })
};
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
  return order(0000,() => console.log("Production has started"));
})
.then(()=>{
  return order(2000,() => console.log("Fruits has been chopped"));
})
.then(()=>{
  return order(1000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`));
})
.then(()=>{
  return order(1000,() => console.log("Machine Started"));
})
.then(()=>{
  return order(2000,() => console.log(`Ice cream placed on ${stocks.holder[0]}`));
})
.then(()=>{
  return order(3000,() => console.log(`${stocks.toppings[0]} added on ice cream`));
})
.then(()=>{
  return order(1000,() => console.log("Ice cream has been served"));
})
.catch(()=>{
  console.log("customer left");
})
.finally(() =>{
  console.log("day ended, shop is closed");
})

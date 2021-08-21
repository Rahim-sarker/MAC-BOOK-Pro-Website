function updateMemory(isIncrease,price, displaycost){

  let addMemory = 0;
  if(isIncrease == true){
    addMemory = parseInt(addMemory) + 1;
  }
  else if(addMemory > 0){
    addMemory = parseInt(addMemory) - 1;
  }
 
  const shwoprice = document.getElementById(displaycost);
  shwoprice.innerText = addMemory * price;

  calculateTotal();
 
}

// CALLING FOR EXTRA M3MORY

document.getElementById('16gbBtn').addEventListener('click',function(){
  updateMemory(true,180,'extraMemory');
})

document.getElementById('8gbBtn').addEventListener('click',function(){
  updateMemory(false,180,'extraMemory'); 
});

     //CALLING FOR DELIVERY FUNCTION using updateMemory function
document.getElementById('aug21Delivery').addEventListener('click',function(){
  updateMemory(true,20,'deliveryCharge');
});

document.getElementById('aug25Delivery').addEventListener('click',function(){
  updateMemory(false,20,'deliveryCharge');
});


//STORAGE FUNCTION START HERE

function upadteStorage(isIncrease,price,showCost){
  let addStorage = 0;
  if(isIncrease == true){
    addStorage = parseInt(addStorage) + 1;
  }
  else if(addStorage > 0){
    addStorage = parseInt(addStorage) - 1;
  }
  else{
     addStorage =3
  }

  const shwoSubprice = document.getElementById(showCost);
  shwoSubprice.innerText = addStorage * price
  calculateTotal()
}


//CALLING STORAGE FUNCATION
document.getElementById('256SsdBtn').addEventListener('click',function(){
  upadteStorage(false,0,'extraStorage');
});

document.getElementById('512SsdBtn').addEventListener('click',function(){
  upadteStorage(true,100,'extraStorage');
});

document.getElementById('1TbSsdBtn').addEventListener('click',function(){
  upadteStorage(false,100,'extraStorage');
});


                //CALCULATION CODE HERE

function getValue(gettingID){
  const memorValue = document.getElementById(gettingID).innerText;
  const memoryTotalValue = parseInt(memorValue);
  return memoryTotalValue
}


function calculateTotal(){
  const memorysubPrice = getValue('extraMemory');
  const deliverysubPrice = getValue('deliveryCharge');
  const mybestPrice = getValue('best-price');
  const extraStorage = getValue('extraStorage');
  

   const sumofAll = mybestPrice + memorysubPrice + deliverysubPrice + extraStorage ;
   let mytotalPrice = document.getElementById('totalPrice');
   mytotalPrice.innerText = sumofAll

   
    let totalFinal = document.getElementById('finalTotal');
    totalFinal.innerText = sumofAll;
    parcenTage()
}


// PERCENTAGE 20% DISCOUNT PROMO CODE HERE 
function parcenTage(){
  document.getElementById('button-id').addEventListener('click',function(){
    const promoCodeIn = document.getElementById('inputId');
    const promoCode = promoCodeIn.value;
   
    promoCodeIn.value = '';

   if(promoCode == 'stevekaku'){  //stevekaku condation here
    const getFinalValue =  document.getElementById('finalTotal').innerText;
    const percentageValue = parseInt(getFinalValue) - parseInt(getFinalValue)*0.2;
    let totalFinal = document.getElementById('finalTotal');
    totalFinal.innerText = percentageValue;
   }

});

}





           









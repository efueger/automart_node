

let carItem = document.querySelector('body')




carItem.addEventListener('click',(e)=>{
    let tgt = e.target
    let parentDiv = tgt.parentNode.parentNode.parentNode.id

    let targetTags = {
        'buyNow':'buy-now',
        'viewDetail':'view-detail',
        'viewFlag':'view-flag',
        'closeFlag':'close-flag',
        'closeOrder':'close-order',
        'closeDetail':'close-detail',
    }    

   if (tgt.id === targetTags.buyNow){
   
    let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    let form = document.querySelector('.viewOform').classList.add('viewForm')
    let formPrice = document.querySelector('.viewOform #price').value = price;
   }

   else if(tgt.id === targetTags.viewDetail){
    let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    let model = document.querySelector('#' + parentDiv + ' ' + '.model').innerHTML;
    
    let src = document.querySelector('#' + parentDiv + ' ' + '.img').src;
    let form = document.querySelector('.viewDform').classList.add('viewForm')
    let formPrice = document.querySelector('.detail .price').innerHTML = price;
    let formModel = document.querySelector('.detail .model').innerHTML = model;
    let formBody = document.querySelector('.detail .b-type').innerHTML = model;
    let formManufacturer = document.querySelector('.detail .manufacturer').innerHTML = model;
    let formImg = document.querySelector('.detail .img').src = src;
   }

   else if(tgt.id === targetTags.viewFlag){
    let form = document.querySelector('.viewFform').classList.add('viewForm')
    document.querySelector('.viewDform').classList.remove('viewForm')

   }


   else if(tgt.id === targetTags.closeDetail){
    // alert(price)
    document.querySelector('.viewDform').classList.add('close-modal');
  
    setTimeout(()=>{
        document.querySelector('.viewDform').classList.remove('viewForm');
        document.querySelector('.viewDform').classList.remove('close-modal');
    },1500)

    (function remInterval(){
    clearTimeout()
})();
   
}

else if(tgt.id === targetTags.closeOrder){
    document.querySelector('.viewOform').classList.add('close-modal');
  
    setTimeout(()=>{
        document.querySelector('.viewOform').classList.remove('viewForm');
        document.querySelector('.viewOform').classList.remove('close-modal');
    },1500)

    (function remInterval(){
    clearTimeout()
})();
}

else if(tgt.id === targetTags.closeFlag){

    document.querySelector('.viewFform').classList.add('close-modal');
  
    setTimeout(()=>{
        document.querySelector('.viewFform').classList.remove('viewForm');
        document.querySelector('.viewFform').classList.remove('close-modal');
    },1500)

    (function remInterval(){
    clearTimeout()
})();

}

    })










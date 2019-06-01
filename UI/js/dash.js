let carItem = document.querySelector('body')


carItem.addEventListener('click',(e)=>{
    let tgt = e.target
    let parentDiv = tgt.parentNode.parentNode.parentNode.id

    let targetTags = {
        'editAdvert':'edit-advert',
        'editOrder':'edit-order',
        'closeAdvert':'close-advert',
        'closeOrder':'close-order',
    }    

   if (tgt.id === targetTags.editAdvert){
    let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    let form = document.querySelector('.viewPform').classList.add('viewForm')
    let formPrice = document.querySelector('.viewPform #price').value = price;
   }

   else if(tgt.id === targetTags.editOrder){
    let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    let form = document.querySelector('.viewOform').classList.add('viewForm')
    let formPrice = document.querySelector('.viewOform #price').value = price;
   }



   else if(tgt.id === targetTags.closeAdvert){
    document.querySelector('.viewPform').classList.add('close-modal');

    setTimeout(()=>{
        document.querySelector('.viewPform').classList.remove('viewForm');
        document.querySelector('.viewPform').classList.remove('close-modal');
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
    })




// function editAdvert(e){
//     let tgt = e.target
//     let parentDiv = tgt.parentNode.parentNode.parentNode.id
//     let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
//     let form = document.querySelector('.viewPform').classList.add('viewForm')
//     let formPrice = document.querySelector('.viewPform #price').value = price;
//     }
    
  

//     function editOrder(e){
//         let tgt = e.target
//         let parentDiv = tgt.parentNode.parentNode.parentNode.id
//         let price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
//         let form = document.querySelector('.viewOform').classList.add('viewForm')
//         let formPrice = document.querySelector('.viewOform #price').value = price;
//         // alert(price)
        
//         }
        
   
//         function closeOrder(){
//             document.querySelector('.viewOform').classList.add('close-modal');

//             setTimeout(()=>{
//                 document.querySelector('.viewOform').classList.remove('viewForm');
//                 document.querySelector('.viewOform').classList.remove('close-modal');
//             },1500)
        
//             (function remInterval(){
//             clearTimeout()
//         })();
//         }
    


//         function closeAdvert(){
//             document.querySelector('.viewPform').classList.add('close-modal');

//             setTimeout(()=>{
//                 document.querySelector('.viewPform').classList.remove('viewForm');
//                 document.querySelector('.viewPform').classList.remove('close-modal');
//             },1500)
        
//             (function remInterval(){
//             clearTimeout()
//         })();
//         }
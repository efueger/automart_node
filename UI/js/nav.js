let hamWrapper = document.querySelector('.ham-wrapper');


hamWrapper.addEventListener('click',()=>{

    
    let hamBurger = document.querySelector('.nav-links');
   

    if (hamBurger.offsetHeight === 0 && hamBurger.offsetWidth === 0){
        document.querySelector('.nav-links').classList.add('drop')
        return
    
    }

     else if(hamBurger.offsetHeight !== 0 && hamBurger.offsetWidth !== 0){
        document.querySelector('.nav-links').classList.add('close-drop');
        setTimeout(()=>{
            document.querySelector('.nav-links').classList.remove('drop');
            document.querySelector('.nav-links').classList.remove('close-drop');
        },1500)

       
            clearTimeout()
       
    }
  
})
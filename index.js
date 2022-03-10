const imgSlider = (auto = false, interval = 10000) => {
  const firstSlide = document.querySelector('.tileslider .slide')
  if(firstSlide){
    firstSlide.classList.add('active')

    const activateSlide = (e) => {
      const active = document.querySelector('.active')
      active.classList.remove('active')
      e.currentTarget.classList.add('active')
    }
  
    const allSlides = document.querySelectorAll('.tileslider .slide')
    allSlides.forEach((slide, id) => slide.addEventListener('click', activateSlide));
    
    if(auto == true){
      setInterval(()=>{
        const getActive = () =>{
          for(i=0;i<allSlides.length;i++){
            let j = i + 1
           if(allSlides[i].classList.contains('active')){
              return i;
            }
          }
        }
        
        const currentActive = getActive();
        if((currentActive + 1) < allSlides.length){
          allSlides[currentActive].classList.remove('active')
          allSlides[currentActive + 1].classList.add('active')
        }else{
          allSlides[currentActive].classList.remove('active')
          allSlides[0].classList.add('active')
        }
        
      },interval)
    }
  }
  
}

imgSlider(true);

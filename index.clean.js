const tileslider = (props) => {
  const settings = {
    auto: props.auto || true,
    interval: props.interval || 10000,
    mainClass: props.mainClass || '.tileslider',
    slideClass: props.slideClass || '.slide'
  }

  let interval
  

  const firstSlide = document.querySelector(`${settings.mainClass} ${settings.slideClass}`)
  if(firstSlide){
    firstSlide.classList.add('active')

  const activateSlide = (e) => {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    e.currentTarget.classList.add('active')
    clearInterval(interval);
    autoSlide();
  }
  
  const allSlides = document.querySelectorAll(`${settings.mainClass} ${settings.slideClass}`)
  allSlides.forEach((slide) => slide.addEventListener('click', activateSlide));

  const autoSlide = () => {
    if(settings.auto == true){
      interval = setTimeout(()=>{
        const getActive = () =>{
          for(let i=0;i<allSlides.length;i++){
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
  
        autoSlide()
          
      },settings.interval)
    }
  }

  autoSlide();

  }
}

export default tileslider
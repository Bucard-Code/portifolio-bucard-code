import debounceF from './debounceF.js'
export class detectScroll{
    constructor(field){
        this.field = document.querySelector(field)
    }

    modifyBackgroundAdd(){
        this.field.classList.add('back--border-box')
    }
    modifyBackgroundRemove() {
        
        this.field.classList.remove('back--border-box')
    }

    dectect(){
        return  document.documentElement.scrollTop;
    }

    watchingScroll(){    
        console.log('OLA')   
        this.dectect() > 200 ? this.modifyBackgroundAdd() : this.modifyBackgroundRemove()
        
    }
    addScrollEvent()
    {
        window.addEventListener("scroll",  this.watchingScroll())
    }
    init(){
        this.addScrollEvent()
        return this;
    }
}
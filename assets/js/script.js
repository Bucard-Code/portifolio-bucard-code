// import initMenu from './module/menu.js';
import initScrollSuave from './module/scroll-suave.js';
import initTypeWriter from './module/writer.js';
// import { SlideNav} from './module/slide.js';
import shareAction from "./module/shareAction.js";
// import initGitInfo from './module/gitInfo.js';
// import { detectScroll } from './module/detectScroll.js';
// import debounce from './module/debounce.js';
// import createSection from './module/createSection.js'

// initMenu();
shareAction();
initScrollSuave();
// initGitInfo();
// const slide = new SlideNav('.slide', '.wrapper');
// slide.init()

// slide.activePrevSlide()
// slide.addArrow('.prev', '.next')

const code = document.querySelector('[data-anime="titulo"]');

initTypeWriter(code);

// const now = new Date;
// const year = document.getElementById("year");
// year.innerText = "Jorge Nunes - " + now.getFullYear() ;


// const detecto  = new detectScroll('.navbar-transparent')
// debounce(
// window.addEventListener("scroll", function() {
//    detecto.init()
    
// }), 1000)

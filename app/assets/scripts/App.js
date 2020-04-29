import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/Reveal_on_scroll.js';
import StickyHeader from './modules/sticky-header.js';
// import Modal from './modules/Modal';

// new Modal();



new StickyHeader();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'),75);
new RevealOnScroll(document.querySelectorAll('.testimonial'),60);
let modal;


document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e =>  {
    e.preventDefault();
    if (typeof modal == 'undefined') {
      import(/*webpackChunkName: 'modal'*/'./modules/Modal').then( x => {
       modal = new x.default()
       setTimeout(() => modal.openTheModal, 20)
       //to give the browser time to instantiate the object and inject into the dom
      }).catch(() => console.log('there was a problem'))
    } else {
        modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept();
}

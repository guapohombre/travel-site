class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.siteHeader = document.querySelector('.site-header');
    this.topLine = document.querySelector('.site-header__menu-icon__top')
    this.bottomLine = document.querySelector('.site-header__menu-icon__bottom')
    this.middleLine = document.querySelector('.site-header__menu-icon__middle')
    this.events();

  }

  events() {
    this.menuIcon.addEventListener('click',()=> this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.topLine.classList.toggle('site-header__menu-icon__top--x')
    this.bottomLine.classList.toggle('site-header__menu-icon__bottom--x')
    this.middleLine.classList.toggle('site-header__menu-icon__middle--x')
  }

}


export default MobileMenu;

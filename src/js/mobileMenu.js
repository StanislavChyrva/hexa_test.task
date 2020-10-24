class MobileMenu {
    /**
     * @param menu {string}
     * @param burger {string}
     * @param background {string}
     */
    constructor(menu, burger, background) {
        this.menu = document.querySelector(`.${menu}`);
        this.burger = document.querySelector(`.${burger}`);
        this.background = document.querySelector(`.${background}`);
    }

    /**
     * @description implements animation on burger ico, toggle class
     */
    animateBurger() {
        try {
            [].forEach.call(this.burger.children, item => item.classList.toggle('closed'));
            setTimeout(() => {
                [].forEach.call(this.burger.children, item => item.classList.toggle('closed-2'));
            }, 150);
        } catch (error) {
            console.error(error);
        }

    }

    toggleMenu(){
        this.menu.classList.toggle('shown');
        this.background.classList.toggle('shown');
        document.body.classList.toggle('scroll-lock');
    }

    handleClick() {
        this.animateBurger();
        this.toggleMenu();
    }

    addEventListeners() {
        this.burger.addEventListener('click', this.handleClick.bind(this));
        this.background.addEventListener('click', this.handleClick.bind(this));
    }

    init() {
        this.addEventListeners();
    }
}

const mobileMenu = new MobileMenu('header__nav-menu', 'header__burger', 'header__nav-menu-background');
mobileMenu.init();
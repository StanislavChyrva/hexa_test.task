class SliderDescription {
    /**
     * @param title {string}
     * @param secondTitle {string}
     * @param price {string}
     * @param animationContainer {string}
     * @param buttonPrev {string}
     * @param buttonNext {string}
     * @param props {array}
     */
    constructor(title, secondTitle, price, animationContainer, buttonPrev, buttonNext, props = []) {
        this.title = document.querySelector(`.${title}`);
        this.secondTitle = document.querySelector(`.${secondTitle}`);
        this.price = document.querySelector(`.${price}`);
        this.animationContainer = document.querySelector(`.${animationContainer}`);
        this.buttonPrev = document.querySelector(`.${buttonPrev}`);
        this.buttonNext = document.querySelector(`.${buttonNext}`);
        this.props = props;
        this.identifier = 0
    }

    nextDescription() {
        try {
            if (this.identifier < this.props.length - 1) { // if not last
                this.identifier++;
                this.animationContainer.classList.add('animation'); //add animation class

                setTimeout(() => {
                    this.title.innerHTML = this.props[this.identifier].title;
                    this.secondTitle.innerHTML = this.props[this.identifier].title;
                    this.price.innerHTML = this.props[this.identifier].price;
                }, 300);

                setTimeout(() => {
                    this.animationContainer.classList.remove('animation'); //remove animation class
                }, 600)
            }
        } catch (error) {
            console.error(error);
        }
    }

    prevDescription() {
        try {
            if (this.identifier > 0) { // if not first
                this.identifier--;
                this.animationContainer.classList.add('animation'); //add animation class

                setTimeout(() => {
                    this.title.innerHTML = this.props[this.identifier].title;
                    this.secondTitle.innerHTML = this.props[this.identifier].title;
                    this.price.innerHTML = this.props[this.identifier].price;
                }, 300);

                setTimeout(() => {
                    this.animationContainer.classList.remove('animation'); //remove animation class
                }, 600)
            }
        } catch (error) {
            console.error(error);
        }

    }

    addEventListeners() {
        this.buttonPrev.addEventListener('click', this.prevDescription.bind(this));
        this.buttonNext.addEventListener('click', this.nextDescription.bind(this));
    }

    init() {
        this.addEventListeners();
    }
}

const sliderProps = [
    'main__title-description-js',
    'js-main__ideas-description',
    'main__title-price-js',
    'main__title-description-container',
    'main__swiper-button-prev',
    'main__swiper-button-next',
    [
        {
            title: 'Для зала',
            price: '50'
        }, {
            title: 'Для гостинной',
            price: '150'
        }, {
            title: 'Для кухни',
            price: '100'
        }, {
            title: 'Для спальни',
            price: '200'
        }
    ]
];

const changeSliderDescription = new SliderDescription(...sliderProps);
changeSliderDescription.init();

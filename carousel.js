// const leftArrow = document.getElementById('left-arrow');
// const rightArrow = document.getElementById('right-arrow');
// const imgContainer = document.querySelector('.carousel-container');
// const imgs = document.querySelectorAll('.img-container')
// const imgsArray = Array.from(imgs);

// leftArrow.addEventListener('click', () => slideLeft());
// rightArrow.addEventListener('click', () => slideRight());

// function slideLeft() {
//     imgsArray[0].classList.toggle('carousel-container-slide'); 
//     imgsArray[1].classList.toggle('display-none'); 
//     imgsArray[2].classList.toggle('display-none'); 
//     console.log("left btn clicked");
       
// }

// function slideRight() {
//     imgsArray[0].classList.toggle('carousel-container-slide');
//     imgsArray[1].classList.toggle('display-none'); 
//     imgsArray[2].classList.toggle('display-none'); 
//     console.log("right btn clicked");
// }


class ImgSlide {
    constructor(element) {
        this.element = element;
        this.slide = this.element.querySelectorAll('.img-container');
        this.rightBtn = document.getElementById('right-arrow');
        this.leftBtn = document.getElementById('left-arrow');
        this.rightBtn.addEventListener('click', () => this.slideRight());
        this.leftBtn.addEventListener('click', () => this.slideLeft());
        this.index = 0;
        this.slide[this.index].style.display = "block";
    }
    slideRight() {
        this.slide[this.index].style.display = "none";
        this.index += 1;
        this.slide[this.index].style.display = "block";
    }
    slideLeft() {
        this.slide[this.index].style.display = "block";
        this.index -= 1;
        this.slide[this.index].style.display = "none";
    }
}

let imgContainer = document.querySelector(".imgs");
let imgSlider = new ImgSlide(imgContainer);
console.log(imgContainer);



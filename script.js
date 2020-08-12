const filterButtons = document.querySelector('.filter-btns').children;
const items = document.querySelector('.portofolio-gallery').children;
console.log(items);

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function () {
        console.log(this.innerHTML);
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove('active-pag');
        }
        this.classList.add('active-pag');
        const target = this.getAttribute("data-target");
        console.log(target);

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (items[k].getAttribute("data-id") == target) {
                items[k].style.display = "block";
            }
            if (target === "all") {
                items[k].style.display = "block";
            }

        }
    })
}

// // slider
// const sliderContainer = document.querySelector('.slider');
// const slider = sliderContainer.children;
// const containerWidth = sliderContainer.offsetWidth;
// console.log(containerWidth);
// const margin = 30;
// let itemperSlide = 0;

// // responsive
// const responsive = [{
//         breakPoint: {
//             width: 0,
//             item: 1
//         }
//     },
//     {
//         breakPoint: {
//             width: 1080,
//             item: 2
//         }
//     }
// ]

// function load() {
//     for (let i = 0; i < responsive.length; i++) {
//         if (window.innerWidth > responsive[i].breakPoint.width) {
//             itemperSlide = responsive[i].breakPoint.item;
//         }
//     }
//     start();
// }

// function start() {
//     for (let i = 0; i < slider.length; i++) {
//         slider[i].style.width = (containerWidth / itemperSlide) - margin + "px";
//         slider[i].style.margin = margin / 2 + "px";
//     }
//     sliderContainer.style.width = containerWidth * itemperSlide + "px";
// }

// window.onload = load();
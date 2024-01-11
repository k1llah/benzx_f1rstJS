// import ScrollMagic from "scrollmagic";
// import gsap, { Power2, TimelineMax } from 'gsap';

import "./scroll.css";

// let scroll_block = document.querySelector(".horizontalScroll") as HTMLDivElement;
// let containerSticky = document.querySelector(".scroll_container") as HTMLDivElement;
// let controller = new ScrollMagic.Controller();

// let scene1 = new ScrollMagic.Scene({
//   triggerElement: ".film_1",
//   duration: "100%",
// })
// .addTo(controller)
// .on("enter", function () {
//   let tl = new TimelineMax();
//   tl.to(".film_1", { x: "-100%", ease: Power2.easeInOut });
// });

// let scene2 = new ScrollMagic.Scene({
//   triggerElement: ".film_2",
//   duration: "100%",
// })
// .addTo(controller)
// .on("enter", function () {
//   let tl = new TimelineMax();
//   tl.to(".film_2", { x: "-100%", ease: Power2.easeInOut });
// });

// let scene3 = new ScrollMagic.Scene({
//   triggerElement: ".film_3",
//   duration: "100%",
// })
// .addTo(controller)
// .on("enter", function () {
//   let tl = new TimelineMax();
//   tl.to(".film_3", { x: "-100%", ease: Power2.easeInOut });
// });
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
// Активация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
let horizontalScrollBlock = document.querySelector(".horizontalScroll") as HTMLDivElement
let containerWidth = horizontalScrollBlock.offsetWidth
// Создаем анимацию для горизонтального скролла
const horizontalScroll = gsap.to(horizontalScrollBlock,{
	xPercent: -100,
	ease: 'none',
	scrollTrigger: {
		trigger: horizontalScrollBlock,
		start: 'top top',
		end:()=>'+=' + containerWidth
	},
	scrub: 1,
	pin: true,
})
gsap.utils.toArray('.film').forEach((film, index) => {
  gsap.to(film, {
    xPercent: -index * 100, // каждый элемент сдвигается на 100% ширины экрана
    scrollTrigger: {
      trigger: horizontalScrollBlock,
      start: 'top top',
      end: () => `+=${containerWidth}`,
      scrub: 1,
    },
  });
});
// Добавляем анимации для каждого элемента

// document.addEventListener('DOMContentLoaded',()=>{
//   let controller = new ScrollMagic.Controller()
//   let containerWidth = containerSticky.offsetWidth;
//   let contentWidth = scroll_block.scrollWidth;
//   // const horizontalScroll = gsap.to('.horizontal_scroll_block', {
//   //   x: `-${contentWidth - containerWidth}px`,
//   //   ease: 'none',
//   // });
//   new ScrollMagic.Scene({
//     triggerElement: containerSticky,
//     triggerHook: 'onLeave',
//     duration: contentWidth - containerWidth,
//   })
//   .setPin(containerSticky)
//   .addTo(controller)
//   .on('update', (event: any) => {
//     const progress = event.progress;
//     const newPosition = -progress * (contentWidth - containerWidth);
//     gsap.set('.horizontal_scroll_block', { x: newPosition });
//   });
// })

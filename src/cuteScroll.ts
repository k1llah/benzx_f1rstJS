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
 import ScrollTrigger from 'gsap/ScrollTrigger';

 // Активация плагина ScrollTrigger
 gsap.registerPlugin(ScrollTrigger);
 let horizontalScrollBlock = document.querySelector(".horizontalScroll") as HTMLDivElement
 let elements = gsap.utils.toArray(".horizontalScroll") // Замените '.film' на селектор ваших элементов
 // Создаем анимацию для горизонтального скролла
 const horizontalScroll = gsap.timeline({
	xPercent: -50,
	ease: 'none',
   scrollTrigger: {
     trigger: horizontalScrollBlock,
     start: "top top",
     end: () => "+=" + horizontalScrollBlock.offsetWidth,
     scrub: 1, // Включаем "скруббинг" для плавного скролла
     pin: true, 
		 // Закрепляем контейнер в процессе скролла
   },
 });
 elements.forEach((element, index) => {
  horizontalScroll.to(element, { xPercent: -(index + 1) * 255 }, 0); // Измените 20 на ваш желаемый шаг
});

 // Добавляем анимации для каждого элемента
 // Добавляем анимации для каждого элемента
//  horizontalScroll.to(".horizontalScroll", { xPercent: -50 });
//  horizontalScroll.to(".horizontalScroll", { xPercent: -70 });
//  horizontalScroll.to(".horizontalScroll", { xPercent: -90 });
//  horizontalScroll.to(".horizontalScroll", { xPercent: -110 });


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

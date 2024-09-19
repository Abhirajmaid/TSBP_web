// function showSlider(type) {
//   let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
//   let thumbnailItemsDom = document.querySelectorAll(
//     ".carousel .thumbnail .item"
//   );

//   if (type === "next") {
//     SliderDom.appendChild(SliderItemsDom[0]);
//     thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//     carouselDom.classList.add("next");
//   } else {
//     SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//     thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//     carouselDom.classList.add("prev");
//   }
//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove("next");
//     carouselDom.classList.remove("prev");
//   }, timeRunning);

//   clearTimeout(runNextAuto);
//   runNextAuto = setTimeout(() => {
//     next.click();
//   }, timeAutoNext);
// }

const showSlider = (type) => {
    return;
};
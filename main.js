import './assets/scss/all.scss';
// import 'bootstrap/dist/js/bootstrap';  //不寫前面它會自動去node_modules裡面找尋
import 'bootstrap/dist/js/bootstrap.min.js';

// 跑馬燈動畫
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", // 自動計算每次滑動可容納個內容
    speed: 40000,
    allowTouchMove: false, //避免滑鼠互動
    loop: true, // 最後一個自動循環
    autoplay: {
        delay: 1
        // disableOnInteraction 互動後輪播暫停預設為 false，不用再寫
    }
});

import Difference from "./modules/difference";
import Download from "./modules/download";
import Form from "./modules/forms";
import OpenModulesPage from "./modules/openModulesPage";
import VideoPlayer from "./modules/playVideo";
import ShareBlock from "./modules/shareBtn";
import ShowInfo from "./modules/showInfo";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ btns: '.next', container: '.page' });
    slider.render();

    const modulesPageSlider = new MainSlider({ container: '.moduleapp', btns: '.next' })
    modulesPageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    })
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    modulesSlider.init();

    const feedbackSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
    })
    feedbackSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init()

    new Difference('.officerold', '.officernew', '.officer__card-item').init()

    new Form('.form').init()

    new ShowInfo('.plus__content').init()

    new Download('.download').init()

    new OpenModulesPage()

    new ShareBlock('share-btn')

}) 
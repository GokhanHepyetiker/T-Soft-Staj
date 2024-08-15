var resim = document.getElementById('header');
var title = document.getElementById('title');
var excerpt = document.getElementById('excerpt');
var profile_img = document.getElementById('profile_img');
var authorName = document.getElementById('name');
var date = document.getElementById('date');

var animated_bgs = document.querySelectorAll('.animated-bg');
var animated_bg_texts = document.querySelectorAll('.animated-bg-text');



setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="./images/laptop.avif" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;	
    profile_img.innerHTML = `<img src="./images/John-Smith.webp" alt="" >`;
    authorName.innerHTML = `John Smith`;
    date.innerHTML = `6 January 1580`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

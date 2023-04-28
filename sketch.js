import './Components/AuctionCards/auctionCard';

const carousel = document.querySelector('.twitter-carousel');
const comment = carousel.querySelectorAll('.comment');

let index = 0;
let interval = setInterval(() => {
  comment[index].style.opacity = 0;
  index++;
  if (index === comment.length) {
    index = 0;
  }
  comment[index].style.opacity = 1;
}, 2000);



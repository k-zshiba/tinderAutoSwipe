const nope_button = document.getElementsByClassName("button")[1];
const like_button = document.getElementsByClassName("button")[3];

const time_interval_ms = 1000;

const like_ratio = 50;

function getRandomInt() {
  min = 0;
  max = 100;
  return Math.floor(Math.random() * (max - min) + min);
}

function likeOrNope() {
  if (getRandomInt(like_ratio) <= like_ratio) {
    like_button.click();
  }else {
    nope_button.click();
  }
}
setInterval(likeOrNope,time_interval_ms);
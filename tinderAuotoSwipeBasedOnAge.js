const nope_button = document.getElementsByClassName("button")[1];
const like_button = document.getElementsByClassName("button")[3];

const younger_age = 18;
const older_age = 24;

function judgeAge() {
  let str_age = document.getElementsByClassName("As(b)")[5].textContent;
  let age = Number(str_age);
  if (age >= younger_age && age <= older_age) {
    like_button.click();
  }else {
    nope_button.click();
  }
}
setInterval(judgeAge,1000);
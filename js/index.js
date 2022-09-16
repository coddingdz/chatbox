/*
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
    if (document.body.style.backgroundColor === "purple") {
        document.body.style.backgroundColor = "grey"
    }
    else {
        document.body.style.backgroundColor = "purple";
    }
});
*/

const button = document.getElementById("button");
const input = document.getElementById("input");
const mssgsent = document.getElementsByClassName("msg_sent");
const msg = document.getElementById('msg')


input.addEventListener('input', (e) => {
    console.log(e.target.value);
    msg.innerHTML = e.target.value
})

$(document).ready(function() {
    setTimeout(function() {
      location.href = location.href;
      }, 10000); // 10000 == 10 seconds
  });

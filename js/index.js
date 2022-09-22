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


button.addEventListener('click', () => {
    var text = document.createElement('div')
    console.log(input)
    msg.innerHTML = input.value
    msg.appendChild(text);
    input.value="";
})
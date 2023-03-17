const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const value = localStorage.getItem(id)

const data = JSON.parse(value);
const title = data.title;
const nickname = data.nickname;
const textarea = data.textarea;

const tit = document.getElementById("title")
tit.innerText = title;

const txt = document.getElementById("text")
txt.innerText = textarea;

const del = document.getElementById("delete")

del.addEventListener("click", function () {
    localStorage.removeItem(id);
    window.location.href = "./show.html";
});
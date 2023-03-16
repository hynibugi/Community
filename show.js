document.addEventListener('DOMContentLoaded', function () {
    console.log("로딩 시 그리기");

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);

        const data = JSON.parse(value);
        const nickname = data.nickname;
        const title = data.title;

        const temp = document.querySelector('#template');

        // 새로운 요소 생성
        var newElement = temp.content.cloneNode(true);

        console.log(newElement);

        const tit = newElement.querySelector('span.title');
        tit.innerText = title;

        const nik = newElement.querySelector('span.nickname');
        nik.innerText = nickname;

        document.querySelector('#list').appendChild(newElement);

        console.log(title);

    }



});

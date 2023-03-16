
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {

    const nickname = document.getElementById('nickname').value;
    const title = document.getElementById('title').value;
    const textarea = document.getElementById('my-textarea').value;


    if (nickname === null || nickname === "") {
        alert('닉네임을 입력해주세요');
        event.preventDefault();
    }
    else if (title === null || title === "") {
        alert('제목을 입력해주세요');
        event.preventDefault();
    }
    else if (textarea === null || textarea === "") {
        alert('내용을 입력해주세요');
        event.preventDefault();
    }

    else {

        // 현재 데이터 개수를 나타내는 카운터를 가져옴
        let counter = parseInt(localStorage.getItem("dataCount")) || 0;

        //카운터값 증가
        const text = { nickname, title, textarea };
        const jsonData = JSON.stringify(text);

        localStorage.setItem((counter + 1).toString(), jsonData);
        localStorage.setItem("dataCount", (counter + 1).toString());


    }
});

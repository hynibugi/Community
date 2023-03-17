
document.addEventListener('DOMContentLoaded', function () {
  console.log("로딩 시 그리기");

  //KEY , VALUE값확인 및 DOM조작
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
    if (key === 'dataCount' || key === 'lastname') {
      continue;
    }

    const data = JSON.parse(value);
    const nickname = data.nickname;
    const title = data.title;
    const importantcontent = data.importantcontent;

    const temp = document.querySelector('#template');

    //새로운 요소 복사하기
    var newElement = temp.content.cloneNode(true);

    console.log(newElement);

    //쿼리파라미터값 넘김
    const link = newElement.querySelector('.link');
    link.innerText = title;
    link.href = './showtext.html?id=' + key;

    const nik = newElement.querySelector('span.nickname');
    nik.innerText = nickname;


    if (importantcontent === true) {
      const element = newElement.querySelector('.textlist');
      element.style.backgroundColor = 'powderblue';

    }

    document.querySelector('#list').appendChild(newElement);
  }
});
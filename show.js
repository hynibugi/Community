const community = [];

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

    //  dom요소까지있으면..갹채조작가능...dom요소의 참조를알수있게....
    const data = JSON.parse(value);
    const nickname = data.nickname;
    const title = data.title;
    const importantcontent = data.importantcontent;

    const temp = document.querySelector('#template');

    const firstValue = community[1];

    //객체들왔네////////////nickname title
    console.log("@@@@@" + JSON.stringify(community));

    //새로운 요소 복사하기
    var newElement = temp.content.cloneNode(true);
    const list = {
      nickname, title, elem: newElement.firstElementChild
    };
    community.push(list);

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

//검색-------
const submitButton = document.getElementById("button");

submitButton.addEventListener("click", function (event) {
  const typeSelect = document.getElementById("type"); // select 엘리먼트
  const searchValue = document.querySelector("textarea").value; // textarea 엘리먼트
  let typearea = typeSelect.options[typeSelect.selectedIndex].text;

  if (searchValue === "") {
    alert("검색어를 입력해주세요.");
    return;
  }
  else if (typearea === "닉네임") {
    community.filter((x) => x.nickname !== searchValue)
      .forEach((x) => x.elem.style.display = 'none')
  }
  else if (typearea === "게시물이름") {
    community.filter((x) => x.title !== searchValue)
      .forEach((x) => x.elem.style.display = 'none')

  } else {

  }

}
);
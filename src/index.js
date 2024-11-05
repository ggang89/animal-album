const API_URL = "https://animal-api-two.vercel.app/";

let $content = document.querySelector("div.content");
let template = [];
const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template += `<img src=${elm.url}/>`;
      });
      $content.innerHTML = template;
      //innerHtml : 이전 요소의 자손이 모두 제거되고 지정된 요소로 대체
      //img src가 content의 속성이 됨
    }
  } catch (error) {
    console.log(err);
  }
};

getData();

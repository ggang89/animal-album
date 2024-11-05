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
    }
  } catch (error) {
    console.log(err);
  }
};

getData();

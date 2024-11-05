const API_URL = "https://animal-api-two.vercel.app/";

let $content = document.querySelector("div.content");
let template = [];
const getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`);
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

getData("koala");

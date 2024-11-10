const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page}페이지입니다.`;

  //history.pushState(state,title,url) //세션 히스토리에 현재의 상태 추가
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};

//popstate
window.addEventListener("popstate", (event) => {
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다`;
  }
});

document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});
document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});
document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

const goBack = () => {
  history.back();
};

const goForward = () => {
  history.forward();
};

document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForward);
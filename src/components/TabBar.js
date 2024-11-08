export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState; // currentTab: "all",
  this.onClick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  // 필요한 버튼
  this.template = () => {
    let temp = `<div id="all">전체</div>
    <div id ="penguin">펭귄</div>
    <div id ="koala">코알라</div>
    <div id="panda">판다</div>`;

    return temp;
  };

  this.render = () => {
    // 1. template가 반환한 값을 target div값으로 넣어줌
    this.$target.innerHTML = this.template();

    // 2. $target의 div(temp 값)들을 $tabBar변수에 저장
    const $tabBar = this.$target.querySelectorAll("div");

    // 3. $target의 각각의 div(=$tabBar)에 이벤트 연결
    // 해당 div를 클릭하면 div의 id가 currentTab의 name이 됨
    $tabBar.forEach((elm) => {
      elm.addEventListener("click", () => {
        onClick(elm.id);
      });
    });

    // 4. 현재 선택된 currentTab 요소 div을 $currentTab변수에 저장
    // $currentTab변수에 현재 state값과 동일한 아이디를 갖는 버튼 요소 할당
    let $currentTab = document.getElementById(this.state);

    // 5. 해당 값을 갖는 currentTab이 있으면 clicked 설정
    //$currentTab ? ($currentTab.className = "clicked") : "";
    $currentTab && ($currentTab.className = "clicked");
  };

  // 새로운 값을 받아서 state에 저장해두고, 화면을 렌더링 해줌
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}

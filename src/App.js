import Content from "./components/Content.js";
import TabBar from "./components/TabBar.js";
import { request } from "./components/api.js";

export default function App($app) {
  //index.js에서 전달한 요소를 받음

  // 필요한 상태 정의, 초기화
  this.state = {
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  //tab
  const tab = new TabBar({
    $app,
    initialState: this.state.currentTab,
    onClick: async (name) => {
      history.pushState(null, null, `/${name}`);
      this.updateContent(name);
    },
  });
  const content = new Content({
    $app,
    initialState: [],
  });

  // 상태 업데이트 함수
  this.setState = (newState) => {
    //업데이트할 새로운 값을 newState로 받아서 내부에 할당
    this.state = newState;
    tab.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  // window.addEventListener('popstate', async() => {
  //   const tabName = window.location.pathname.replace('/', '') || 'all';
  //   const photos = await request(tabName === 'all' ? '' : tabName);

  //   this.setState({
  //     ...this.state,
  //     currentTab: tabName,
  //     photos:photos,
  //   })
  // });
  this.updateContent = async (tabName) => {
    // const name = tabName === "all" ? "" : tabName;
    // const photos = await request(name);
    // this.setState({
    //   ...this.state,
    //   currentTab: tabName,
    //   photos: photos,
    // });
    try {
      const currentTab = tabName === "all" ? '' : tabName;
      const photos = await request(currentTab);
      this.setState({
        ...this.state,
        currentTab: tabName,
        photos:photos,
      })
    } catch (error) {
      console.log(error)
    }
  };

  window.addEventListener("popstate", () => {
    // 슬래쉬 뒤에 문자(없으면 all)
    this.updateContent(window.location.pathname.replace("/", "") || "all");
  });

  // 시작할 때 필요한 작업을 실행하고 초기상태를 설정하는 함수
  const init = async () => {
    this.updateContent(this.state.currentTab);
  };
  init();
}

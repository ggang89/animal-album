import Content from "./components/Content.js";
import TabBar from "./components/TabBar.js";
import { request } from "./components/api.js";

export default function App($app) {
  //index.js에서 전달한 요소를 받음

  // 필요한 상태 정의, 초기화
  this.state = {
    currentTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name),
      });
    },
  });
  const content = new Content();

  // 상태 업데이트 함수
  this.setState = (newState) => {
    //업데이트할 새로운 값을 newState로 받아서 내부에 할당
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  // 시작할 때 필요한 작업을 실행하고 초기상태를 설정하는 함수
  const init = async () => {
    try {
      // 초기상태에 필요한 값 : 모든 동물의 사진
      const initialPhotos = await request();
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (error) {
      console.log(error);
    }
  };
  init();
}

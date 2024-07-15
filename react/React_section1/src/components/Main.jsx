import './Main.css'

const Main = () => {
    const number = 10;
    const user={
        name: '김자바',
        isLogin : true,
    }
    console.log(user)
    if (user.isLogin) {
        return <div className="logout"> {user.name} 로그아웃</div>;
      } else {
        return <div>로그인</div>;
      }
      
  };
  export default Main;
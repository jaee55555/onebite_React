import "./Main.css"

//JSX 주의사항
//1. 중괄호{} 안에는 자바스크립트 표현식만 넣을 수 있다(조건문, 반복문 사용불가)
//2. 숫자, 문자열, 배열 값만 정상적으로 랜더링
//3. 모든 태그는 닫혀있어야 한다.
//4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () =>{
    const user = {
        name: '오윤재',
        isLogin: true,
    };

    if (user.isLogin){
        return <div className="logout">로그아웃</div>;
    }
    else{
        return <div>로그인</div>;
    }
    // return(
    //     <>
    //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
};

export default Main;
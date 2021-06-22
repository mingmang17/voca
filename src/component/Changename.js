import { useState } from "react";
import UserName from "./UserName";

const Changename = (props) => {
    console.log(props);
    //let name = "Mike";
    //useState 는 배열을 반환 ()안에는 초기값
    //변수명, state를 변경해주는 함수
    //setName함수가 호출돼서 name이 바뀌면 리액트는 이 컴포넌트를 렌더링
    const [name,setName] = useState('Mike');
    const [age,setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다" : "미성년자 입니다";

    function ch_name() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        //document.getElementById("name").innerText = name;
        setName(newName);
        //setAge(age +1);
    }
    //name은 현재 컴포넌트에선 state지만 UserName 에서는 props
    return (
        <div>
            <h1 id="name">{name}({age}) :{msg}</h1>
            <UserName name={name} />
            <button onClick={ch_name}>Change</button>
        </div>
    );
}

export default Changename;
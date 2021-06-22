import World from "../World"
import Welcome from "./Welcome"
import styles from "./Hello.module.css"

const Hello = () => {
    function showName() {
        console.log("minjoo");
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(e){
        console.log(e.target.value);
    }
    return (
    <>
    <div className={styles.box}>HELLO</div>
    <button onClick={showName}>Show name</button>
    <button onClick={ ()=>{
            showAge(28);
        }
    }>Show age</button>
    <input type="text" onChange={showText} />
    </>
    );
}

export default Hello;
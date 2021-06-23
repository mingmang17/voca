import './App.css';
import Hello from './component/Hello';
import Changename from './component/Changename';

function App() {
  const name = "tom";
  const naver = {
    name:"네이버",
    url:"https://naver.com"
  }
  return (
    <div className="App">
      <h1>
        welcome,{name}
      </h1>
      <a href={naver.url}>{naver.name}</a>
      <Hello />
      <Changename age={10}/>
      <Changename age={20}/>
      <Changename age={30}/>
    </div>
  );
}

export default App;

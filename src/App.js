import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'gender' : '남자',
  'name':'홍길동',
  'birthday':'940121'
 },
 {
  'id' : 2,
  'gender' : '여자',
  'name':'이민주',
  'birthday':'950210'
 },
 {
  'id' : 3,
  'gender' : '남자',
  'name':'안재현',
  'birthday':'870506'
 }
]


function App() {

  return (
    <div className="App">
      {
        customers.map(c => {//반복문,key설정해야함 아마도 다 다른걸로
          return (
            <Customer
              key={c.id}
              id={c.id}
              gender={c.gender}
              name={c.name}
              birthday={c.birthday}
            />
          )
        })
      }
    </div>
  );
}

export default App;

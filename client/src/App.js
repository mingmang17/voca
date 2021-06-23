import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const rootStyle = {
    width:'100%',
    marginTop:30,
    overflowX: "auto"
};

const tableStyle = {
  minwidth:1080
};

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
  //const { classes } = styles;
  return (
    <Paper className={rootStyle}>
      <Table className={tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;

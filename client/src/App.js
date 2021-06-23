import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React,{useState,useEffect,setState} from 'react';

const rootStyle = {
    width:'100%',
    marginTop:30,
    overflowX: "auto"
};

const tableStyle = {
  minwidth:1080
};


function App() {
  //const { classes } = styles;

  const [customers, setcustomers] = useState(); 
  
  useEffect(() => { 
    fetch('/api/customers')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setcustomers(data);
      })
  },[]);

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
        customers ? customers.map(c => {//반복문,key설정해야함 아마도 다 다른걸로
          return (
            <Customer
              key={c.id}
              id={c.id}
              gender={c.gender}
              name={c.name}
              birthday={c.birthday}
            />
          )
        }) : ''
      }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;

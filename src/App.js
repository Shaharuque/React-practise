import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Loadcomment></Loadcomment>
    </div>
  );
}

function Loadcomment(){
  const [comments,setComments] =useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>setComments(data))         //so, comments have array of objects stored in it
  },[])
  return(
    <div>
      <p>{
        comments.map(comment=><Showcomment email={comment.email}></Showcomment>)
      }</p>
    </div>
  )
}

function Showcomment(props){
  return(
    <div>
      <p>user email: {props.email}</p>
    </div>
  )
}

function Counter(){
  //state declare
  const [count,setCount]=useState(5)  //initial state of count=5 and setCount ar moddhey count ar value update kora jabey
  console.log(count)

  let increaseCout=()=>setCount(count+1)
  let decreaseCount=()=>{
    if(count>0){
      setCount(count-1)
    }
    
  }
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={increaseCout}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;

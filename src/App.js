import { useState,useEffect }  from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
  const [data,setData]=useState([])
  async function posts(){
    let response=await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
    let data= await response.json()
    setData([...data])
  }
  useEffect(()=>{
    posts()
  },[])
  return (
    <div className="App">
      <Posts data={data}/>
    </div>
  );
}

export default App;

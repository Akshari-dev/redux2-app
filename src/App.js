import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';

function App() {
 const store=useSelector((x)=>x)
 const dispatch=useDispatch()

 const increment=()=>{
   dispatch({type:"INCREMENT_NUM"})
 }

 const decrement=()=>{
   dispatch({type:"DECREMENT_NUM"})
 }


  console.warn(store)
  return (
    <>
    <div className="App">
      <header className="App-header">

<div>Counter:{store.counter}</div>

<div>
  <button onClick={increment}>INCREMENT+</button>
  <button onClick={decrement}>DECREMENT-</button>
</div>
      </header>
    </div>
    </>
  );
}

export default App;

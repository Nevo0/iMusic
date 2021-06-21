import { useDispatch, useSelector } from "react-redux";

import './App.css';

function App() {
  const data = useSelector((state) => state.tunes.data);
  return (
    <div className="App">
      <header className="App-header">
       
          <h1>Learn React</h1>
          {data.length}
        
      </header>
    </div>
  );
}

export default App;

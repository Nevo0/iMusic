import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

function App() {
  const { data, error } = useSelector((state) => state.tunes);
  return (
    <div className="App">
      <Header />
      {error && <h1>{error}</h1>}
      <main id="main" className="main">       
      {data &&<SearchResult />}
      </main>

    </div>
  );
}

export default App;

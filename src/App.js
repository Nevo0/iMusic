import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import SearchResult from "./components/SearchResult";
import CardModal from "./components/CardModal";

function App() {
  const { data, error, isOpenModal, isCardOpenModal } = useSelector((state) => state.tunes);
  return (
    <div className="App">
      <Header />
      {error && <h1>{error}</h1>}
      <main id="main" className="main">
        {data && <SearchResult />}
        {isOpenModal && <InfoModal />}
        {isCardOpenModal && <CardModal />}
      </main>
      
    </div>
  );
}

export default App;

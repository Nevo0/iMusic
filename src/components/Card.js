import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, setSearchInfo } from "../redux/actions/tunesActions";

function SearchForm() {
  const { searchText, searchMedia } = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.preventDefault();
    
      dispatch(fetchSearch());
    
  };

  return (
    <div className="searchBarWrapper"  onClick={()=> dispatch({type:"OPEN_CARD_MODAL"})}>
      <div className="card">
      Card
      </div>      
    </div>
  );
}

export default SearchForm;

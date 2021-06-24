import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, setSearchInfo } from "../redux/actions/tunesActions";

function SearchForm() {
  const { searchText, searchMedia } = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.preventDefault();
    if (!(searchText.length === 0)) {
      dispatch(fetchSearch());
    }
  };

  return (
    <div className="searchBarWrapper">
      <div className="card">
      Card
      </div>
      
    </div>
  );
}

export default SearchForm;

import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, setSearchInfo } from "../redux/actions/tunesActions";

function SearchForm() {
  const {searchText,searchMedia} = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!(searchText.length === 0)) {
      dispatch(fetchSearch());
    }
  };

  return (
    <div className="searchBarWrapper">
      <form className="searchForm" onSubmit={handleOnSubmit}>
        <div className="searchBar-inputWrapper">
          <input
            className="input"
            type="text"
            name="text"
            placeholder="Search for artist or song"
            value={searchText}
            onChange={(e) =>
              dispatch(setSearchInfo("SET_INPUT_TEXT", e.target.value))
            }
          />
          <select
            className="form-select"
            defaultValue={searchMedia}
            onChange={(e) =>
              dispatch(setSearchInfo("SET_INPUT_MEDIA", e.target.value))
            }
          >
            <option value="all">All</option>
            <option value="song">Song</option>
            <option value="album">Album</option>
            <option value="musicArtist">Artist</option>
          </select>
          <button
            className="searchBar-close"
            aria-label="Wyczyść wyszukanie"
            disabled=""
          >
            <span className="searchIconClose">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg css-wpyjus-Icon__svg"
                viewBox="0 0 14 14"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <button className="searchIcon" aria-label="Wyszukaj" type="submit">
          <span
            className="searchIcon__searchIconOpen"
            aria-hidden="true"
            data-component="Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 21 20"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="scale(1 -1) rotate(-45 -11.93502884 -2)"
                stroke="currentColor"
                strokeWidth="1.65"
                fill="none"
                fillRule="evenodd"
              >
                <circle cx="7.70710678" cy="7.70710678" r="7"></circle>
                <path
                  d="M15.2071068 8.62132034h5.6923881"
                  strokeLinecap="square"
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

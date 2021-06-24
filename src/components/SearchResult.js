import { useDispatch, useSelector } from "react-redux";
import {  fetchInfo } from "../redux/actions/tunesActions";

function SearchResult() {
  const { data, loading } = useSelector((state) => state.tunes);
  const data2 = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
    const hendleOnClick=(id,wrapperType,e)=>{
      e.preventDefault();
      dispatch(fetchInfo(wrapperType,id));
  }
  const renderItem =(wrapperType, imgurl,name, id,primaryGenreName ,releaseDate=null,artistName=null,collectionName=null) =>{
    const yr=null
    if(releaseDate){
      const releaseDate2 = new Date(releaseDate);
      const yr = releaseDate2.getFullYear();
    }
    
    return(
      <div className="column" key={id}>
      <div className="cards">
        <div className="card">
          <div className="image">
            {imgurl?<img src={imgurl} alt={name} />:""}
          </div>
          <div className="content-info">
            <div className="info_header">
              <div className="info_type">{wrapperType}</div>
              <div className="info_name"><h2 onClick={(e)=>hendleOnClick(id,wrapperType,e)}>{name}</h2></div>
              <div className="info_music_type">Types: {primaryGenreName} {yr?yr:null}</div>              
              {(wrapperType!= "artist")&&<div className="info_artist">Artist name: {artistName}</div>}
              {wrapperType!= "artist"&&<div className="info_Collection">Collection: {collectionName}</div>}
              </div>
            {/* <div className="header">{name}</div> */}
            <button className="btn btn-success" onClick={(e)=>hendleOnClick(id,wrapperType,e)}>Show More</button>               
          </div>
        </div>
      </div>
    </div>
    )
  }
  const renderItems = () => {
    if (loading) {
      return <div className="loading"><h1 className="loading">Loading</h1></div>;
    }
    return data.results.map((result) => {
      const { wrapperType } = result;
       if (wrapperType === "track") {
        const {
          artworkUrl100: imgurl,
          trackCensoredName: name,
          trackPrice: price,
          trackId: id,
          releaseDate,
          primaryGenreName,
          artistName,
          collectionName
        } = result;
        return (
          renderItem(wrapperType,imgurl,name, id,primaryGenreName ,releaseDate,artistName,collectionName)
        );
      }  else if (wrapperType === "collection") {
        const {
          artworkUrl100: imgurl,
          collectionName: name,
          collectionPrice: price,
          collectionId: id,
          releaseDate,
          primaryGenreName,
          artistName,
          collectionName
        } = result;
        return (
          renderItem(wrapperType,imgurl,name, id,  primaryGenreName ,releaseDate,artistName,collectionName)
        );
      }else if (wrapperType === "artist") {
        const {
          artworkUrl100: imgurl,
          artistName: name,
          artistId: id,
          primaryGenreName,  
          releaseDate ,
          artistName       
        } = result;
                return (
          renderItem(wrapperType,imgurl,name, id,primaryGenreName,releaseDate)
        );
      } else {
        return "";
      }
    });
  };

  return <div className="resultBarWrapper">{renderItems()}</div>;
}

export default SearchResult;

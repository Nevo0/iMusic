import { useDispatch, useSelector } from "react-redux";
import { fetchInfo ,addItemToCard} from "../redux/actions/tunesActions";

function InfoModal() {
  const {
    isOpenModal,
    singleData,
    singleData: {
      results: [firsr, ...collections],
    },
  } = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
 
  const hendleOnClick = (id, wrapperType, e) => {
    e.preventDefault();
    dispatch(fetchInfo(wrapperType, id));
  };

  const getTitle = () => {
    let titel = "";
    let type = "";
    let price = "";
    if (firsr.wrapperType == "collection") {
      titel = firsr.collectionName;
      type = firsr.collectionType;
      price = firsr.collectionPrice;
    } else if (firsr.wrapperType == "artist") {
      titel = firsr.artistName;
      type = firsr.artistType;
      price = null;
    } else if (firsr.wrapperType == "track") {
      titel = firsr.trackName;
      type = firsr.kind;
      price = firsr.trackPrice;
    } else {
      titel = "test";
      type = "test";
    }

    return (
      <div className="modalCard">
        <div className="name">{type}</div>
        <h4 className="modalTitle" id="exampleModalLongTitle">
          {titel}
        </h4>
        {firsr.wrapperType == "artist" ? (
          ""
        ) : (
          <div
            className="artist"
            onClick={(e) => hendleOnClick(firsr.artistId, "artist", e)}
          >
            {firsr.artistName}
          </div>
        )}
        {firsr.wrapperType == "artist" ? (
          ""
        ) : (
          <div className="priceCard">
            <div className="priceText">Price:</div>
            <div className="price">${price}</div>
          </div>
        )}
      </div>
    );
  };

  const getBody = () => {
    let titel = "";
    let type = "";

    return collections.map((el) => {
      const id = el.trackId || el.collectionId;
      console.log(el);

      return (
        <div className="collection-column" key={id}>
          <div className="collection-cards">
            <div className="collection-card">
              <h5 onClick={(e) => hendleOnClick(id, el.wrapperType, e)}>
                {el.trackName || el.collectionName}
              </h5>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="info_modal">
      {/* Button trigger modal  */}

      {/*  Modal  */}

      {/* {isOpenModal?"modal fade show":"modal fade"} */}
      <div
        className={isOpenModal ? "modal fade show" : "modal fade"}
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={isOpenModal ? { display: "block" } : ""}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {getTitle()}

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => handleCloseModal()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                {firsr.wrapperType == "collection" ? "Tack List" : "Albums"}
              </div>
              {getBody()}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => handleCloseModal()}
              >
                Close
              </button>
              {firsr.wrapperType == "artist" ? (
                ""
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => dispatch(addItemToCard(firsr))}>
                  Add to card {firsr.wrapperType}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
// addItemToCard
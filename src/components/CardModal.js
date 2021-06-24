import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../redux/actions/tunesActions";

function CardModal() {
  const {    
    isCardOpenModal,
    cardData
  } = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const hendleOnClick = (id, wrapperType, e) => {
    e.preventDefault();
    dispatch(fetchInfo(wrapperType, id));
  };

  const getBody = () => {
    

    return (
      <div className="modalCard">
        body
      </div>
    );
  };



  return (
    <div className="info_modal">
      {/* Button trigger modal  */}

      {/*  Modal  */}

      {/* {isCardOpenModal?"modal fade show":"modal fade"} */}
      <div
        className={isCardOpenModal ? "modal fade show" : "modal fade"}
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={isCardOpenModal ? { display: "block" } : ""}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              Card

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
                {/* {firsr.wrapperType == "collection" ? "Tack List" : "Albums"} */}
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
              {/* {firsr.wrapperType == "artist" ? (
                ""
              ) : (
                <button type="button" className="btn btn-primary">
                  Add to card {firsr.wrapperType}
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;

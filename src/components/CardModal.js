import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../redux/actions/tunesActions";

function CardModal() {
  const { isCardOpenModal, cardData } = useSelector((state) => state.tunes);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const getBody = () => {
    return (
      <div className="modalCard">
        {cardData.map((item) => {
          // const name = item.name
          return <div>xxx</div>;
        })}
      </div>
    );
  };

  return (
    <div className="info_modal">
      {/* Button trigger modal  */}

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
              <div></div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;

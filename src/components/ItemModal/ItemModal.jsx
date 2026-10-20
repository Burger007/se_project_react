import "./ItemModal.css";
import closeIcon from "../../assets/close button.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  function handleModalClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleDeleteClick() {
    if (onCardDelete) onCardDelete(card);
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleModalClick}
    >
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close icon" className="modal__close-icon" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer"></div>
        <div className="modal__card">
          <h2 className="modal__caption">{card.name}</h2>
          {isOwn && (
            <button
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-btn"
            >
              Delete item
            </button>
          )}
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

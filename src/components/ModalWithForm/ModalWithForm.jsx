import "./ModalWithForm.css";
import closeIcon from "../../assets/close button.svg";
function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  altButtonText,
  onAClick,
}) {
  function handleModalClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleModalClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <div className="modal__buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {altButtonText && (
              <button
                onClick={onAClick}
                type="button"
                className="modal__alt-button"
              >
                {altButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

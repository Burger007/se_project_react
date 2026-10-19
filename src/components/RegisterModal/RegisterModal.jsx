import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../../hooks/useForm";

const RegisterModal = ({ isOpen, OnClose, onRegister, onLoginClick }) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };

  const { values, setValues, HandleChange } = useForm(defaultValues);
};

useEffect(() => {
  if (isOpen) {
    setValues(defaultValues);
  }
}, [isOpen]);

function handleSubmit(e) {
  e.preventDefault();
  onRegister(values);
}

return (
  <ModalWithForm
    title="Sign up"
    name="register"
    buttonText="Sign up"
    altButtonText="Log in"
    onAltButtonClick={onLoginClick}
    isOpen={isOpen}
    onClose={OnClose}
    onSubmit={handleSubmit}
  >
    <label htmlFor="register-email" className="modal__label">
      Email*
      <input
        type="email"
        className="modal__input"
        id="register-email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        required
      />
    </label>

    <label htmlFor="register-password" className="modal__label">
      Password*
      <input
        type="password"
        className="modal__input"
        id="register-password"
        placeholder="Password"
        vlaue={values.password}
        onChange={handleChange}
        required
      />
    </label>

    <label htmlFor="register-name" className="modal__label">
      Name*
      <input
        type="text"
        className="modal__input"
        id="register-name"
        name="name"
        placeholder="Name"
        minLength="2"
        maxLength="30"
        value={values.name}
        onChange={handleChange}
        required
      />
    </label>

    <label htmlFor="register-avatar" className="modal__labeel">
      Avatar Url *
      <input
        type="url"
        className="modal__input"
        id="register-avatar"
        name="avatar"
        placeholder="Avatar Url"
        value={values.avatar}
        onChange={handleChange}
        required
      />
    </label>
  </ModalWithForm>
);

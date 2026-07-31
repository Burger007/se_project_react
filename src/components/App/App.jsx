import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;

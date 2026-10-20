import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar sidebar__avatar_placeholder">
            {currentUser.name?.charAt(0).toUpperCase()}
          </span>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__button"
        onClick={onEditProfileClick}
      >
        Change profile data
      </button>
      <button type="button" className="sidebar__button" onClick={onLogout}>
        Log out
      </button>
    </aside>
  );
}

import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  weatherData,
  onAddClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__text">Your items</p>
        <button onClick={onAddClick} className="clothes-section__add-btn">
          + Add new item
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

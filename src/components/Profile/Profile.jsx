import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  onCardClick,
  weatherData,
  onAddClick,
  onEditProfileClick,
  onCardLike,
  onLogout,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfileClick={onEditProfileClick} onLogout={onLogout} />

      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        weatherData={weatherData}
        onAddClick={onAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}

import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  onCardClick,
  weatherData,
  onAddClick,
  onEditProfileClick,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfileClick={onEditProfileClick} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        weatherData={weatherData}
        onAddClick={onAddClick}
      />
    </section>
  );
}

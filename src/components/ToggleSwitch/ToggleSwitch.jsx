import "./ToggleSwitch.css";
import { useState } from "react";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        className="toggle-switch__checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="toggle-switch__labels">
        <span className="toggle-switch__text toggle-switch__text_F">F</span>
        <span className="toggle-switch__text toggle-switch__text_C">C</span>
      </span>
      <span className="toggle-switch__circle"></span>
    </label>
  );
}

export default ToggleSwitch;

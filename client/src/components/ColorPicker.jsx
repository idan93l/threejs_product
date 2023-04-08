import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = ({setActiveEditorTab}) => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <button className="absolute -top-6 -right-4">X</button>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;

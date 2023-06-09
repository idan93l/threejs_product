import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import state from "../store";

const ColorPicker = ({ setActiveEditorTab }) => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      <motion.div
        className="absolute left-full ml-3"
        {...fadeAnimation}
      >
        <button
          className="absolute -top-7 -right-7 h-6 w-6 flex justify-center items-center rounded-full bg-red-600 text-2xl text-white border-2"
          onClick={() => setActiveEditorTab("")}
        >
          <IoClose />
        </button>
        <SketchPicker
          color={snap.color}
          disableAlpha
          onChange={(color) => (state.color = color.hex)}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorPicker;

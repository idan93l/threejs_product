import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import { IoClose } from "react-icons/io5";
import ScaleLoader from "react-spinners/ScaleLoader";

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
  setActiveEditorTab,
}) => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      <motion.div className="aipicker-container" {...fadeAnimation}>
        <button
          className="absolute -top-7 -right-7 h-6 w-6 flex justify-center items-center rounded-full bg-red-600 text-2xl text-white border-2"
          onClick={() => setActiveEditorTab("")}
        >
          <IoClose />
        </button>
        {generatingImg ? (
          <ScaleLoader
            color={snap.color}
            size={200}
            height={137}
            width={10}
            radius={10}
          />
        ) : (
          <textarea
            placeholder="Ask AI..."
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="aipicker-textarea"
          />
        )}
        <div className="flex flex-wrap gap-3">
          {generatingImg ? (
            <CustomButton
              type="outline"
              title="Asking AI..."
              customStyles="text-xs"
            />
          ) : (
            <>
              <CustomButton
                type="outline"
                title="AI Logo"
                handleClick={() => handleSubmit("logo")}
                customStyles="text-xs"
              />
              <CustomButton
                type="filled"
                title="AI Full"
                handleClick={() => handleSubmit("full")}
                customStyles="text-xs"
              />
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIPicker;

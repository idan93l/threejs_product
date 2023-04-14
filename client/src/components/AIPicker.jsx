import CustomButton from "./CustomButton";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import { IoClose } from "react-icons/io5";

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
  setActiveEditorTab,
}) => {
  return (
    <AnimatePresence>
      <div className="aipicker-container ">
        <button
          className="absolute -top-7 -right-7 h-6 w-6 flex justify-center items-center rounded-full bg-red-600 text-2xl text-white border-2"
          onClick={() => setActiveEditorTab("")}
        >
          <IoClose />
        </button>
        <textarea
          placeholder="Ask AI..."
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="aipicker-textarea"
        />
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
      </div>
    </AnimatePresence>
  );
};

export default AIPicker;

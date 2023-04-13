import CustomButton from "./CustomButton";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../config/motion";
import { IoClose } from "react-icons/io5";

const FilePicker = ({ file, setFile, readFile, setActiveEditorTab }) => {
  return (
    <AnimatePresence>
      <motion.div className="filepicker-container" {...fadeAnimation}>
        <button
          className="absolute -top-7 -right-7 h-6 w-6 flex justify-center items-center rounded-full bg-red-600 text-2xl text-white border-2"
          onClick={() => setActiveEditorTab("")}
        >
          <IoClose />
        </button>
        <div className="flex-1 flex flex-col">
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file-upload" className="filepicker-label">
            Upload File
          </label>
          <p className="mt-2 text-grey-500 text-xs truncate">
            {file === "" ? "No file selected" : file.name}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile("logo")}
            customStyles="text-xs"
          />
          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customStyles="text-xs"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FilePicker;

import Style from "../css/components/addcounter.module.css"

import { PlusCircle } from "@phosphor-icons/react";
import AddCounterModal from "./AddCounterModal";

import { useState } from "react";

const AddCounter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return <div className={Style.card}>
    <PlusCircle onClick={() => {setIsModalOpen(true)}} size={32} color="#fcfcfc" />
    <AddCounterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
  </div>;
};

export default AddCounter;

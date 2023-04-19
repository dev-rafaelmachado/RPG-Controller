import Style from "../css/components/counter.module.css";

import ReactModal from "react-modal";
import { useState } from "react";

const CounterModal = ({ isOpen, onClose, updateNumberLong }) => {
  const [value, setValue] = useState();

  const handleSubmit = () => {
    updateNumberLong(value);
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={Style.modal}
      overlayClassName={Style.overlay}
      ariaHideApp={false}
    >
      <input
        className={Style.input}
        placeholder="Valor"
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </ReactModal>
  );
};

export default CounterModal;

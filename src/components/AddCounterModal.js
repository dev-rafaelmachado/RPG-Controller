import Style from "../css/components/addcounter.module.css";

import ReactModal from "react-modal";
import { useState } from "react";
import { useContext } from "react";
import { CountersContext } from "../contexts/CountersContext";

const colorOptions = [
  { label: "Verde", value: "#075E00" },
  { label: "Azul", value: "#024DBC" },
  { label: "Laranja", value: "#BA9102" },
  { label: "Vermelho", value: "#B71F0B" },
];

const AddCounterModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [color, setColor] = useState(colorOptions[0].value);
  const [isRestorable, setIsRestorable] = useState(false);

  const { addCounter } = useContext(CountersContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCounter = {
      id: Date.now(),
      title: title,
      initialValue: parseInt(initialValue),
      value: parseInt(initialValue),
      color: color,
      isRest: isRestorable,
    };

    addCounter(newCounter);

    setTitle("");
    setInitialValue("");
    setColor(colorOptions[0].value);
    setIsRestorable(false);

    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={Style.modal}
      overlayClassName={Style.overlay}
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={Style.input}
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          className={Style.input}
          placeholder="Valor Inicial"
          value={initialValue}
          onChange={(event) => setInitialValue(event.target.value)}
        />
        <select
          className={Style.input}
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Cores: ##075E00, #024DBC, #BA9102, #B71F0B */}
        <span>É restaurável quando descança?</span>
        <input
          type="checkbox"
          placeholder=""
          checked={isRestorable}
          onChange={(event) => setIsRestorable(event.target.checked)}
        />
        {/* Checkbox */}
        <button type="submit">Adicionar</button>
      </form>
    </ReactModal>
  );
};

export default AddCounterModal;

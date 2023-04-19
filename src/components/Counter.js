import Style from "../css/components/counter.module.css";

import {
  Plus,
  Minus,
  ArrowsCounterClockwise,
  TrashSimple,
} from "@phosphor-icons/react";
import CounterModal from "./CounterModal";

import { useState } from "react";
import { useContext } from "react";
import { CountersContext } from "../contexts/CountersContext";

const Counter = ({ id, title, initial, value, color }) => {
  const [number, setNumber] = useState(value);
  const [operation, setOperation] = useState(-1);
  const [longPressTimeout, setLongPressTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { removeCounter, updateCounter } = useContext(CountersContext);

  const handleMouseDown = (oper) => {
    setLongPressTimeout(
      setTimeout(() => {
        setOperation(oper);
        setIsModalOpen(true);
      }, 1000)
    ); // timeout de 1 segundo para detectar o long press
  };
  const handleMouseUp = () => {
    clearTimeout(longPressTimeout);
  };

  const updateNumberLong = (value) => {
    updateCounter(id, number + operation * value);
    setNumber(number + operation * value);
  };

  return (
    <div className={Style.card} style={{ background: color }}>
      <h2>{title} </h2>
      <h1>{number}</h1>

      <ArrowsCounterClockwise
        className={Style.reload}
        onClick={() => {
          updateCounter(id, initial);
          setNumber(initial);
        }}
        size={36}
        color="#fcfcfc"
      />

      <TrashSimple
        onClick={() => {
          removeCounter(id);
        }}
        className={Style.trash}
        size={36}
        color="#fcfcfc"
      />

      <div>
        <span
          onMouseDown={() => {
            handleMouseDown(-1);
          }}
          onMouseUp={handleMouseUp}
          onClick={() => {
            updateCounter(id, number - 1);
            setNumber(number - 1);
          }}
        >
          <Minus size={64} color="#fafafa" />
        </span>
        <span
          onMouseDown={() => {
            handleMouseDown(1);
          }}
          onMouseUp={handleMouseUp}
          onClick={() => {
            updateCounter(id, number + 1);
            setNumber(number + 1);
          }}
        >
          <Plus size={64} color="#fafafa" />
        </span>
      </div>
      <CounterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        updateNumberLong={updateNumberLong}
      />
    </div>
  );
};

export default Counter;

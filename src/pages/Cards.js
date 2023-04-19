import Counter from "../components/Counter";
import AddCounter from "../components/AddCounter.js";
import Sleep from "../components/Sleep";

import useCounters from "../Hooks/useCounters";

import Style from "../css/pages/cards.module.css";

const Cards = () => {
  const { counters } = useCounters();
  console.log("Cards", counters);

  return (
    <div className={Style.cards}>
      {counters.map((item) => (
        <Counter
          key={item.id}
          id={item.id}
          title={item.title}
          initial={item.initialValue}
          value={item.value}
          color={item.color}
        />
      ))}
      <AddCounter />
      <Sleep />
    </div>
  );
};

export default Cards;

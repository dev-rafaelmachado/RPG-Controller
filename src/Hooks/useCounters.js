import { useEffect, useState } from "react";
import { db } from "../services/database";

const useCounters = () => {
  const [counters, setCounters] = useState([]);
  console.log("Hook", counters);

  const addCounter = async (newCounter) => {
    try {
      await db.cards.add(newCounter);
      setCounters((prevState) => [...prevState, newCounter]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeCounter = async (idToRemove) => {
    try {
      await db.cards.delete(idToRemove);
      setCounters(counters.filter((counter) => counter.id !== idToRemove));
    } catch (error) {
      console.error(error);
    }
  };

  const updateCounter = async (idToUpdate, newValue) => {
    try {
      await db.cards.update(idToUpdate, { value: newValue });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      db.cards.toArray().then((cards) => {
        setCounters(cards);
      });
    };
    loadData();
  }, []);

  return {
    counters,
    addCounter,
    removeCounter,
    updateCounter,
  };
};

export default useCounters;

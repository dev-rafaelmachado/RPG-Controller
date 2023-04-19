import React, { createContext, useState, useEffect } from "react";
import { db } from "../services/database";

const CountersContext = createContext();

const CountersProvider = ({ children }) => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      db.cards.toArray().then((cards) => {
        setCounters(cards);
      });
    };
    loadData();
  }, []);

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

  return (
    <CountersContext.Provider
      value={{ counters, addCounter, removeCounter, updateCounter }}
    >
      {children}
    </CountersContext.Provider>
  );
};

export { CountersContext, CountersProvider };

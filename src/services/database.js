import Dexie from "dexie";

export const db = new Dexie("MyDatabase");

db.version(2).stores({
  cards: "id, title, initialValue, value, color, isRest",
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const people = [
  { id: 1, name: "Chimamanda Adichie", number: "437-231-2398" },
  { id: 2, name: "Chinua Achebe", number: "416-345-8890" },
  { id: 3, name: "Wole Soyinka", number: "204-299-4587" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App listOfPeople={people} />
  </React.StrictMode>
);

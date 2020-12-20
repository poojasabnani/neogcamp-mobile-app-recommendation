import React, { useState } from "react";
import "./styles.css";

var mobileApps = {
  Educational: [
    { name: "Duolingo", rating: "4.8/5" },
    { name: "Babble", rating: "3.2/5" },
    { name: "Buzzfeed", rating: "4/5" }
  ],
  Productivity: [
    { name: "Trello", rating: "4/5" },
    { name: "Focus To-do", rating: "4.5/5" },
    { name: "Pomodoro", rating: "4.2/5" }
  ],
  Social: [
    { name: "Whatsapp", rating: "4.6/5" },
    { name: "Instagram", rating: "4/5" },
    { name: "Facebook", rating: "3.8/5" }
  ],
  Games: [
    { name: "Subway Surfer", rating: "3.9/5" },
    { name: "Sudoku", rating: "4.1/5" },
    { name: "Among Us", rating: "4.3/5" }
  ]
};

export default function App() {
  var [selectedCategoryItem, setCategoryItem] = useState("Educational");
  var mobileAppArray = Object.keys(mobileApps);
  function categoryClickHandler(mobileAppCategory) {
    setCategoryItem(mobileAppCategory);
  }
  return (
    <div className="App">
      <h1>📱 Mobile Apps</h1>
      <div id="container">
        <h4>Select a category to view recommendations</h4>
        {mobileAppArray.map((mobileApp) => {
          return (
            <button
              key={mobileApp}
              onClick={() => categoryClickHandler(mobileApp)}
            >
              {mobileApp}
            </button>
          );
        })}
        <ul>
          {mobileApps[selectedCategoryItem].map((app) => (
            <li id="listItem" key={app.name}>
              <div id="name">{app.name}</div>{" "}
              <div id="rating">{app.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./App.scss";

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const earth = new WE.map("earth_div");
    WE.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors"
      }
    ).addTo(earth);
  }

  render() {
    return (
      <div className="index">
        <div id="earth_div" className="earth"></div>
      </div>
    );
  }
}

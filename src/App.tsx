import React from "react";
import "./App.css";
import teamsJson from "./teams.json";

interface TeamsProp {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

class Team extends React.Component<TeamsProp> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsJson.teams.map((teamNum) => (
        <Team key={teamNum.tid} {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <br></br>
      <TeamList />
    </div>
  );
}

export default App;

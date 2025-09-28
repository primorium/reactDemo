import { useState } from "react";
import './App.css';
import profiles from "./data";
import ProfileList from "./ProfileList";
import ProfileDetail from "./ProfileDetail.js";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profile = profiles.find((p) => p.id === selectedProfile);

  return (
    <main>
      {selectedProfile === null ? (
        <ProfileList profiles={profiles} onSelect={setSelectedProfile} />
      ) : (
        <ProfileDetail profile={profile} onBack={() => setSelectedProfile(null)} />
      )}
    </main>
  );
}

export default App;
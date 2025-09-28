import ProfileCard from "./ProfileCard";

function ProfileList({profiles, onSelect}) {
  return (
    <section>
      <h1>User Profiles</h1>
      {profiles.map((profile) => (
        <ProfileCard 
          key={profile.id} 
          id={profile.id}
          profilePic={profile.profilePic}
          name={profile.name}
          job={profile.job}
          onSelect={onSelect} 
        />
      ))}
    </section>
  );
}

export default ProfileList;
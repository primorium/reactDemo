function ProfileCard({id, profilePic, name, job, onSelect}) {
  return (
    <article onClick={() => onSelect(id)}>
      <img src={profilePic} alt={`${name}'s profile picture`}/>
      <h2>{name}</h2>
      <h4>{job}</h4>
    </article>
  );
}

export default ProfileCard;
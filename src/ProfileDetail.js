function ProfileDetail({profile, onBack}) {
  return (
    <section>
      <button onClick={onBack}>← Back</button>
      <h2>{profile.name}</h2>
      <p><strong>Job:</strong> {profile.job}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </section>
  );
}

export default ProfileDetail;
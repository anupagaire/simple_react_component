import './css/style.css';

import ProfilePic from './components/profilepic';

import Button from './components/button';

const ProfileCard= ({bio,skills}) => {
  return (
    <div className='personal_profile_card'>
      <p style={{textAlign:'center', fontSize: '28px',fontWeight:'bold'}}>Anupa Gaire</p>
      <ProfilePic/>
      <p className="bio">{bio}</p>
<div className='skills'>
    <h3>Skills</h3><br/>
  <ul>
    {skills.map((skill, index) => (
      <li className="skills_list" key={index}>
        {skill}
      </li>
    ))}
  </ul>
  </div>

<Button/>
      
    </div>
  )
}


export default ProfileCard;

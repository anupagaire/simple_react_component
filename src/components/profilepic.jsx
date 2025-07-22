import '../css/style.css';

import profilepic from '../image/profile.jpg';

const ProfilePic =() =>{
     return(
        <div>
           <img src={profilepic} className="pp_img"alt='profile pic'></img>

            </div>
    );
};
export default ProfilePic;
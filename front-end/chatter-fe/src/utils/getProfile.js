import Profile_1 from '../assets/profile/profile_1.png';
import Profile_2 from '../assets/profile/profile_2.png';
import Profile_3 from '../assets/profile/profile_3.png';
import Profile_4 from '../assets/profile/profile_4.png';
import Profile_5 from '../assets/profile/profile_5.png';
import Profile_6 from '../assets/profile/profile_6.png';
import Profile_7 from '../assets/profile/profile_7.png';
import Profile_8 from '../assets/profile/profile_8.png';
import Profile_9 from '../assets/profile/profile_9.png';
import Profile_10 from '../assets/profile/profile_10.png';

const AllProfile = [
  Profile_1,
  Profile_2,
  Profile_3,
  Profile_4,
  Profile_5,
  Profile_6,
  Profile_7,
  Profile_8,
  Profile_9,
  Profile_10,
];

export const getProfile = (idx) => {
  return AllProfile[idx - 1];
};

export const getProfileIdx = (members, userId) => {
  return members.filter((member) => member.userId === userId)[0].userProfile;
};

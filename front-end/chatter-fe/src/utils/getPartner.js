export const getPartner = (roomName, myId) => {
  const whoAmI = roomName.split('_');
  return whoAmI[0] === myId ? whoAmI[1] : whoAmI[0];
};

export const getPartnerInfo = (members, partnerId) => {
  for (let member of members) {
    if (member.userId === partnerId) {
      return member;
    }
  }
  return null;
};

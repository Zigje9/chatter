const getSpecificChatLog = (arr, roomName) => {
  return arr.filter((room) => room.hasOwnProperty(roomName));
};

export default getSpecificChatLog;

export const getUsers = async page => {
  const users = await (
    await fetch(`https://randomuser.me/api/?page=$%7Bpage%7D&results=50`)
  ).json();
  return users.results;
};
const users = [
  {
    email: "imamanraj87@gmail.com",
    password: "password",
  },
  {
    email: "amanrajxlr8@gmail.com",
    password: "password",
  },
  {
    email: "amanraj2k25@gmail.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};

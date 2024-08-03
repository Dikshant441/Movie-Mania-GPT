const isValidEmail = (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
const isValidPassword = (password) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
const isValidName = (name) => /^[A-Za-z\s]{2,}$/.test(name); // At least 2 characters, alphabetic and spaces only

export const fullValidationSignUp = (name, email, password) => {
  if (!name.trim()) return "Name field cannot be empty";
  if (!isValidName(name)) return "Enter a valid name (at least 2 characters, alphabetic and spaces only)";
  
  if (!email.trim()) return "Email field cannot be empty";
  if (!isValidEmail(email)) return "Email ID is not valid";
  
  if (!password.trim()) return "Password field cannot be empty";
  if (!isValidPassword(password)) return "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";

  return null;
};

export const fullValidationSignIn = (email, password) => {
  if (!email.trim()) return "Email field cannot be empty";
  if (!isValidEmail(email)) return "Email ID is not valid";
  
  if (!password.trim()) return "Password field cannot be empty";
  if (!isValidPassword(password)) return "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";

  return null;
};

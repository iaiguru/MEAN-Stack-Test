const validator = require("validator");

function validateName(name) {
  if (name.length <= 0) return "Required";

  const regex = /^[a-zA-Z ]*$/;
  if (!regex.test(name)) return "Invalid pattern";

  return "";
}

function validateEmail(email) {
  if (!validator.isEmail(email)) return "Invalid";

  return "";
}

function validateRole(role) {
  if (role.length <= 0) return "Required";
  return "";
}

module.exports = (req, res, next) => {
  const { firstName, lastName, email, role } = req.body;

  let firstNameError = validateName(firstName);
  let lastNameError = validateName(lastName);
  let emailError = validateEmail(email);
  let roleError = validateRole(role);

  if (
    firstNameError === "" &&
    lastNameError === "" &&
    emailError === "" &&
    roleError === ""
  ) {
    next();
  } else {
    res.status(422).send({
      valid: false,
      errors: {
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        role: roleError,
      },
    });
  }
};

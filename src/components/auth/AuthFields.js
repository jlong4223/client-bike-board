export const loginFields = [
  {
    name: "email",
    type: "text",
    label: "Enter your Email",
    placeholder: "Enter your Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Enter your Password",
    placeholder: "Enter your Password",
    required: true,
  },
];

export const registerFields = [
  ...loginFields,
  {
    name: "name",
    type: "text",
    label: "Enter your Name",
    placeholder: "Enter your Name",
    required: true,
  },
];

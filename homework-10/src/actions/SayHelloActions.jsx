//! imenuvame tip na akcii so golemi bukvi i razdeleni so dolna crta

//? kreator na akcija
export const sayHello = () => {
  return {
    type: "SAY_HELLO", //? tip na akcija
    payload: "Hi and welcome to my First Redux App", //? akcija
  };
};

export const sayGoodbye = () => {
  return {
    type: "SAY_GOODBYE",
    payload: "Have a nice evening, goodbye!",
  };
};

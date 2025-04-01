export default (json) => {
  return json.map(({ nombre, apellido, apellido2 }) => {

    const name = nombre.substring(0, 1).toUpperCase() + nombre.substring(1).toLowerCase();
    const lastName = apellido.substring(0, 1).toUpperCase() + apellido.substring(1).toLowerCase();

    let secondLastName = apellido2 ?? "";
    secondLastName = secondLastName.substring(0, 1).toUpperCase() + secondLastName?.substring(1).toLowerCase();

    return `${name} ${lastName} ${secondLastName}`
  });
};

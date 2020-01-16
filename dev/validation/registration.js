export function validNameEmail(data, list) {
  if(JSON.stringify(list)=='{}'){
    return { name: "no", value: "" };
  }
  for (let key in list) {
    if (list[key].name === data.name) {
      return { name: "name", value: data.name };
    }else if (list[key].email === data.email) {
      return { name: "email", value: data.email };
    }
  }
  return { name: "no", value: "" };
}

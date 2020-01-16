export function validNameEmail(data, list) {
  for (let key in list) {
    if (list[key].email === data.email && list[key].password === data.password)
      return { id: list[key].id, exist: true };
  };
  return { id: null, exist: false };
}

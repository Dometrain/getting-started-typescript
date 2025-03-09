// Fetch returns a Promise<any>
async function getUserById(id: number) {
  const resp = await fetch("http://example.com/user/1");
  return resp.json();
}

let user = getUserById(1);

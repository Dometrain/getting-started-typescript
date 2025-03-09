// Specifying return type of unknown instead of any
async function getUserAge(id: number): Promise<unknown> {
  const resp = await fetch("http://example.com/user/" + id);
  return resp.json();
}

function isOldEnoughToVote(age: number): boolean {
  return age >= 18;
}

async function process() {
  const age = await getUserAge(1);
  // Must narrow type before using
  if (typeof age === "number") {
    console.log(isOldEnoughToVote(age));
  }
}

interface Contact {
  id: number;
  name: string;
}

function clone(source: Contact): Contact {
  return { ...source };
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);

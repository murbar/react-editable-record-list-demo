import faker from 'faker';

const makeRecord = () => ({
  name: faker.name.findName()
});

export default function(n) {
  const arr = [...Array(n)];
  return arr.map(_ => makeRecord());
}

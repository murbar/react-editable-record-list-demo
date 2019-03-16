import faker from 'faker';

const makeRecord = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  email: faker.internet.email()
});

export default function(n) {
  const arr = [...Array(n)];
  return arr.map(_ => makeRecord());
}

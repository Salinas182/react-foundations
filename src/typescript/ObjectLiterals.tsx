interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: 'John',
    age: 35,
    address: {
      country: 'Spain',
      houseNo: 3
    },
    lastName: 'Doe'
  }
  return (
    <>
      <h3>Object Literals</h3>
      <pre>
        { JSON.stringify(person, null, 2) }
      </pre>
    </>
  )
}

enum Role { ADMIN = 1, EDITOR };

type Person = {
    name: string;
    age: number;
    hobbies: string[]; // array type
    role: Role; // enum type
    // role: 1 | 2 // literal type
    group: [number, string]; // Tuple
};

const person: Person = {
    name: 'Sithu',
    age: 18,
    hobbies: ['Drawing', 'Coding'],
    role: Role.ADMIN,
    group: [1, 'General'],
};

console.log(person.group);
person.group[1] = 'Member';

export default person;

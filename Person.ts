enum Role { ADMIN = 1, EDITOR };

type Person = {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
    // role: 1 | 2 // literal type
};

const person: Person = {
    name: 'Sithu',
    age: 18,
    hobbies: ['Drawing', 'Coding'],
    role: Role.ADMIN
};

export default person

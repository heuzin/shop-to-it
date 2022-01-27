import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Matheus Silva',
        email: 'msilvaqs@outlook.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@outlook.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@outlook.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;

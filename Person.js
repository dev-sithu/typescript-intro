"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["EDITOR"] = 2] = "EDITOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Sithu',
    age: 18,
    hobbies: ['Drawing', 'Coding'],
    role: Role.ADMIN
};
exports.default = person;

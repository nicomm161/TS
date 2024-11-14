"use strict";
// Enums & Objects
// Definición de un Enum llamado 'Roles'
var Roles;
(function (Roles) {
    // Los valores del Enum son constantes y representan diferentes roles de usuario
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
// Imprimir el valor del Enum 'User' en la consola
console.log(Roles.User); // Salida: 'USER'
// Definición de un objeto llamado 'roles'
const roles = {
    // Las propiedades del objeto representan diferentes roles de usuario con valores numéricos
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
// Imprimir el valor de la propiedad 'User' del objeto 'roles' en la consola
console.log(roles.User); // Salida: 0

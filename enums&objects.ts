// Enums & Objects

// Definición de un Enum llamado 'Roles'
enum Roles {
    // Los valores del Enum son constantes y representan diferentes roles de usuario
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}

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

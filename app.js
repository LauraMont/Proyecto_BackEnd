/* 
    1) Declarar una clase Usuario
    2) Hacer que Usuario cuente con los siguientes atributos:
        nombre: String
        apellido: String
        libros: Object[]
        mascotas: String[]
        Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
    3) Hacer que Usuario cuente con los siguientes métodos:
        getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
        addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
        countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
        addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
        getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
*/
class Usuario{
    constructor(nombre, apellido ,libros ,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros]
        this.mascotas =[...mascotas]
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombreLibro, autor){
        this.libros.push({ nombre: nombreLibro, autor: autor })
    }
    getBookNames(){
        return this.libros.map((element)=>element.nombre)
    }
}

let user1 = new Usuario("carlos", "garcia" ,{nombre: "El principito\n" ,autor:"Antoine de Saint-Exupéry"},["Sam","Scott"])

console.log( `\nNombre de usuario: ${user1.getFullName()}\n\nCantidad de mascotas antes: ${user1.countMascotas()}\n`)

user1.addMascota("Betty")

console.log( `Cantidad de mascotas actualmente: ${user1.countMascotas()}\n`)
console.log(`lista de libros antes :\n${user1.getBookNames()}`)

user1.addBook("Almendra", "Won-pyung Sohn")

console.log(`lista de libros actualmente :\n${user1.getBookNames()}\n`)

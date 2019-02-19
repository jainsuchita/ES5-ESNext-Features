const person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 54, //made up
}

const { firstName: name, age } = person;

console.log(name + age);

// *********************************************

const a = [1, 2, 3, 4, 5]

// This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array a:

// const [first, second, , , fifth] = a

const [i, j, , k, l] = a;

console.log(i, j, k, l);

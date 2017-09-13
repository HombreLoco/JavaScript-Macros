var a = (x$7222 => x$7222 + 10)(10);
var b = (x$7223 => x$7223 * 4)(10);
console.log(a);
console.log(b);
var people = [
    {
        name: 'Cruton',
        cats: 0
    },
    {
        name: 'Ricklon',
        cats: 3
    },
    {
        name: 'Trudy',
        cats: 6
    },
    {
        name: 'Moo',
        cats: 20
    },
    {
        name: 'Troy',
        cats: 9
    },
    {
        name: 'Bilbo',
        cats: 1
    }
];
var filteredPeople = (p$7224 => (p$7225 => (p$7226 => p$7226.forEach(person$7227 => console.log(person$7227.name + ' ' + person$7227.cats)))(p$7225.map(person$7228 => ({
    name: person$7228.name,
    cats: person$7228.cats + 50
}))))(p$7224.filter(p$7229 => p$7229.cats < 7)))(people);
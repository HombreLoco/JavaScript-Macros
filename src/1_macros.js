// macro sayHi {

// rule {} => {console.log('hi mars')}

// }

// sayHi


// macro unless {
//   rule infix {return $lhs:expr | $rhs:expr} => {
//     if (!($rhs)) {
//       return $lhs
//     }
//   }
// }


// function over9000(x) {
//   return true unless x < 9000
// }


//var x = over9000(10000)




operator (|>) 1 left {
  $lhs, $rhs
} => #{ $rhs($lhs)}

var a = 10 |> (x) => x + 10
var b = 10 |> (x) => x * 4

console.log(a);
console.log(b);


var people = [
  {name: "Cruton", cats: 0},
  {name: "Ricklon", cats: 3},
  {name: "Trudy", cats: 6},
  {name: "Moo", cats: 20},
  {name: "Troy", cats: 9},
  {name: "Bilbo", cats: 1}
]

var filteredPeople = people 

|> (p) => p.filter(p => p.cats < 7)
|> (p) => p.map(person => ({
  name: person.name, cats: person.cats + 50}))
|> (p) => p.forEach(person => console.log(person.name + " " + person.cats))
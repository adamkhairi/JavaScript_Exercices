// ARRAY 1
const texasss = [
	{
		name: 'Mike',
		age: 23,
		gender: 'm',
		us: false,
	},
	{
		name: 'Liz',
		age: 20,
		gender: 'f',
		us: true,
	},
	{
		name: 'Chris',
		age: 102,
		gender: 'm',
		us: true,
	},
	{
		name: 'Chuloo',
		age: 27,
		gender: 'm',
		us: false,
	},
	{
		name: 'Annie',
		age: 30,
		gender: 'f',
		us: true,
	},
]

// Part 1 - Find all users older than 24
let older, step1;
step1 = document.getElementById('a1step1');
older = () => {
	for (let i = 0; i < texasss.length; i++) {
		if (texasss[i].age > 24) {
			console.log(texasss[i])
			step1.innerHTML += texasss[i].name + ', ' + texasss[i].age + ', ' + texasss[i].gender + ', ' + texasss[i].us + '<br>';
		}
	}
}
older();

// Part 2 - Find the total age of all users
let totalAge, sum, step2;
step2 = document.getElementById('a1step2');
sum = 0
totalAge = () => {
	for (let i = 0; i < texasss.length; i++) {
		sum += texasss[i].age;
	}
	console.log(sum);
	step2.innerHTML += `<h4> ${sum} </h4>`
	
};
totalAge();

// Part 3 - List all female coders
let female, step3;
step3 = document.getElementById('a1step3')
female = () => {
	for (let i = 0; i < texasss.length; i++) {
		if (texasss[i].gender === "f") {
			console.log(texasss[i]);
			step3.innerHTML += texasss[i].name + ', ' + texasss[i].age + ', ' + texasss[i].gender + ', ' + texasss[i].us + '<br>';
			
		}
	}
}
female();

// ARRAY 2
const newieyork = [
	{
		name: 'Michelle',
		age: 19,
		coder: true,
		gender: 'f',
		us: true,
	},
	{
		name: 'Sam',
		age: 25,
		coder: false,
		gender: 'm',
		us: false,
	},
	{
		name: 'Ivy',
		age: 26,
		coder: true,
		gender: 'f',
		us: false,
	},
	{
		name: 'Nick',
		age: 32,
		coder: true,
		gender: 'm',
		us: true,
	},
	{
		name: 'Jim Beglin',
		age: 65,
		coder: false,
		gender: 'm',
		us: true,
	},
]

// Part 1 - List all users in US in ascending order
let order, a2step1;
a2step1 = document.getElementById('a2step1');
order = () => {
	//Step_1 Creating function for compare By name
	function compare(a, b) {
		const name1 = a.name.toUpperCase();
		const name2 = b.name.toUpperCase();
		let comp;
		if (name1 > name2) {
			comp = 1;
		} else if (name1 < name2) {
			comp = -1;
		}
		return comp;
	}
	//Step_2 Get US users list
	let us_user;
	us_user = [];
	for (let i = 0; i < newieyork.length; i++) {
		if (newieyork[i].us) {
			us_user.push(newieyork[i])
			
		}
	}
	
	//Step_3 Using Function to Sort the list
	us_user.sort(compare);
	 // Print the list
	console.log(us_user);
	for (let i = 0; i <us_user.length ; i++) {
		a2step1.innerHTML += us_user[i].name + ', ' + us_user[i].age + ', ' + us_user[i].coder + ', ' + us_user[i].gender + ', ' + us_user[i].us + '<br>';
	}
}
order();


// Part 2 - Sort all users by age

let ageOrder, a2step2;
a2step2 = document.getElementById('a2step2');
ageOrder = ()=>{
	function compare(a, b) {
		const age1 = a.age;
		const age2 = b.age;
		let comp;
		if (age1 > age2) {
			comp = 1;
		} else if (age1 < age2) {
			comp = -1;
		}
		return comp;
	}
	newieyork.sort(compare);
	// Print the list
	console.log(newieyork);
	for (let i = 0; i <newieyork.length ; i++) {
		a2step2.innerHTML += newieyork[i].name + ', ' + newieyork[i].age + ', ' + newieyork[i].coder + ', ' + newieyork[i].gender + ', ' + newieyork[i].us + '<br>';
	}
	
}
ageOrder();

// Part 3 -  List all female coders
let femalemcoder, a2step3;
a2step3 = document.getElementById('a2step3');
femalemcoder = () =>{
	for (let i = 0; i <newieyork.length ; i++) {
		if (newieyork[i].gender === "f" && newieyork[i].coder){
			console.log(newieyork[i]);
			a2step3.innerHTML += newieyork[i].name + ', ' + newieyork[i].age + ', ' + newieyork[i].coder + ', ' + newieyork[i].gender + ', ' + newieyork[i].us + '<br>';
			
		}
	}
}
femalemcoder();


// ARRAY 3
const vegzas = [
	{
		name: 'Charly',
		age: 32,
		coder: true,
		gender: 'm',
	},
	{
		name: 'Law',
		age: 21,
		coder: true,
		gender: 'm',
	},
	{
		name: 'Rosey',
		age: 42,
		coder: false,
		gender: 'f',
	},
	{
		name: 'Steph',
		age: 18,
		coder: true,
		gender: 'f'
	},
	{
		name: 'Jon',
		age: 47,
		coder: false,
		gender: 'm',
	},
]

// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
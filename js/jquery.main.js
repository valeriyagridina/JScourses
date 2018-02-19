// task7
function task7(salaries) {

	var averageSalary = 0;

	for (var key in salaries) {
		averageSalary += salaries[key];
	}

	console.log(averageSalary);
}

var salaries = {
	John: 100,
	Bill: 300,
	Mike: 250
};

task7(salaries);

var salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
};

task7(salaries);


//**************************************************//

// task6
var emptyObj = {};
var someObj = {
	name: "tom",
	age: 12
}

function task6(obj) {

	var counter = 0;

	for (var key in obj) {
		counter++;
	}
	// console.log("Всего свойств: " + counter);

	if(counter > 0){
		console.log("false - хоть одно свойство есть");
		return false;
	} else {
		console.log("true - в объекте нет свойств");
		return true;
	}
}

task6(emptyObj);
task6(someObj);

//**************************************************//

// task5
var users = {

	user: [
		{
			name: "John",
			age: 28,
			experience: 1,
			languages: ["Java", "JavaScript", "SQL"]
		}, {
			name: "Bill",
			age: 30,
			experience: 5,
			languages: ["HTML", "CSS", "JavaScript"]
		}, {
			name: "Mike",
			age: 32,
			experience: 4,
			languages: ["Python", "SQL"]
		}
	]
}

console.log(users.user[0]);
console.log(users.user[1].languages[0]);

//**************************************************//

// task4
var mp3 = {
	model: "sony",
	type: "disk",
	play: function() {
		console.log(mp3.model + " is playing");
	},
	stop: function() {
		console.log(mp3.model + " stopped");
	}
}

mp3.play();
mp3.stop();

//**************************************************//

// task3
var tv = {
	currentChannel: 1,
	nextChannel: function(){
		console.log(tv.currentChannel + 1);
	},
	prevChannel: function() {
		console.log(tv.currentChannel - 1);
	},
	setChannel: function(number) {
		console.log(number);
	}
}

tv.nextChannel();
tv.prevChannel();
tv.setChannel(7);
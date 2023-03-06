var hobbies = ["fishing", "hiking", "sewing", "yoga", "baking", "skiing"];
//console.log(hobbies.length);

hobbies.push("dancing");
//console.log(hobbies[2]);
hobbies.pop();
//console.log(hobbies);

hobbies.splice(2, 0, "rock climbing", "skating");
//console.log(hobbies);

hobbies.shift();
//console.log(hobbies);

hobbies.unshift("drawing");
//console.log(hobbies);

var goals = [
  "learning JavaScript",
  "overseas travel in 2023",
  "launching a new career in 2023"
];

var allTheThings = hobbies.concat(goals);
//console.log(allTheThings);

//var middle = allTheThings.indexOf("skiing");
//console.log(middle);

allTheThings.splice(7, 1);
//console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);

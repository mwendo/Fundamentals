// 1.)
console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello);
// hello = "world";

//2.)
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test();
// function test() {
// var needle;
// console.log(needle);
// needle = "magnet"; }


// 3.)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print() {}
// console.log(brendan)
// brendan = "super cool"

// 4.)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food);
// food = "chicken";
// eat()
// function eat() {
// var food = "gone"
// console.log(food)
// food = "gone" }

// 5.)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// this will produce an error saying that mean is not a function

// 6.)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre);
// genre = "undefined"
// var genre = "disco";
// rewind();
// function rewind () {
// genre;
// var genre;
// console.log(genre);
// genre = "rock";
// console.log(genre);
// genre = "r&b";
// console.log(genre);
// genre = "disco";

// 7.)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo;
// console.log(dojo);
// dojo = "san jose";
// learn();
// function learn () {
// dojo;
// var dojo;
// console.log(dojo);
// dojo = "seattle";
// console.log(dojo);
// dojo = "burbank";
// console.log(dojo);
// dojo = "san jose";



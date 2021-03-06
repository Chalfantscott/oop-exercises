$(function(){

function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}
  
Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var sonny = new Person("Sonny", "sonny@gmail.com", "483-485-4948");
var jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

sonny.greet(jordan);
jordan.greet(sonny);

$('h6').append(sonny.email, sonny.phone);
$('p1').append(jordan.name); 

});
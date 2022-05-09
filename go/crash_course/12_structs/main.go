package main

import (
	"fmt"
	"strconv"
)

type Person struct {
	firstName string
	lastName  string
	city      string
	gender    string
	age       int
}

func (person Person) greet() string {
	return "Hello, my name is " + person.firstName + " " + person.lastName + " and I am " + strconv.Itoa(person.age)
}

func main() {
	// person1 := Person{
	// 	firstName: "Samantha",
	// 	lastName:  "Smith",
	// 	city:      "Boston",
	// 	gender:    "f",
	// 	age:       25,
	// }

	person1 := Person{"Samantha", "Smith", "Boston", "f", 5}

	fmt.Println(person1)

	fmt.Println(person1.firstName)
	person1.age++
	fmt.Println(person1.age)

	fmt.Println(person1.greet())
}

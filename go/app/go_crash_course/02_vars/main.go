package main

import "fmt"

func main() {
	// name := "Brad"
	// email := "brad@example.com"
	name, email := "Brad", "brad@example.com"
	var age int32 = 37
	// var isCool = true
	// isCool = false
	var size float32 = 2.4

	fmt.Println(name, age, email)
	fmt.Printf("%T\n", size)
}

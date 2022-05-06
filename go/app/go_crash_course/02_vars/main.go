package main

import "fmt"

func main() {
	var name = "Brad"
	var age int32 = 37
	const isCool = true
	isCool = false

	fmt.Println(name, age)
	fmt.Printf("%T\n", isCool)
}

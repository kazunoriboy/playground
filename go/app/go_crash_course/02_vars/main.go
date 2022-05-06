package main

import "fmt"

func main() {
	name := "Brad"
	var age int32 = 37
	var isCool = true
	isCool = false

	fmt.Println(name, age)
	fmt.Printf("%T\n", isCool)
}

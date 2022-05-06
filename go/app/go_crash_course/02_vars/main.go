package main

import "fmt"

name := "Brad"

func main() {
	var age int32 = 37
	var isCool = true
	isCool = false

	fmt.Println(name, age)
	fmt.Printf("%T\n", isCool)
}

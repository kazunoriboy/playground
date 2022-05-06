package main

import "fmt"

func greeting(name string) string {
	return "Hello " + name
}

func main() {
	fmt.Println(greeting("john"))
}

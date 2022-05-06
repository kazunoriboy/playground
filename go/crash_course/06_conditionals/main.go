package main

import "fmt"

func main() {
	x := 10
	y := 9

	if x <= y {
		fmt.Printf("%d is less than or equal to %d\n", x, y)
	} else {
		fmt.Printf("%d is less than %d\n", y, x)
	}
}

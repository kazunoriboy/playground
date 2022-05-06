package main

import "fmt"

func main() {
	ids := []int{33, 76, 54, 23, 11, 2}

	for i, id := range ids {
		fmt.Printf("%d - iD: %d\n", i, id)
	}

	for _, id := range ids {
		fmt.Printf("ID: %d\n", id)
	}

	sum := 0
	for _, id := range ids {
		sum += id
	}
	fmt.Println("Sum", sum)

	emails := map[string]string{"Bob": "bob@example.com", "Sharon": "sharon@example.com"}

	for k, v := range emails {
		fmt.Printf("%s: %s\n", k, v)
	}

	for k := range emails {
		fmt.Println("Name: " + k)
	}
}

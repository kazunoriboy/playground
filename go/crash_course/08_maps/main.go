package main

import "fmt"

func main() {
	// emails := make(map[string]string)

	// emails["Bob"] = "bob@example.com"
	// emails["Sharon"] = "sharon@example.com"
	// emails["Mike"] = "mike@example.com"

	emails := map[string]string{"Bob": "bob@example.com", "Sharon": "sharon@example.com"}

	fmt.Println(emails)
	fmt.Println(emails["Bob"])
	fmt.Println(len(emails))

	delete(emails, "Bob")
	fmt.Println(emails)
}

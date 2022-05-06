package main

import (
	"fmt"
	"github.com/kazunoriboy/playground/go/crash_course/03_packages/strutil"
	"math"
)

func main() {
	fmt.Println(math.Floor(2.7))
	fmt.Println(math.Ceil(2.7))
	fmt.Println(math.Sqrt(2.7))
	fmt.Println(strutil.Reverse("asbdk"))
}

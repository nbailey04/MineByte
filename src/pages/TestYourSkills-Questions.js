export const TestYourSkills_questions = {
        cpp: {
          general: [
            { question: "What is a pointer in C++?", correctAnswer: "A variable that stores memory addresses", incorrectAnswers: ["A function that returns an address", "A variable that stores a value", "A constant value"] },
            { question: "What does the 'new' keyword do in C++?", correctAnswer: "Allocates memory dynamically", incorrectAnswers: ["Declares a variable", "Deallocates memory", "Creates an object without memory allocation"] },
            { question: "What is a reference variable in C++?", correctAnswer: "An alias for another variable", incorrectAnswers: ["A pointer to a variable", "A constant variable", "A variable with a predefined value"] },
            { question: "Which of the following is correct in C++?", correctAnswer: "int main() { return 0; }", incorrectAnswers: ["function main() { return 0; }", "void main() { return 0; }", "int main { return 0; }"] },
            { question: "Which operator is used to dereference a pointer in C++?", correctAnswer: "*", incorrectAnswers: ["&", "->", "#"] },
            { question: "Which keyword is used to define a constant in C++?", correctAnswer: "const", incorrectAnswers: ["final", "static", "immutable"] },
            { question: "Which of these is a valid C++ container?", correctAnswer: "std::vector", incorrectAnswers: ["std::map", "std::list", "std::set"] },
            { question: "What is a destructor in C++?", correctAnswer: "A method that is called when an object is destroyed", incorrectAnswers: ["A method that is called when an object is created", "A method that allocates memory", "A method that initializes an object"] },
            { question: "Which of the following is correct to create a dynamic array in C++?", correctAnswer: "int* arr = new int[10];", incorrectAnswers: ["int arr[10];", "int arr = new int;", "int* arr = malloc(10);"] },
            { question: "What is the purpose of the 'delete' operator in C++?", correctAnswer: "Deallocates memory", incorrectAnswers: ["Allocates memory", "Frees memory without destroying the object", "Sets memory to null"] }
          ],
          tasks: [
            "Write a program in C++ that outputs 'Hello, World!'",
            "Write a C++ program to check if a number is prime",
            "Write a C++ program that calculates the factorial of a number",
            "Write a C++ program that reverses a string",
            "Write a C++ program that prints the Fibonacci sequence",
            "Write a C++ program that sorts an array of integers",
            "Write a C++ program that finds the largest number in an array",
            "Write a C++ program that checks if a string is a palindrome",
            "Write a C++ program that calculates the sum of digits of a number",
            "Write a C++ program to find the average of an array of numbers"
          ]
        },
        java: {
          general: [
            { question: "What is the main method signature in Java?", correctAnswer: "public static void main(String[] args)", incorrectAnswers: ["public static main(String[] args)", "void main(String[] args)", "public main(String[] args)"] },
            { question: "Which keyword is used to create a new object in Java?", correctAnswer: "new", incorrectAnswers: ["create", "object", "initialize"] },
            { question: "What is the default value of a boolean variable in Java?", correctAnswer: "false", incorrectAnswers: ["true", "0", "null"] },
            { question: "What does the 'final' keyword do in Java?", correctAnswer: "Defines a constant", incorrectAnswers: ["Defines an abstract class", "Defines a static variable", "Defines a constructor"] },
            { question: "Which of the following is correct in Java?", correctAnswer: "int[] arr = new int[5];", incorrectAnswers: ["int arr[5] = new int;", "int arr = new int[5];", "int[] arr = new int();"] },
            { question: "What is the purpose of the 'this' keyword in Java?", correctAnswer: "Refers to the current object", incorrectAnswers: ["Refers to the superclass", "Refers to a method", "Refers to a variable"] },
            { question: "Which method is used to start a thread in Java?", correctAnswer: "start()", incorrectAnswers: ["run()", "begin()", "execute()"] },
            { question: "What is an interface in Java?", correctAnswer: "A reference type, similar to a class, that can contain only constants, method signatures, and default methods", incorrectAnswers: ["A type of class", "A method", "A special type of variable"] },
            { question: "Which of these is a valid Java collection?", correctAnswer: "ArrayList", incorrectAnswers: ["LinkedList", "HashSet", "TreeMap"] },
            { question: "What is the purpose of the 'super' keyword in Java?", correctAnswer: "Refers to the superclass", incorrectAnswers: ["Refers to a subclass", "Refers to the current object", "Refers to a method"] }
          ],
          tasks: [
            "Write a Java program that outputs 'Hello, World!'",
            "Write a Java program that checks if a number is even or odd",
            "Write a Java program that calculates the factorial of a number",
            "Write a Java program that reverses a string",
            "Write a Java program that prints the Fibonacci sequence",
            "Write a Java program that sorts an array of integers",
            "Write a Java program that finds the largest number in an array",
            "Write a Java program that checks if a string is a palindrome",
            "Write a Java program that calculates the sum of digits of a number",
            "Write a Java program to find the average of an array of numbers"
          ]
        },

        python: {
            general: [
            { question: "What is the output of 'print(type([]))' in Python?", correctAnswer: "<class 'list'>", incorrectAnswers: ["<class 'dict'>", "<class 'tuple'>", "<class 'set'>"] },
            { question: "Which keyword is used to define a function in Python?", correctAnswer: "def", incorrectAnswers: ["func", "function", "lambda"] },
            { question: "What is a Python dictionary?", correctAnswer: "A collection of key-value pairs", incorrectAnswers: ["An ordered collection", "A set of unique elements", "A list of tuples"] },
            { question: "Which method is used to add an item to a list in Python?", correctAnswer: "append()", incorrectAnswers: ["add()", "insert()", "extend()"] },
            { question: "What is the output of '3 * 'hello'' in Python?", correctAnswer: "hellohellohello", incorrectAnswers: ["3hello", "Error", "hello3"] },
            { question: "Which of these is not a valid Python data type?", correctAnswer: "tupledict", incorrectAnswers: ["list", "dict", "tuple"] },
            { question: "What does the 'len()' function do in Python?", correctAnswer: "Returns the length of an object", incorrectAnswers: ["Returns the index of an object", "Returns the type of an object", "Returns the value of an object"] },
            { question: "Which of these is a correct way to declare a variable in Python?", correctAnswer: "x = 10", incorrectAnswers: ["int x = 10;", "x := 10", "declare x = 10"] },
            { question: "What is the correct way to write a comment in Python?", correctAnswer: "# This is a comment", incorrectAnswers: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"] },
            { question: "Which of the following is not a Python keyword?", correctAnswer: "switch", incorrectAnswers: ["if", "lambda", "import"] }
            ],
            tasks: [
            "Write a Python program that prints 'Hello, World!'",
            "Write a Python program to check if a number is odd or even",
            "Write a Python program to calculate the factorial of a number",
            "Write a Python program to reverse a string",
            "Write a Python program to print the Fibonacci sequence",
            "Write a Python program to sort a list of integers",
            "Write a Python program to find the largest number in a list",
            "Write a Python program to check if a string is a palindrome",
            "Write a Python program to calculate the sum of digits of a number",
            "Write a Python program to find the average of a list of numbers"
            ]
        },
        javascript: {
            general: [
            { question: "Which of these is used to declare a variable in JavaScript?", correctAnswer: "let", incorrectAnswers: ["varname", "int", "func"] },
            { question: "What is 'null' in JavaScript?", correctAnswer: "An assigned value that represents 'no value'", incorrectAnswers: ["An undefined variable", "A function call", "A boolean value"] },
            { question: "Which method is used to add elements to the end of an array?", correctAnswer: "push()", incorrectAnswers: ["add()", "append()", "concat()"] },
            { question: "What is the output of 'typeof NaN' in JavaScript?", correctAnswer: "'number'", incorrectAnswers: ["'undefined'", "'object'", "'NaN'"] },
            { question: "Which keyword is used to define a constant in JavaScript?", correctAnswer: "const", incorrectAnswers: ["final", "constant", "let"] },
            { question: "What is the purpose of 'isNaN()' in JavaScript?", correctAnswer: "Checks if a value is not a number", incorrectAnswers: ["Checks if a value is a number", "Converts a value to NaN", "Removes NaN from an array"] },
            { question: "How do you create an object in JavaScript?", correctAnswer: "{ key: 'value' }", incorrectAnswers: ["[ 'key', 'value' ]", "new object()", "object.create()"] },
            { question: "What is the use of 'bind()' in JavaScript?", correctAnswer: "Binds a function to a specific object", incorrectAnswers: ["Calls a function immediately", "Defines a new variable", "Creates a new object"] },
            { question: "What is a promise in JavaScript?", correctAnswer: "An object representing the eventual completion or failure of an async operation", incorrectAnswers: ["A data type", "A function callback", "A loop construct"] },
            { question: "Which of these is a JavaScript library?", correctAnswer: "React", incorrectAnswers: ["Spring", "Django", "Angular"] }
            ],
            tasks: [
            "Write a JavaScript program that prints 'Hello, World!' to the console",
            "Write a JavaScript function to check if a number is prime",
            "Write a JavaScript function to calculate the factorial of a number",
            "Write a JavaScript function to reverse a string",
            "Write a JavaScript program to print the Fibonacci sequence",
            "Write a JavaScript program to sort an array of integers",
            "Write a JavaScript program to find the largest number in an array",
            "Write a JavaScript program to check if a string is a palindrome",
            "Write a JavaScript function to calculate the sum of digits of a number",
            "Write a JavaScript function to find the average of an array of numbers"
            ]
        },
        csharp: {
            general: [
            { question: "What is the correct syntax for declaring a variable in C#?", correctAnswer: "int x = 10;", incorrectAnswers: ["let x = 10;", "var x = 10;", "x := 10;"] },
            { question: "What is the output type of a LINQ query?", correctAnswer: "IEnumerable<T>", incorrectAnswers: ["List<T>", "Array<T>", "Dictionary<T>"] },
            { question: "Which method is used to start a thread in C#?", correctAnswer: "Start()", incorrectAnswers: ["Run()", "Execute()", "Begin()"] },
            { question: "What does 'readonly' do in C#?", correctAnswer: "Defines a field that can only be assigned during declaration or in a constructor", incorrectAnswers: ["Defines a static field", "Defines a field that cannot be modified", "Defines a private field"] },
            { question: "What is the purpose of the 'using' directive in C#?", correctAnswer: "Imports namespaces", incorrectAnswers: ["Declares variables", "Manages memory", "Defines a class"] },
            { question: "Which of these is a value type in C#?", correctAnswer: "int", incorrectAnswers: ["string", "object", "dynamic"] },
            { question: "What is boxing in C#?", correctAnswer: "Converting a value type to an object", incorrectAnswers: ["Converting an object to a value type", "Encapsulation", "Inheriting a class"] },
            { question: "What is the default access modifier for class members in C#?", correctAnswer: "private", incorrectAnswers: ["public", "protected", "internal"] },
            { question: "Which keyword is used to handle exceptions in C#?", correctAnswer: "try", incorrectAnswers: ["catch", "throw", "handle"] },
            { question: "Which of these is not a valid data type in C#?", correctAnswer: "tuple", incorrectAnswers: ["string", "bool", "char"] }
            ],
            tasks: [
            "Write a C# program that prints 'Hello, World!' to the console",
            "Write a C# program to check if a number is even or odd",
            "Write a C# program to calculate the factorial of a number",
            "Write a C# program to reverse a string",
            "Write a C# program to print the Fibonacci sequence",
            "Write a C# program to sort an array of integers",
            "Write a C# program to find the largest number in an array",
            "Write a C# program to check if a string is a palindrome",
            "Write a C# program to calculate the sum of digits of a number",
            "Write a C# program to find the average of an array of numbers"
            ]
        },

            
        ruby: {
            general: [
            { question: "What is the default value of an uninitialized variable in Ruby?", correctAnswer: "nil", incorrectAnswers: ["undefined", "0", "false"] },
            { question: "Which keyword is used to define a method in Ruby?", correctAnswer: "def", incorrectAnswers: ["func", "method", "lambda"] },
            { question: "What is the equivalent of 'false' in Ruby?", correctAnswer: "nil", incorrectAnswers: ["0", "'false'", "''"] },
            { question: "Which of these is not a valid Ruby data type?", correctAnswer: "dictionary", incorrectAnswers: ["hash", "array", "string"] },
            { question: "What does 'puts' do in Ruby?", correctAnswer: "Prints to the console with a newline", incorrectAnswers: ["Prints to the console without a newline", "Declares a variable", "Reads input"] },
            { question: "What is the purpose of 'end' in Ruby?", correctAnswer: "Closes blocks of code", incorrectAnswers: ["Declares variables", "Ends loops", "Returns from methods"] },
            { question: "What is a Ruby symbol?", correctAnswer: "An immutable identifier", incorrectAnswers: ["A variable", "A mutable identifier", "A keyword"] },
            { question: "How do you create a string in Ruby?", correctAnswer: '"Hello, World!"', incorrectAnswers: ["'Hello' + 'World'", "`Hello, World!`", "{Hello, World!}"] },
            { question: "What does 'yield' do in Ruby?", correctAnswer: "Executes a block passed to a method", incorrectAnswers: ["Exits a loop", "Defines a new method", "Pauses the execution of code"] },
            { question: "Which of these is a Ruby framework?", correctAnswer: "Rails", incorrectAnswers: ["Django", "React", "Spring"] }
            ],
            tasks: [
            "Write a Ruby program to print 'Hello, World!'",
            "Write a Ruby program to check if a number is odd or even",
            "Write a Ruby program to calculate the factorial of a number",
            "Write a Ruby program to reverse a string",
            "Write a Ruby program to print the Fibonacci sequence",
            "Write a Ruby program to sort an array of integers",
            "Write a Ruby program to find the largest number in an array",
            "Write a Ruby program to check if a string is a palindrome",
            "Write a Ruby program to calculate the sum of digits of a number",
            "Write a Ruby program to find the average of an array of numbers"
            ]
        },
        php: {
            general: [
            { question: "Which tag is used to start PHP code?", correctAnswer: "<?php", incorrectAnswers: ["<php>", "<?>", "<php?"] },
            { question: "What does PHP stand for?", correctAnswer: "Hypertext Preprocessor", incorrectAnswers: ["Pre-Hypertext Processor", "Programming Hyper Processor", "Processor for Hypertext"] },
            { question: "What is the correct way to declare a variable in PHP?", correctAnswer: "$variableName", incorrectAnswers: ["var variableName;", "variableName = value;", "let variableName"] },
            { question: "What is 'echo' used for in PHP?", correctAnswer: "Outputs text", incorrectAnswers: ["Declares variables", "Performs loops", "Defines arrays"] },
            { question: "Which of these is a PHP array function?", correctAnswer: "array_merge()", incorrectAnswers: ["array_create()", "merge_array()", "array_combine()"] },
            { question: "What does 'isset()' do in PHP?", correctAnswer: "Checks if a variable is set and not null", incorrectAnswers: ["Checks if a variable exists", "Checks if a variable is null", "Checks the type of a variable"] },
            { question: "Which of these is not a PHP data type?", correctAnswer: "hashmap", incorrectAnswers: ["array", "integer", "string"] },
            { question: "What is the default file extension for PHP files?", correctAnswer: ".php", incorrectAnswers: [".html", ".php3", ".phtml"] },
            { question: "How do you define a constant in PHP?", correctAnswer: "define('NAME', value)", incorrectAnswers: ["const NAME = value;", "$NAME = value;", "constant(NAME, value);"] },
            { question: "Which of these is a PHP framework?", correctAnswer: "Laravel", incorrectAnswers: ["Spring", "Rails", "Flask"] }
            ],
            tasks: [
            "Write a PHP script to print 'Hello, World!'",
            "Write a PHP script to check if a number is even or odd",
            "Write a PHP script to calculate the factorial of a number",
            "Write a PHP script to reverse a string",
            "Write a PHP script to print the Fibonacci sequence",
            "Write a PHP script to sort an array of integers",
            "Write a PHP script to find the largest number in an array",
            "Write a PHP script to check if a string is a palindrome",
            "Write a PHP script to calculate the sum of digits of a number",
            "Write a PHP script to find the average of an array of numbers"
            ]
        },
        go: {
            general: [
            { question: "What is the keyword to declare a variable in Go?", correctAnswer: "var", incorrectAnswers: ["let", "define", "declare"] },
            { question: "What is the purpose of 'go' in Go?", correctAnswer: "Starts a goroutine", incorrectAnswers: ["Declares a variable", "Performs an operation", "Returns a value"] },
            { question: "Which of these is a valid data type in Go?", correctAnswer: "int32", incorrectAnswers: ["number", "float", "string[]"] },
            { question: "What does 'defer' do in Go?", correctAnswer: "Defers the execution of a function until the surrounding function returns", incorrectAnswers: ["Stops execution", "Defines a new variable", "Calls a function immediately"] },
            { question: "What is the purpose of 'select' in Go?", correctAnswer: "Waits on multiple channel operations", incorrectAnswers: ["Selects a data type", "Performs conditional operations", "Chooses a method"] },
            { question: "Which of these is not a Go keyword?", correctAnswer: "implements", incorrectAnswers: ["package", "func", "import"] },
            { question: "What is the default value of an uninitialized int variable in Go?", correctAnswer: "0", incorrectAnswers: ["null", "undefined", "-1"] },
            { question: "How do you create a slice in Go?", correctAnswer: "Using make()", incorrectAnswers: ["Using append()", "Using new()", "Using alloc()"] },
            { question: "What is the purpose of 'panic()' in Go?", correctAnswer: "Stops normal execution of a program", incorrectAnswers: ["Logs an error", "Retries a function", "Declares an exception"] },
            { question: "What is the default package in Go programs?", correctAnswer: "main", incorrectAnswers: ["go", "default", "package"] }
            ],
            tasks: [
            "Write a Go program that prints 'Hello, World!'",
            "Write a Go program to check if a number is even or odd",
            "Write a Go program to calculate the factorial of a number",
            "Write a Go program to reverse a string",
            "Write a Go program to print the Fibonacci sequence",
            "Write a Go program to sort an array of integers",
            "Write a Go program to find the largest number in an array",
            "Write a Go program to check if a string is a palindrome",
            "Write a Go program to calculate the sum of digits of a number",
            "Write a Go program to find the average of an array of numbers"
            ]
        },
            
        swift: {
            general: [
            { question: "What is the keyword to declare a constant in Swift?", correctAnswer: "let", incorrectAnswers: ["const", "val", "var"] },
            { question: "Which of these is used to declare a variable in Swift?", correctAnswer: "var", incorrectAnswers: ["let", "val", "int"] },
            { question: "How do you define a function in Swift?", correctAnswer: "func", incorrectAnswers: ["function", "def", "define"] },
            { question: "What does 'optionals' mean in Swift?", correctAnswer: "Variables that can have a nil value", incorrectAnswers: ["Variables that cannot change", "Functions without parameters", "Data types without values"] },
            { question: "What is the purpose of 'guard' in Swift?", correctAnswer: "Exits a scope early if a condition is not met", incorrectAnswers: ["Runs a loop", "Catches errors", "Defines a function"] },
            { question: "Which of these is not a valid data type in Swift?", correctAnswer: "doubleInt", incorrectAnswers: ["String", "Int", "Double"] },
            { question: "What is the default value of an uninitialized optional in Swift?", correctAnswer: "nil", incorrectAnswers: ["undefined", "null", "0"] },
            { question: "How do you declare a string in Swift?", correctAnswer: `"Hello, World!"`, incorrectAnswers: ["'Hello, World!'", "`Hello, World!`", "{Hello, World!}"] },
            { question: "What is the main entry point of a Swift program?", correctAnswer: "The main.swift file", incorrectAnswers: ["The init function", "The AppDelegate file", "The index.swift file"] },
            { question: "Which of these is a Swift framework?", correctAnswer: "UIKit", incorrectAnswers: ["React", "Flask", "Hibernate"] }
            ],
            tasks: [
            "Write a Swift program to print 'Hello, World!'",
            "Write a Swift program to check if a number is odd or even",
            "Write a Swift program to calculate the factorial of a number",
            "Write a Swift program to reverse a string",
            "Write a Swift program to print the Fibonacci sequence",
            "Write a Swift program to sort an array of integers",
            "Write a Swift program to find the largest number in an array",
            "Write a Swift program to check if a string is a palindrome",
            "Write a Swift program to calculate the sum of digits of a number",
            "Write a Swift program to find the average of an array of numbers"
            ]
        },
        kotlin: {
            general: [
            { question: "Which keyword is used to declare a variable in Kotlin?", correctAnswer: "var", incorrectAnswers: ["let", "val", "def"] },
            { question: "Which keyword is used to declare a read-only variable in Kotlin?", correctAnswer: "val", incorrectAnswers: ["var", "let", "const"] },
            { question: "What is the main entry point of a Kotlin program?", correctAnswer: "fun main()", incorrectAnswers: ["def main()", "start()", "public static void main()"] },
            { question: "Which of these is not a valid data type in Kotlin?", correctAnswer: "doubleInt", incorrectAnswers: ["String", "Int", "Double"] },
            { question: "What does 'null safety' mean in Kotlin?", correctAnswer: "Prevents null pointer exceptions", incorrectAnswers: ["Allows nullable variables", "Checks for nulls at runtime", "Encourages null values"] },
            { question: "What is a primary constructor in Kotlin?", correctAnswer: "A constructor declared in the class header", incorrectAnswers: ["A constructor defined with 'constructor' keyword", "A function returning an instance", "A secondary constructor"] },
            { question: "What is the default visibility modifier in Kotlin?", correctAnswer: "public", incorrectAnswers: ["private", "protected", "internal"] },
            { question: "Which of these is a Kotlin coroutine builder?", correctAnswer: "launch", incorrectAnswers: ["start", "thread", "newCoroutine"] },
            { question: "What is the purpose of 'lazy' in Kotlin?", correctAnswer: "Creates a property that is initialized on first access", incorrectAnswers: ["Declares a static property", "Defines an uninitialized property", "Optimizes runtime performance"] },
            { question: "Which of these is a Kotlin framework?", correctAnswer: "Ktor", incorrectAnswers: ["Rails", "Spring", "Django"] }
            ],
            tasks: [
            "Write a Kotlin program to print 'Hello, World!'",
            "Write a Kotlin program to check if a number is odd or even",
            "Write a Kotlin program to calculate the factorial of a number",
            "Write a Kotlin program to reverse a string",
            "Write a Kotlin program to print the Fibonacci sequence",
            "Write a Kotlin program to sort an array of integers",
            "Write a Kotlin program to find the largest number in an array",
            "Write a Kotlin program to check if a string is a palindrome",
            "Write a Kotlin program to calculate the sum of digits of a number",
            "Write a Kotlin program to find the average of an array of numbers"
            ]
        }
        
    };
    
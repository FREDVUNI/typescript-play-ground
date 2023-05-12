# A Compilation of All Things TypeScript

This is a compilation of different things that you can do with TypeScript, a popular programming language that is a superset of JavaScript. TypeScript adds features like static typing, interfaces, and classes to JavaScript, making it easier to write and maintain large-scale applications.

## Note

This repo is mostly for anything typescript - Nothing's really set up to run the entire APP

## Table of Contents

- [Installing TypeScript](#installing-typescript)
- [Basic Syntax](#basic-syntax)
- [Type Annotations](#type-annotations)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Functions](#functions)
- [Generics](#generics)
- [Enums](#enums)
- [Type Inference](#type-inference)
- [Type Aliases](#type-aliases)

## Installing TypeScript

Before you can use TypeScript, you need to install it on your machine. You can do this using NPM, the Node.js package manager:

```
npm install -g typescript
```

This will install the latest version of TypeScript globally on your machine, so you can use the `tsc` command from anywhere.

## Basic Syntax

TypeScript syntax is very similar to JavaScript syntax. Here's an example of a simple TypeScript program that outputs "Hello, world!" to the console:

```typescript
const message: string = "Hello, world!";
console.log(message);
```

The `const` keyword is used to declare a constant variable. The `: string` after the variable name is a type annotation that tells TypeScript that the variable should be a string.

## Type Annotations

TypeScript uses type annotations to specify the types of variables, function parameters, and return values. Here are some examples of type annotations:

```typescript
let count: number = 0; // number variable
function add(a: number, b: number): number { // function parameters and return type
  return a + b;
}
```

TypeScript also supports a number of built-in types, including:

- `string`: A string of characters.
- `number`: A numerical value.
- `boolean`: A true or false value.
- `any`: Any type is allowed.
- `void`: No type is returned.
- `null` and `undefined`: Null and undefined values.
- `object`: An object.

## Interfaces

Interfaces are a way to define the structure of an object in TypeScript. Here's an example:

```typescript
interface Person {
  name: string;
  age: number;
  address?: string; // optional property
}

const person: Person = {
  name: "Alice",
  age: 30
};
```

In this example, the `Person` interface defines the properties that an object should have, including a `name` property of type `string`, an `age` property of type `number`, and an optional `address` property of type `string`. The `person` constant is then assigned an object that conforms to the `Person` interface.

## Classes

Classes are a way to define reusable code in TypeScript. Here's an example:

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // Rex barks.
```

In this example, the `Animal` class is defined with a `name` property and a `speak`
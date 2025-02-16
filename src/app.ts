interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  

  function createUser(user: User): User {
    return user;
  }
  
  const newUser: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
  };
  
  console.log(createUser(newUser));
  


  // question 2

  

  type Input = number | string;
  

  function processInput(input: Input): string {
    if (typeof input === "number") {
      return `Number: ${input.toString()}`;
    } else {
      return `String: ${input}`;
    }
  }

console.log(processInput(42));
console.log(processInput("Hello"));

const handler = {
    get(target, prop) {
      console.log(`Property '${prop}' was accessed.`);
      return prop in target ? target[prop] : undefined;
    }
  };
  
  const person = { name: "Alice", age: 30 };
  const proxy = new Proxy(person, handler);
  console.log(proxy.name); 
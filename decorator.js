// It is not suported by javascript in 2025 to use this we have to use typescript



function logMethod(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      console.log(`Calling ${name} with args: ${args}`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class MyClass {
    @logMethod
    myMethod(a, b) {
      return a + b;
    }
  }
  
  const obj = new MyClass();
  console.log(obj.myMethod(2, 3));  
  
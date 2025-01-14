async function* asyncGenerator() {
    yield new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
    yield new Promise((resolve) => setTimeout(() => resolve('Second'), 1000));
    yield new Promise((resolve) => setTimeout(() => resolve('Third'), 1000));
  }
  
  async function iterateAsync() {
    for await (const value of asyncGenerator()) {
      console.log(value);  // Logs "First", "Second", "Third"
    }
  }
  
  iterateAsync();
  
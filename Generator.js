function* myGenerator() {
    yield 'First value';
    yield 'Second value';
    yield 'Third value';
  }
  
  const gen = myGenerator();
  
  console.log(gen.next()); 
  console.log(gen.next()); 
  console.log(gen.next());
  console.log(gen.next()); 
  
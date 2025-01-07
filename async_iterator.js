// An async iterator is an iterator in JavaScript that allows you to iterate over asynchronous data sources.
// This is especially useful when dealing with operations that involve asynchronous tasks

const asyncIterator = {
    async currentPageData(page) {
      return new Promise(resolve => setTimeout(() => resolve(`Data for page ${page}`), 1000));
    },
  
    async asyncIterator(pages) {
      let page = 1;
      while (page <= pages) {
        yield await this.currentPageData(page); 
        page++;
      }
    }
  };
  
  (async () => {
    const pages = 3; 
    const iterator = asyncIterator.asyncIterator(pages);
  
    for await (const data of iterator) {
      console.log(data); 
    }
  })();
  
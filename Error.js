class ValidationError extends Error {
    constructor(message, fieldName) {
      super(message); // Call the parent constructor with the message
      this.name = 'ValidationError'; // Set a custom error name
      this.fieldName = fieldName; // Custom property to track which field caused the error
      this.stack = (new Error()).stack; // Capture the stack trace
    }
  }
  
  try {
    console.log("Hello");
    throw new ValidationError("Invalid input", "username");
    
  } catch (error) {
    console.error(error.name); // ValidationError
    console.error(error.message); // Invalid input
    console.error(error.fieldName); // username
    // console.error(error.stack); 
  }
  
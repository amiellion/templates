const validation = {
   required: "This field is required.",
   email: 'Input is not a recognized email format.',
   string: "This field is required.",
   number: "This field is required.",
   positive: "Input should be a positive integer.",
   negative: "Input should be a negative integer.",
   typeError: cond => {
      switch (cond) {
         case "string":
            return "Input should be a string.";
         case "number":
            return "Input should be a number.";
         default:
            return "Invalid input.";
      };
   },
   minChar: num => `Your input exceeded ${num} characters.`,
   maxChar: num => `Your input exceeded ${num} characters.`,
   minNum: num => `Your input exceeded ${num} digits.`,
   maxNum: num => `Your input exceeded ${num} digits.`,
}

export default validation;

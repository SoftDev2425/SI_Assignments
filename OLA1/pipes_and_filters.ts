/**
 * This example demonstrates a basic setup where data passes through a series of processing steps (filters), each performing a specific transformation or action.

Example: Pipes and Filters in TypeScript
Let's create a simple example that processes a list of strings. The "pipeline" will include several filters that:

1. Filter out strings that don't meet a specific condition.
2. Convert the remaining strings to uppercase.
3. Append a suffix to each string.
 * 
 * 
 */

// Define a type alias for a Filter function
type Filter = (input: string) => string | null;

// A pipeline class that manages a series of filters
class Pipeline {
  private filters: Filter[] = [];

  // Add a filter to the pipeline
  public addFilter(filter: Filter): void {
    this.filters.push(filter);
  }

  // Execute the pipeline on an array of inputs
  public execute(inputs: string[]): string[] {
    return inputs.reduce((processed, input) => {
      let result = input;
      for (const filter of this.filters) {
        result = filter(result) as string;
        if (result === null) break; // Stop processing if the filter returns null
      }
      if (result !== null) processed.push(result);
      return processed;
    }, [] as string[]);
  }
}

// Filter: Remove strings that don't contain a specific keyword
const keywordFilter: Filter = (input: string) => {
  return input.includes("filter") ? input : null;
};

// Filter: Convert strings to uppercase
const uppercaseFilter: Filter = (input: string) => {
  return input.toUpperCase();
};

// Filter: Append a suffix to each string
const suffixFilter: Filter = (input: string) => {
  return `${input} - PROCESSED`;
};

// Create a new pipeline instance
const pipeline = new Pipeline();
pipeline.addFilter(keywordFilter);
pipeline.addFilter(uppercaseFilter);
pipeline.addFilter(suffixFilter);

// Example input data
const inputStrings = ["hello world", "filter this message", "another example", "filter me too"];

// Execute the pipeline
const processedStrings = pipeline.execute(inputStrings);
console.log(processedStrings);

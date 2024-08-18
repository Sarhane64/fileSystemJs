import { input, confirm, select,search } from '@inquirer/prompts';

// Get answers in an object
const answers = {
  firstName: await input({ message: "What's your first name?" }),
  allowEmail: await confirm({ message: 'Do you allow us to send you email?' }),
};
console.log(answers);

// Ask a question conditionally
const allowEmail = await confirm({ message: 'Do you allow us to send you email?' });

let email;
if (allowEmail) {
  email = await input({ message: 'What is your email address' });
}
console.log(email);

// Selector Choise
const askForFields = async () => {
    const fields = [];
    let addMore = true;
  
    while (addMore) {
      const name = await input({ message: "Enter the field name:" });
      const type = await select({
        message: "Choose the field type:",
        choices: [
          { name: "String", value: "String" },
          { name: "Number", value: "Number" },
          { name: "Date", value: "Date" },
          { name: "Boolean", value: "Boolean" },
          { name: "Array", value: "Array" },
          { name: "Object", value: "Object" },
        ],
      });
  
      fields.push({ name, type });
      addMore = await confirm({ message: "Do you want to add another field?" });
    }
  
    return fields;
  };

  const test = await askForFields()
  console.log(test);
  
  // Search in API
  
  const answer = await search({
    message: 'Select an npm package',
    source: async (input, { signal }) => {
      if (!input) {
        return [];
      }
  
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(input)}&size=20`,
        { signal },
      );
      const data = await response.json();
  
      return data.objects.map((pkg) => ({
        name: pkg.package.name,
        value: pkg.package.name,
        description: pkg.package.description,
      }));
    },
  });

  answer()
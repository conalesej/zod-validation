# Zod-Schema-Validation-CharterSpace
Zod Validation Challenge


## Getting Started with running the App

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).
### Pre-requisites
Node.js  
## Available Scripts

In the project directory, you can run it in order:

### `npm install`

Install the app's dependencies.

### `npm run dev`
Open the generated localhost url to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.
#### Example
![image](https://user-images.githubusercontent.com/60915940/211482898-ac5ef99d-01f4-42da-9c69-1f2d52be169a.png)

### Access `src/App.tsx`
Play around with it by doing a console log inside the function
If you have it running in your local browser, right-click anywhere in the page > click inspect element > then go to the console tab
![image](https://user-images.githubusercontent.com/60915940/211490254-672f9a59-a5c9-4cfc-a0be-7d9774a94e47.png)

## Raw Code Solution to the Challenge

```
import { z } from "zod";

const schema = z.object({
  data: z.coerce.number(),
});

// Input Types
// {
//   data: string | number | boolean;
// }

const stringValue = schema.parse({ data: "999999" }); // value == { data : 999999}
const numberValue = schema.parse({ data: 333333 }); // value == { data : 333333}
const booleanTrueValue = schema.parse({ data: true }); // value == { data : 1}
const booleanFalseValue = schema.parse({ data: false }); // value == { data : 0}

type input = z.input<typeof schema>; // { data: number}
type output = z.output<typeof schema>; // { data: number }
type inferred = z.infer<typeof schema>; // same as output

interface genericThirdPartyType<T> {
  genericData: T;
}
const matchingSchema: z.ZodType<genericThirdPartyType<inferred>> = z.object({
  genericData: schema,
}); // No errors now

```

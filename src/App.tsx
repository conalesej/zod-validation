import { z } from "zod";

const App = () => {
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

  return (
    <div>
      <div>Hello CharterSpace</div>
    </div>
  );
};

export default App;

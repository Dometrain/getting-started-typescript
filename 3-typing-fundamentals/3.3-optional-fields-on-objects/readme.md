# Optional fields on Objects

In the previous section, we learned how to define the shape of an object. We can also define optional fields on objects. To do this, we use the `?` modifier.

```ts
type User = {
  name: string;
  age?: number;
};

// or can explicitly set it to undefined
const alice: User = {
  name: "Alice",
  age: undefined,
};
```

In the `User` type above, `age` is optional. This means you can create a `User` object without an `age` field.

```ts
// Since age is optional, we can omit it
const cory: User = {
  name: "Cory",
};
```

Or, you can explicitly require the field to be `undefined`.

```ts
// Can explicitly accept undefined using a union type, but then age MUST be specified.
type User2 = {
  name: string;
  age: number | undefined;
};

const bob: User2 = {
  name: "Bob",
  age: undefined, // Error if not specified
};
```

Watch out for overusing this feature. Keep in mind that it widens the type. If you have a lot of optional fields, you might want to consider breaking the object into multiple types.

For example, this User has many related optional fields.

```ts
// Many optional fields
type UserManyOptional = {
  name: string;
  city?: string;
  country?: string;
  postalCode?: string;
};
```

What if the actual business rule is that if the user has an address, they must have all 3 fields populated? Instead, consider grouping the related fields:

```ts
// Prefer
type UserGroupedOptional = {
  name: string;
  address?: {
    city: string;
    country: string;
    postalCode: string;
  };
};
```

This way, if `address` is present, you know all 3 fields are populated. If `address` is not present, you know the user doesn't have an address.

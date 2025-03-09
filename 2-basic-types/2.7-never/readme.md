# Never

Earlier I mentioned top and bottom types. Top types represent anything. That's what `any` and `unknown` do. A bottom type represents something that should never happen TypeScript provides a `never` type for that. If you want to represent something that should never happen, use `never`?

Never is useful for exhaustive conditionals, and exhaustive switch statements.

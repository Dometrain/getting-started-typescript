// The spread syntax can be used to combine arrays of types,
// much like the spread syntax can be used to combine arrays in values.
type CarColors = ["red", "orange"];
type SkyColors = ["gray", "blue"];
type CarAndSkyColors = [...CarColors, ...SkyColors];
// ^ = type Colors = ["red", "orange", "gray", "blue"]

{
  //

  // generic refers to generalise something;

  //   type GenericArray = Array<string>;
  // ? making generic type re-useable
  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>; //TODO: industry standard

  // const rollNumbers : number[] = [3, 5, 7, 9];
  //   const rollNumbers: Array<number> = [3, 5, 7, 9];
  const rollNumbers: GenericArray<number> = [3, 5, 7, 9];

  // const peoples: string[] = ["Mr. X", "Mr. Y","Mr. Z" ];
  // const peoples: Array<string> = ["Mr. X", "Mr. Y","Mr. Z" ];
  //   const peoples: GenericArray = ["Mr. X", "Mr. Y", "Mr. Z"];
  const peoples: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray : boolean[] = [true, true, false, false];
  //   const boolArray: Array<boolean> = [true, true, false, false];
  const boolArray: GenericArray<boolean> = [true, true, false, false];

  //   * generic array

  const user1: GenericArray<object> = [
    // we can use this but it's not recommended because of some limitations
    { name: "Tarekul", age: 89 },
    { name: "Sayed", age: 90 },
  ];
  const user2: GenericArray<{ name: string; age: number }> = [
    // this is industry standard
    { name: "Tarekul", age: 89 },
    { name: "Sayed", age: 90 },
  ];

  //   * generic tuple

  type GenericTuple<X, Y> = [X, Y];

  // const manush: [string, string] = ["Mr. X", "Mrs. Y"]
  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const student: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Tarekul", email: "a@proton.me" },
  ];

  //
}

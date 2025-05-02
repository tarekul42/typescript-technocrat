{
  //

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 94728,
    name: "Bulbul",
  });

  //   --------------------------
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 823);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "I Want to learn Programming in English course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "Well learner",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}

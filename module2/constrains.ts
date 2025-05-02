{
  //
  // constrains means --> to force on something
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "I Want to learn Programming in English course";

    return {
      ...student,
      course,
    };
  };

  const studentx = addCourseToStudent({
    id: 893,
    name: "Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "Well learner",
  });
  const student2 = addCourseToStudent({
    id: 983,
    name: "Mr. Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });
  //
}

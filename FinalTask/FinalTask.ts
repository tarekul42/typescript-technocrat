{
  //
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formatString("this");

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.0 },
    { title: "Book e", rating: 9.9 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const mappedItems = items.filter(
      (item: { title: string; rating: number }) => item.rating >= 4
    );
    return mappedItems;
  }

  filterByRating(books);

  //
}

{
  //

  //   interface Developer<T, X> {
  interface Developer<T, X = null> {
    // with default value
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch, null> = {
    name: "ABC",
    computer: {
      brand: "Acer",
      model: "Aspire",
      releaseYear: 2016,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "XYZ",
    computer: {
      brand: "Apple",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "something",
      display: "OLED",
      heartTrack: true,
      sleepTrack: false,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "160cc",
    },
  };

  //
}

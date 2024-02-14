const getFormattedData = (value, type, inMS) => {
  if (!type) {
    return value;
  }

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);

  let option;

  if (type == "date") {
    option = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type == "time") {
    option = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", option).format(date);
};

export default getFormattedData;

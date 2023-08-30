
//This convert currency into symbol format...
export const convertCurrency = (currencyName) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyName,
  });
  const formatted = formatter.format(0).slice(0, 1);
  return formatted;
};


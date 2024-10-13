export const generateSearchLink = (term: string) => {
  term = term.toLocaleLowerCase("tr");
  term = term.replace(/ /g, "+");
  term = term.replace(/ç/g, "c");
  term = term.replace(/ğ/g, "g");
  term = term.replace(/ı/g, "i");
  term = term.replace(/ö/g, "o");
  term = term.replace(/ş/g, "s");
  term = term.replace(/ü/g, "u");

  return `/ara?q=${term}`;
};

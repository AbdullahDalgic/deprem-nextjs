import { ApiParams } from "../interfaces/api";

export const ApiUrlPrepare = <T extends ApiParams>({
  url = "",
  params,
}: {
  url?: string;
  params: T;
}) => {
  const query = new URLSearchParams();

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        value.forEach((v) => query.append(`${key}[]`, v.toString()));
      } else {
        query.append(key, value.toString());
      }
    }
    const queryString = query.toString();
    url += queryString
      ? url.includes("?")
        ? `&${queryString}`
        : `?${queryString}`
      : "";
  }

  return url;
};

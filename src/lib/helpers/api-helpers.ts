import { QueryParams } from "@/types/api-request";

export const buildQueryString = (params: QueryParams): string => {
  const filteredParams = Object.keys(params).filter(
    (key) => params[key] !== undefined && params[key] !== null
  );

  if (filteredParams.length === 0) {
    return "";
  }

  return (
    "?" +
    filteredParams
      .map((key) => `${key}=${encodeURIComponent(params[key]!.toString())}`)
      .join("&")
  );
};

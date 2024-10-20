export interface QueryParams {
  page?: number;
  limit?: number;
  // For handling dynamic parameters
  sort?: "asc" | "desc";
  [key: string]: string | number | undefined; // For handling dynamic parameters
}

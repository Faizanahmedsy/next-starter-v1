import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import superAxios from "@/services/instance";

/**
 * Custom hook to fetch the details of a specific resource using TanStack Query and Axios.
 *
 * @template TData The type of data returned by the API
 * @param {Object} options - The options for the query
 * @param {string} options.url - The base API endpoint
 * @param {number} options.id - The ID of the resource to fetch
 * @param {UseQueryOptions<TData, Error>} [options.queryOptions] - Additional options for useQuery
 * @returns The result of useQuery (data, error, isLoading, etc.)
 */
const useFetchDetails = <TData = unknown,>({
  url,
  id,
  queryOptions = {},
}: {
  url: string;
  id: number | string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<TData, Error, TData>,
    "queryKey" | "queryFn"
  >;
}) => {
  return useQuery<TData, Error>({
    queryKey: [url, id], // Default queryKey includes the URL and ID for caching
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch details.");
      }
      const response = await superAxios.get(`${url}${id}`);
      if (response.data?.statusCode === 200) {
        return response.data?.data;
      }
      throw new Error(response.data?.message || "Failed to fetch details.");
    },
    enabled: !!id, // Only run the query if the ID is provided
    retry: false, // Disable retrying failed requests
    ...queryOptions, // Spread additional options
  });
};

export default useFetchDetails;

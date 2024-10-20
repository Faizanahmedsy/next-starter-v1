import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import superAxios from "@/services/instance";

/**
 * Custom hook to add new data using TanStack Query and Axios.
 *
 * @template TData The type of data returned after adding the new resource
 * @template TPayload The type of payload to be sent for the new resource
 * @param {Object} options - The options for the mutation
 * @param {string} options.url - The base API endpoint for adding new data
 * @param {UseMutationOptions<TData, Error, TPayload>} [options.mutationOptions] - Additional options for useMutation
 * @returns The result of useMutation (mutate, mutateAsync, isLoading, etc.)
 */
const usePostData = <TData = unknown, TPayload = unknown>({
  url,
  mutationOptions = {},
}: {
  url: string;
  mutationOptions?: UseMutationOptions<TData, Error, TPayload>;
}) => {
  return useMutation<TData, Error, TPayload>({
    mutationFn: async (payload) => {
      const response = await superAxios.post(url, payload);
      if (response.data?.statusCode === 200 || response.status === 201) {
        return response.data?.data;
      }
      throw new Error(response.data?.message || "Failed to add new resource");
    },
    ...mutationOptions,
  });
};

export default usePostData;

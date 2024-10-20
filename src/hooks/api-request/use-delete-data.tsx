import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import superAxios from "@/services/instance";

/**
 * Custom hook to delete a resource using TanStack Query and Axios.
 *
 * @template TData The type of data returned after deletion
 * @param {Object} options - The options for the mutation
 * @param {string} options.url - The base API endpoint for deletion
 * @param {UseMutationOptions<TData, Error, number>} [options.mutationOptions] - Additional options for useMutation
 * @returns The result of useMutation (mutate, mutateAsync, isLoading, etc.)
 */
const useDeleteData = <TData = unknown,>({
  url,
  mutationOptions = {},
}: {
  url: string;
  mutationOptions?: UseMutationOptions<TData, Error, number>;
}) => {
  return useMutation<TData, Error, number>({
    mutationFn: async (id: number) => {
      const response = await superAxios.delete(`${url}${id}`);
      if (response.data?.statusCode === 200) {
        return response.data?.data;
      }
      throw new Error(response.data?.message || "Failed to delete resource");
    },
    ...mutationOptions,
  });
};

export default useDeleteData;

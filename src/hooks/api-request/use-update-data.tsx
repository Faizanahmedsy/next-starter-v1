import superAxios from "@/services/instance";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

/**
 * Custom hook to update a resource using TanStack Query and Axios.
 *
 * @template TData The type of data returned after the update
 * @template TPayload The type of payload to be sent for the update
 * @param {Object} options - The options for the mutation
 * @param {string} options.url - The base API endpoint for updating
 * @param {UseMutationOptions<TData, Error, { id: number; payload: TPayload }>} [options.mutationOptions] - Additional options for useMutation
 * @returns The result of useMutation (mutate, mutateAsync, isLoading, etc.)
 */
const useUpdateData = <TData = unknown, TPayload = unknown>({
  url,
  mutationOptions = {},
}: {
  url: string;
  mutationOptions?: UseMutationOptions<
    TData,
    Error,
    { id: number; payload: TPayload }
  >;
}) => {
  return useMutation<TData, Error, { id: number; payload: TPayload }>({
    mutationFn: async ({ id, payload }) => {
      const response = await superAxios.patch(`${url}${id}`, payload);
      if (response.data?.error === false) {
        return response.data?.data;
      }
      throw new Error(response.data?.message || "Failed to update resource");
    },
    ...mutationOptions,
  });
};

export default useUpdateData;

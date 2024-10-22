import { API } from "@/services/endPoints";
import { TestApiResponse } from "../test.types";
import { QueryParams } from "@/types/api-request";
import {
  useDeleteData,
  useFetchData,
  useFetchDetails,
  usePostData,
  useUpdateData,
} from "@/hooks/api-request";

export const useTestList = (params: QueryParams) => {
  return useFetchData<TestApiResponse>({
    url: `${API.test.list}`,
    params: params,
  });
};

export const useCreateTest = () => {
  return usePostData({
    url: `${API.test.add}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Test added successfully", data);
      },
      onError: (error) => {
        console.log("Test addition failed", error);
      },
    },
  });
};

export const useUpdateTest = () => {
  return useUpdateData({
    url: `${API.test.update}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Test updated successfully", data);
      },
      onError: (error) => {
        console.log("Test update failed", error);
      },
    },
  });
};

export const useDeleteTest = () => {
  return useDeleteData({
    url: `${API.test.delete}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Test deleted successfully", data);
      },
      onError: (error) => {
        console.log("Test deletion failed", error);
      },
    },
  });
};

export const useTestDetails = (id: number) => {
  return useFetchDetails({
    url: API.test.details,
    id,
    queryOptions: {},
  });
};

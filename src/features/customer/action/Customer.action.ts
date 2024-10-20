import {
  useDeleteData,
  useFetchData,
  useFetchDetails,
  usePostData,
  useUpdateData,
} from "@/hooks/api-request";
import { CustomerApiResponse } from "../Customer.types";
import { QueryParams } from "@/types/api-request";
import { API } from "@/services/endPoints";

export const useCustomerList = (params: QueryParams) => {
  return useFetchData<CustomerApiResponse>({
    url: `${API.customer.list}`,
    params: params,
  });
};

export const useCreateCustomer = () => {
  return usePostData({
    url: `${API.customer.add}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Customer added successfully", data);
      },
      onError: (error) => {
        console.log("Customer addition failed", error);
      },
    },
  });
};

export const useUpdateCustomer = () => {
  return useUpdateData({
    url: `${API.customer.update}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Customer updated successfully", data);
      },
      onError: (error) => {
        console.log("Customer update failed", error);
      },
    },
  });
};

export const useDeleteCustomer = () => {
  return useDeleteData({
    url: `${API.customer.delete}`,
    mutationOptions: {
      onSuccess: (data) => {
        console.log("Customer deleted successfully", data);
      },
      onError: (error) => {
        console.log("Customer deletion failed", error);
      },
    },
  });
};

export const useCustomerDetails = (id: number) => {
  return useFetchDetails({
    url: API.customer.details,
    id,
    queryOptions: {},
  });
};

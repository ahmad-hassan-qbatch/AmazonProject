/* eslint-disable no-undef */
import api from "../utilities/api.js";
import { defineStore } from "pinia";
import { ref } from "vue";
import toast from "../utilities/toastMessages.js";

const checkArrays = [
  "weightRange",
  "priceRange",
  "numberOfReviews",
  "dimensions",
];

export const useProductStore = defineStore("Product", () => {
  const products = ref([]);
  const productDetails = ref({});
  const loading = ref(false);
  const totalPages = ref(0);
  const filterParams = ref({});

  const isSuccess = (status) => status >= 200 && status <= 299;

  const fetchAllProducts = async (params) => {
    try {
      loading.value = true;
      const response = await api.get("/products", {
        params: {
          ...params,
        },
      });

      if (isSuccess(response.status)) {
        products.value = response.data.allProducts;
        totalPages.value = response.data.totalCount;
      }
      loading.value = false;
    } catch (error) {
      toast.error(error.message);
      loading.value = false;
    }
  };

  const fetchById = async (id, params) => {
    try {
      loading.value = true;
      const res = await api.get(`/products/details/${id}`, { params: params });
      productDetails.value = res.data.productDetails;
      loading.value = false;
    } catch (error) {
      loading.value = false;
      toast.error(error.message);
    }
  };

  const setFilterParams = (params) => {
    if (params === null) {
      filterParams.value = {
        ...params,
        search: filterParams.value.search,
      };
      return;
    }

    delete params?.pageNo;

    filterParams.value = {
      ...params,
    };

    for (const value of checkArrays) {
      typeof params[value] === typeof "" &&
        (filterParams.value[value] = params[value]?.split(","));
    }
  };

  const getFilterParams = () => {
    let params = {
      ...filterParams.value,
      weightRange: filterParams.value["weightRange"]?.join(","),
      priceRange: filterParams.value["priceRange"]?.join(","),
      numberOfReviews: filterParams.value["numberOfReviews"]?.join(","),
      dimensions: filterParams.value["dimensions"]?.join(","),
    };

    for (const value of checkArrays) {
      if (params[value]?.length === (value === "dimensions" ? 2 : 1)) {
        delete params[value];
      }
    }

    return params;
  };

  return {
    products,
    loading,
    fetchById,
    fetchAllProducts,
    setFilterParams,
    filterParams,
    totalPages,
    getFilterParams,
    productDetails,
  };
});

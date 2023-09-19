import api from "../utilities/api.js";
import { defineStore } from "pinia";
import { ref } from "vue";
import toast from "../utilities/toastMessages.js";

export const useProductStore = defineStore("Product", () => {
  const products = ref([]);
  const loading = ref(false);
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
      }
      loading.value = false;
    } catch (error) {
      toast.error(error.message);
      loading.value = false;
    }
  };

  const handleFiterParamsChange = (field, value, index = null) => {
    if (index === null) filterParams.value[field] = value;
    else {
      if (!filterParams.value[field]) {
        filterParams.value[field] = [];
      }
      filterParams.value[field][index] = value || undefined;
    }
  };

  const setFilterParams = (params) => {
    filterParams.value = {
      ...params,
    };

    if (params["weightRange"])
      filterParams.value.weightRange = params["weightRange"]?.split(",");

    if (params["priceRange"])
      filterParams.value.priceRange = params["priceRange"]?.split(",");

    if (params["numberOfReviews"])
      filterParams.value.numberOfReviews =
        params["numberOfReviews"]?.split(",");

    if (params["dimensions"])
      filterParams.value.dimensions = params["dimensions"]?.split(",");
  };

  const getFilterParams = () => {
    let params = {
      ...filterParams.value,
      weightRange: filterParams.value["weightRange"]?.join(","),
      priceRange: filterParams.value["priceRange"]?.join(","),
      numberOfReviews: filterParams.value["numberOfReviews"]?.join(","),
      dimensions: filterParams.value["dimensions"]?.join(","),
    };

    if (params?.weightRange?.length === 1) {
      delete params?.weightRange;
    }

    if (params?.priceRange?.length === 1) {
      delete params?.priceRange;
    }
    if (params?.numberOfReviews?.length === 1) {
      delete params?.numberOfReviews;
    }
    if (params?.dimensions?.length === 1) {
      delete params?.dimensions;
    }

    return params;
  };

  return {
    products,
    loading,
    fetchAllProducts,
    setFilterParams,
    filterParams,
    handleFiterParamsChange,
    getFilterParams,
  };
});

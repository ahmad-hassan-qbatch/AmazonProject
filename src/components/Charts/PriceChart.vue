<template>
  <div class="flex justify-between items-end my-[24px]">
    <div>
      <p class="text-[#979797] text-[12px]">From</p>
      <input
        v-model="startDate"
        type="date"
        class="w-[262px] h-[36px] rounded-md border border-[#E9E9EA] px-4 mt-[6px] appearance-none"
      />
    </div>
    <div>
      <p class="text-[#979797] text-[12px]">To</p>
      <input
        v-model="endDate"
        type="date"
        :min="startDate"
        class="w-[262px] h-[36px] rounded-md border border-[#E9E9EA] px-4 mt-[6px]"
      />
    </div>
    <div>
      <Button role="primary" styles="w-[102px]">Filter Now</Button>
    </div>
  </div>
  <Line id="my-line-chart-id" :options="config" :data="chartData" />
</template>

<script setup>
import { ref, watch } from "vue";
import { Line } from "vue-chartjs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import Button from "../Button.vue";

const startDate = ref();
const endDate = ref();
watch([startDate, endDate], () => {
  if (startDate.value > endDate.value) {
    endDate.value = startDate.value;
  }
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const chartData = {
  labels: [
    "Jan",
    "feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Dashed",
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(0, "rgba(39, 196, 152, 0.10)");
        gradient.addColorStop(1, "rgba(39, 196, 152, 0.00)");

        return gradient;
      },
      borderColor: "#27C498",
      data: [201, 400, 360, 520, 430, 600, 380, 800, 340, 430, 360, 600],
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      pointStyle: false,
    },
    {
      label: "Dashed",
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(0, "rgba(39, 196, 152, 0.10)");
        gradient.addColorStop(1, "rgba(39, 196, 152, 0.00)");

        return gradient;
      },
      borderColor: "#C6D0DC",
      data: [400, 470, 390, 500, 650, 430, 390, 340, 470, 320],
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      pointStyle: false,
      borderWidth: 2,
      borderDash: [5, 5],
    },
  ],
};

const config = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Cubic interpolation mode",
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      grid: {
        drawBorder: true,
        ticks: true,
        display: false,
      },
    },
    y: {
      display: true,
      borderColor: "#FFFFF",
      grid: {
        color: "#E9E9EA",
        drawTicks: false,
        borderDash: [3, 3],
      },
      ticks: {
        stepSize: 200,
        callback: (value) => {
          return "$" + value; // Add the "dollar" unit to the y-axis labels
        },
      },
      suggestedMin: 0,
      suggestedMax: 1000,
      unit: "$",
      border: {
        dash: [5, 4],
      },
    },
  },
};
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url("../../assets/icons/CalenderIcon.svg");
  background-repeat: no-repeat;
}
</style>

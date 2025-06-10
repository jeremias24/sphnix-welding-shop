<template>
  <!-- Main row -->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!-- Hero banner / welcome message -->
    <div class="col-xxl-6">
      <div
        class="card h-xl-100 border-0 overflow-hidden position-relative text-white"
      >
        <img
          :src="getAssetPath('assets/images/welding-hero.png')"
          class="card-img h-100 object-fit-cover"
          alt="Welcome to Sphnix Welding Shop"
        />
        <div
          class="card-img-overlay d-flex flex-column justify-content-end p-10 bg-dark bg-opacity-50"
        >
          <h2 class="fw-bold mb-3 text-white">Welcome to Sphnix Welding Shop</h2>
          <p class="fs-5 mb-4">
            Quality fabrication · Custom metal works · Affordable rates
          </p>
          <router-link to="/products" class="btn btn-primary fw-bold"
            >Browse Products</router-link
          >
        </div>
      </div>
    </div>

    <!-- Quick stats & promo -->
    <div class="col-xl-6">
      <div class="row g-5">
        <div class="col-sm-6">
          <WidgetStats
            title="Products"
            :value="totalProducts"
            icon="ki-solid ki-basket"
            class="h-100"
          />
        </div>
        <div class="col-sm-6">
          <WidgetStats
            title="Happy Clients"
            :value="totalClients"
            icon="ki-solid ki-happy-emoji"
            class="h-100"
          />
        </div>
        <div class="col-sm-12">
          <!-- Re‑use existing Widget9 as promo / spotlight -->
          <Widget9 className="h-lg-100" :height="350" />
        </div>
      </div>
    </div>
  </div>
  <!-- /Main row -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetPath } from '@/core/helpers/assets'
import WidgetStats from '@/components/dashboard-default-widgets/WidgetStats.vue'
import Widget9 from '@/components/dashboard-default-widgets/Widget9.vue'

// Dummy stats – replace with real fetch if available
const totalProducts = ref(42)
const totalClients  = ref(120)
</script>

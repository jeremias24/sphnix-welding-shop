<template>
  <!--begin::Footer-->
  <div v-if="footerDisplay" id="kt_app_footer" class="app-footer">
    <!--begin::Footer container-->
    <div
      class="app-container d-flex flex-column flex-md-row flex-center flex-md-stack py-3"
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-gray-900 order-2 order-md-1">
        <span class="text-muted fw-semibold me-1">2025©</span>
        <a
          href="#"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Sphnix Welding Shop</a
        >
      </div>
      <!--end::Copyright-->

      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
        <li v-for="link in socialLinks" :key="link.id" class="menu-item me-3">
          <a :href="link.url"
            :aria-label="link.name"
            target="_blank"> 
            <i :class="`ki-duotone ki-${link.icon} fs-1`">
              <span class="path1"></span>
              <span class="path2"></span>
            </i>
          </a>
        </li>
      </ul>
      <!--end::Menu-->

      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
        <li class="menu-item">
          <router-link to="/about" class="menu-link px-2">
            About
          </router-link>
        </li>
      </ul>
      <!--end::Menu-->
    </div>
    <!--end::Footer container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerDisplay, footerWidthFluid } from "@/layouts/default-layout/config/helper";
import { socialLinks } from '@/data/socialLinks' 

export default defineComponent({
  name: "theme-footer",
  components: {},
  setup() {
    return {
      footerWidthFluid,
      footerDisplay,
      socialLinks 
    };
  },
});
</script>
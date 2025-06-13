<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Location</h3>
    </div>
    <div class="card-body">
      <p>
      
      </p>

      <!-- Responsive Google Map Embed -->
      <div class="map-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 1rem;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.639557800745!2d121.15905777456645!3d14.215871086381195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63005843a003%3A0xcea058307c5842cf!2sSphnix%20Welding%20Shop!5e0!3m2!1sen!2sph!4v1749797697459!5m2!1sen!2sph"
          style="border:0; position: absolute; top:0; left: 0; width: 100%; height: 100%;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- add more about-content here -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

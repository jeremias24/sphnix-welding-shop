<template>
  <!--begin::Row-->
  <div class="row gx-5 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xxl-12 mb-5 mb-xl-10">
      <Project className="h-xl-100" height="375px" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Project from '@/components/carousel/Project.vue'


export default defineComponent({
  name: "project",
  components: {
    Project,
   
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

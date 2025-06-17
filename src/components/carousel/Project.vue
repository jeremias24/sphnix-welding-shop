<template>
  <OuterCarousel
    :items-to-show="itemsToShow"
    :wrap-around="wrapAround"
    :breakpoints="breakpoints"
    :gap="gap"
    :height="'auto'"
    class="project-carousel"
  >
    <!-- One card per project --> 
    <OuterSlide v-for="project in projects" :key="project.id">
      <div class="card h-100 shadow-sm rounded-3 overflow-hidden">
        <InnerCarousel
          :items-to-show="1"
          wrap-around
          :height="250"
          :mouse-drag="false"  
          :touch-drag="false"  
          class="border-bottom inner-carousel"
        >
          <InnerSlide
            v-for="(img, idx) in project.image"
            :key="`${project.id}-${idx}`"
          > 
            <img
              :src="`/assets/${project.path}/${img}`"
              :alt="`${project.name} image ${idx + 1}`"
              class="w-100 h-100 object-fit-cover"
              @click="showLightbox(project, idx)"
              style="cursor: zoom-in; width: 300px; margin: 10px"
            />
          </InnerSlide>
            <template #addons>
              <Navigation />
            </template>
        </InnerCarousel>

        <div class="card-body p-4 d-flex flex-column gap-2">
          <h3 class="fs-5 fw-semibold mb-0 text-truncate">
            {{ project.name }}
          </h3>

          <p
            v-if="project.price !== undefined"
            class="fs-6 fw-bold text-primary mb-0"
          >
            ₱{{ project.price.toLocaleString() }}
          </p>

          <!-- Default action button (can be overridden) -->
          <slot name="actions" :project="project">
            <button
              class="btn btn-sm btn-primary w-100 mt-auto"
            >
              View Details
            </button>
          </slot>
        </div>
      </div>
    </OuterSlide>
  </OuterCarousel>

  <VueEasyLightbox
    :visible="visibleRef"
    :imgs="imgs"
    :index="indexRef"
    @hide="visibleRef = false"
  />

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'
import {
  Carousel as OuterCarousel,
  Slide as OuterSlide,
  Navigation,
  Pagination,
  Carousel as InnerCarousel,
  Slide as InnerSlide,
} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { projects } from '@/data/projects';

export default defineComponent({
  name: 'carousel-project',

  components: {
    OuterCarousel,
    OuterSlide,
    InnerCarousel,
    InnerSlide,
    Navigation,
    Pagination,
    VueEasyLightbox
  },

   setup() {
    const itemsToShow = ref(4);
    const wrapAround = ref(true);
    const gap = ref(24);
    const breakpoints = {
      1400: { itemsToShow: 3, gap: 20 },  // lg desktops
      992:  { itemsToShow: 2, gap: 16 },  // tablets / small laptops
      576:  { itemsToShow: 1.2, gap: 12 },// large phones (0.2 shows a hint of next card)
      0:    { itemsToShow: 1, gap: 8 }    // very small phones
    };
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgs = ref<string[]>([]);

    const showLightbox = (project: any, index: number) => {
      imgs.value = project.image.map((img: string) => `/assets/${project.path}/${img}`);
      indexRef.value = index
      visibleRef.value = true
    }

    return {
      projects,
      itemsToShow,
      wrapAround,
      gap,
      breakpoints,
      visibleRef,
      indexRef,
      imgs,
      showLightbox,
    };
  },
})
</script>

<style scoped>
.card img,
.inner-carousel img {
  object-fit: cover;
}

.category-section {
  margin-bottom: 3rem;
  text-align: left;
}

.inner-carousel {
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: #fff;        
}
</style>
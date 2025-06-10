<template>
  <OuterCarousel
    :items-to-show="itemsToShow"
    :wrap-around="wrapAround"
    :breakpoints="breakpoints"
    :gap="gap"
    :height="'auto'"
    class="product-carousel"
  >
    <!-- One card per product --> 
    <OuterSlide v-for="product in products" :key="product.id">
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
            v-for="(img, idx) in product.image"
            :key="`${product.id}-${idx}`"
          > 
            <img
              :src="`/assets/${product.path}/${img}`"
              :alt="`${product.name} image ${idx + 1}`"
              class="w-100 h-100 object-fit-cover"
            />
          </InnerSlide>
            <template #addons>
              <Navigation />
            </template>
        </InnerCarousel>

        <div class="card-body p-4 d-flex flex-column gap-2">
          <h3 class="fs-5 fw-semibold mb-0 text-truncate">
            {{ product.name }}
          </h3>

          <p
            v-if="product.price !== undefined"
            class="fs-6 fw-bold text-primary mb-0"
          >
            ₱{{ product.price.toLocaleString() }}
          </p>

          <!-- Default action button (can be overridden) -->
          <slot name="actions" :product="product">
            <button
              class="btn btn-sm btn-primary w-100 mt-auto"
              @click="openModal(product)"
            >
              View Details
            </button>
          </slot>
        </div>
      </div>
    </OuterSlide>
    
  </OuterCarousel>

  <teleport to="body">
    <div
      v-if="showModal && selectedProduct"
      class="modal fade show d-block"
      style="background:#0005"               
      @click.self="closeModal"               
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedProduct.name }}</h5>
            <button class="btn-close" @click="closeModal"></button>
          </div>

          <div class="modal-body">
            <!-- reuse the inner carousel for full-size pics -->
            <InnerCarousel :items-to-show="1" wrap-around height="350">
              <InnerSlide v-for="(img, i) in selectedProduct.image" :key="i">
                <img
                  :src="`/assets/${selectedProduct.path}/${img}`"
                  class="w-100 h-100 object-fit-cover"
                  :alt="`${selectedProduct.name} image ${i+1}`"
                />
              </InnerSlide>
            </InnerCarousel>

            <p class="mt-4 mb-0 fw-bold fs-4 text-primary">
              ₱{{ selectedProduct.price?.toLocaleString() }}
            </p>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Carousel as OuterCarousel,
  Slide as OuterSlide,
  Navigation,
  Pagination,
  Carousel as InnerCarousel,
  Slide as InnerSlide,
} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { products } from '@/data/products'

export default defineComponent({
  name: 'carousel-product',

  components: {
    OuterCarousel,
    OuterSlide,
    InnerCarousel,
    InnerSlide,
    Navigation,
    Pagination,
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
    }


    const showModal       = ref<boolean>(false)
    const selectedProduct = ref<Product | null>(null)

    const openModal = (p: Product): void => {
      selectedProduct.value = p
      showModal.value       = true
      document.body.classList.add('modal-open')   // lock scroll
    }

    const closeModal = (): void => {
      showModal.value = false
      document.body.classList.remove('modal-open')
    }

    return {
     products, itemsToShow, gap, breakpoints, wrapAround,   showModal,
      selectedProduct,
      openModal,
      closeModal,
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
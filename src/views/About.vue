<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- Swiper -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              <div class="swiper-slide">Slide 4</div>
              <div class="swiper-slide">Slide 5</div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
              <div class="swiper-slide">Slide 10</div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
</template>

<script>


  export default {
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                      direction: 'vertical',
                      slidesPerView: 1,
                      spaceBetween: 30,
                      mousewheel: true,
                      pagination: {
                          el: '.swiper-pagination',
                          clickable: true,
                      },
                  });
        }
    }

</script>

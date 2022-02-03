<!-- kilde: https://v3.vuejs.org/api/built-in-components.html#transition -->

  <template>
    <section class="slideshow">
      <h1 class="slideshow__first-title">Travel</h1>
    </section>
      <!-- transtion-group component in Vue.js,  images will iterate.-->
    <transition-group name="fade" tag="div">
      <div class="slide-image" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
      <button class="previous" @click="previous" > &lt; Previous</button>
      <button class="next" @click="next" > &gt; Next</button>
</template>

<script>
  //  Timer is set to null and  currentIndex to 0 for showing the first image.
  export default {
    name: "Slideshow",
    data() {
      return {
        images: [
          "./assets/amsterdam.jpg" ,
				  "./assets/london.jpg" ,
				  "./assets/sveits.jpg" ,
        ],
        timer: null,
        currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

   //  startSlide function for sliding images every 2 seconds.
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 2000);
    },

    next() {
      this.currentIndex += 1;
    },

    previous() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style>
  .slideshow {
      display: flex;
		  flex-flow: column nowrap;
		  font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
  }
  
  .slideshow__first-title {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    border-bottom: solid 4px darkcyan;
    margin-bottom: 25px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.4s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
  }

  .fade-enter,
  .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
  }

  img {
    margin-left: 130px;
		width: 80%;
    height: 80%;
    object-fit: cover;
 }

  .previous, .next {
    cursor: pointer;
    position: absolute;
    top: 70%;
    width: auto;
    padding: 10px 14px;
    color: darkcyan;
    font-weight: bold;
    font-size: 15px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: black;
    margin-left: 15px;
    margin-right: 15px;
 }

  .next {
    right: 0;
  }

  .previous {
    left: 0;
 }

  .previous:hover, .next:hover {
    background: darkcyan;
    border: solid 1px darkcyan;
    color: black;
 }

  @media only screen and (max-width: 480px) {
    img {
      width: 100%;
 }
 }
</style>
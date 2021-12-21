<!-- kilde: https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components -->

<template>
  <h1 class="first-title">Favourite destinations</h1>
  <section>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="previous" @click="previous" href="#"> &lt; Previous</a>
    <a class="next" @click="next" href="#"> &gt; Next</a>
  </section>
</template>
<script>
export default {
  name: "Slideshow",
  data() {
    return {
      images: [
          "./assets/amsterdam.jpg" ,
				  "./assets/sveits.jpeg" ,
				  "./assets/london.jpeg" ,
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 2500);
    },

    next: function() {
      this.currentIndex += 1;
    },
    previous: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style>
.first-title {
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
		width: 80vw;
		height: 80vh;
}

.previous, .next {
  cursor: pointer;
  position: absolute;
  top: 70%;
  width: auto;
  padding: 16px;
  color: darkcyan;
  font-weight: bold;
  font-size: 28px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.next {
  right: 0;
}

.previous {
  left: 0;
}

.previous:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
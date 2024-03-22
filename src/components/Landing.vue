<template>
  <div v-if="!videosLoaded" class="video-loader">
    <!-- Your loading animation goes here -->
    <div class="loader-animation">
      <!-- Example: Using a spinner -->
      <h1>ciao</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingComponant",
  data() {
    return {
      videosLoaded: false,
    };
  },
  mounted() {
    this.checkVideoLoading();
  },
  methods: {
    checkVideoLoading() {
      const videos = document.querySelectorAll("video");

      let loadedCount = 0;
      videos.forEach((video) => {
        if (video.readyState >= 4) {
          loadedCount++;
        } else {
          video.addEventListener("loadeddata", () => {
            loadedCount++;
            if (loadedCount === videos.length) {
              this.videosLoaded = true;
            }
          });
        }
      });

      // If all videos are already loaded
      if (loadedCount === videos.length) {
        this.videosLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
.video-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above everything else */
}

.loader-animation {
  /* Add your loader animation styles here */
}
</style>

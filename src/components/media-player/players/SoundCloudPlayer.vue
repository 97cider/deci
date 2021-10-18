<template>
  <iframe src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/200278263&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
</template>

<script>
export default {
  name: 'SoundCloudPlayer',
  data: function () {
    return {
      urlCandidate: ""
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ass {
  background-color: cyan;
}
</style>

<template>
  <div class="ass">
    woah this sucks ass
    <input v-model="urlCandidate" placeholder="URL...">
    {{ urlCandidate }}
    <button v-on:click="validateURL">Validate URL</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      urlCandidate: ""
    }
  },
  props: {
    msg: String
  },
  methods: {
    validateURL : function ()
    {
      alert(this.urlCandidate);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ass {
  background-color: cyan;
}
</style>

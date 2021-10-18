<template>
  <div class="ass">
    woah this sucks ass
    <input v-model="urlCandidate" placeholder="URL...">
    {{ urlCandidate }}
    <button v-on:click="validateURL">Validate URL</button>
  </div>
</template>

<script>
import { parse_url } from "../utils/parsing.js"
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
      //TODO: Check our currently configured players for their url definitions
      //TODO: Clean up
      var players = require("../utils/players.json")
      var x = parse_url(this.urlCandidate)
      var typeOf = NaN
      players.players.forEach(element => {
        if (element.urls.includes(x)){
          typeOf = element.name
        }
      });
      this.urlCandidate = typeOf
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

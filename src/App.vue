<template>
  <div id="app">
    <RichTextViewer :text="html" />
  </div>
</template>

<script>
import RichTextViewer from "./components/RichTextViewer.vue";

export default {
  name: "App",
  components: {
    RichTextViewer,
  },
  data() {
    return {
      html: `<span style='font-size: 16px;'>Um número composto possui <br><br>
      <math xmlns='http://www.w3.org/1998/Math/MathML'><mroot><mn>2</mn><mn>1</mn></mroot>
      <mo>&nbsp;</mo><mspace linebreak='newline'></mspace><mfenced open='{' close='}'><mn>3</mn></mfenced>
      <mo>&nbsp;</mo><mo>&nbsp;</mo><mn>4</mn><mo>∈</mo><mn>5</mn><mo>&nbsp;</mo><mn>6</mn><mo>∩</mo><mn>7</mn>
      <mspace linebreak='newline'></mspace><msup><mn>8</mn><mn>9</mn></msup><mspace linebreak='newline'></mspace>
      <mspace linebreak='newline'></mspace><mn>10</mn><mo>∞</mo><mi mathvariant='normal'>π</mi><mo>∅</mo>
      <mspace linebreak='newline'></mspace></math></span>`,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <component class="teste" :is="tag" v-ref="parseMathML" v-html="text" />
</template>

<script>
import { parseMathML } from "@/utils/dom";
import loadMathTypeViewer from "@/helpers/loadMathTypeViewer";

loadMathTypeViewer();

export default {
  name: "RichTextViewer",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    parseMathML,
  },
};
</script>

<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "removefromWatchButton",
  data() {
    return {};
  },
  props: {
    film: String,
    rating: Number,
  },
  methods: {},
};
</script>

<template>
  <div class="banner1-container thq-section-padding" v-bind:class="rootClassName">
    <div class="banner1-max-width thq-section-max-width">
      <div class="banner1-container1">
        <h2 class="banner1-title thq-heading-2">{{ heading1 }}</h2>
        <h3 class="banner1-text thq-heading-3">{{ content1 }}</h3>
      </div>
      <button type="button" class="thq-button-filled">{{ action1 }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner1',
  props: {
    rootClassName: String,
    content1: {
      type: String,
      default: 'Descubra os museus portugueses',
    },
    heading1: {
      type: String,
      default: 'Bem-vindo ao website Museus LESI',
    },
    action1: {
      type: String,
      default: 'Explorar agora',
    },
  },
}
</script>

<style scoped>
.banner1-container {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
}
.banner1-max-width {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.banner1-container1 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.banner1-title {
  text-align: center;
}
.banner1-text {
  text-align: center;
}
.banner1-root-class-name {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
}
</style>

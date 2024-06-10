<template>
  <div class="features18-layout349 thq-section-padding">
    <div class="features18-max-width thq-section-max-width">
      <div class="features18-content">
        <div class="features18-section-title">
          <span class="thq-body-small">{{ feature1Slogan }}</span>
          <div class="features18-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
      <div class="features18-image-container">
        <img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features18',
  props: {
    feature1Description: {
      type: String,
      default:
        'Explore uma vasta coleção de arte portuguesa e estrangeira, incluindo pinturas, esculturas e artes decorativas.',
    },
    feature1Title: {
      type: String,
      default: 'Museu Nacional de Arte Antiga',
    },
    feature1Slogan: {
      type: String,
      default: 'Descubra tesouros da arte antiga',
    },
    feature1ImageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Imagem do Museu Nacional de Arte Antiga',
    },
  },
}
</script>

<style scoped>
.features18-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features18-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features18-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features18-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features18-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}
</style>

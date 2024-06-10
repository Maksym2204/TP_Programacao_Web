<template>
  <div class="features17-layout349 thq-section-padding">
    <div class="features17-max-width thq-section-max-width">
      <div class="features17-image-container">
        <img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9"
        />
      </div>
      <div class="features17-content">
        <div class="features17-section-title">
          <span class="thq-body-small">{{ feature1Slogan }}</span>
          <div class="features17-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features17',
  props: {
    feature1Description: {
      type: String,
      default:
        'Tenha acesso a uma variedade de museus parceiros com diferentes temáticas e coleções para explorar.',
    },
    feature1ImageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    feature1Slogan: {
      type: String,
      default: 'Descubra uma rede de museus em todo o país',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Imagem de museus parceiros',
    },
    feature1Title: {
      type: String,
      default: 'Exploração de Museus Parceiros',
    },
  },
}
</script>

<style scoped>
.features17-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features17-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features17-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features17-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features17-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features17-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features17-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>

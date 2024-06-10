<template>
  <div class="features181-layout349 thq-section-padding">
    <div class="features181-max-width thq-section-max-width">
      <div class="features181-content">
        <div class="features181-section-title">
          <span class="thq-body-small">{{ feature1Slogan }}</span>
          <div class="features181-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
      <div class="features181-image-container">
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
  name: 'Features181',
  props: {
    feature1Title: {
      type: String,
      default: 'Arte Moderna',
    },
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1Slogan: {
      type: String,
      default: 'Descubra a arte do século XX',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Exposição de Arte Moderna',
    },
    feature1Description: {
      type: String,
      default:
        'Explore as obras mais emblemáticas do movimento de arte moderna em exposição nos museus parceiros.',
    },
  },
}
</script>

<style scoped>
.features181-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features181-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features181-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features181-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features181-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features181-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features181-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}
</style>

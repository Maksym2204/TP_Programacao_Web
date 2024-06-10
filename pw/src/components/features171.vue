<template>
  <div class="features171-layout349 thq-section-padding">
    <div class="features171-max-width thq-section-max-width">
      <div class="features171-image-container">
        <img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9"
        />
      </div>
      <div class="features171-content">
        <div class="features171-section-title">
          <span class="thq-body-small">{{ feature1Slogan }}</span>
          <div class="features171-content1">
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
  name: 'Features171',
  props: {
    feature1ImageAlt: {
      type: String,
      default: 'Catálogo Online',
    },
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1547636546-42e54cb26e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1Title: {
      type: String,
      default: 'Catálogo Online',
    },
    feature1Description: {
      type: String,
      default:
        'Explore uma variedade de exibições dos museus parceiros em Portugal a partir do conforto da sua casa, a qualquer hora.',
    },
    feature1Slogan: {
      type: String,
      default: 'Acesso a Exibições dos Museus Parceiros',
    },
  },
}
</script>

<style scoped>
.features171-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features171-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features171-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features171-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features171-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features171-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>

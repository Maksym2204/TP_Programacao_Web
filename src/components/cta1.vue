<template>
  <div class="cta1-container thq-section-padding">
    <div class="cta1-max-width thq-section-max-width">
      <div class="cta1-content">
        <h2 class="cta1-heading1 thq-heading-2">{{ heading1 }}</h2>
        <p class="cta1-content1 thq-body-large">{{ content1 }}</p>
        <div class="cta1-actions">
          <button class="thq-button-filled cta1-button">
            <span class="cta1-action1 thq-body-small">{{ action1 }}</span>
          </button>
          <button class="thq-button-outline cta1-button1">
            <span class="cta1-action2 thq-body-small">{{ action2 }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA1',
  props: {
    content1: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    heading1: {
      type: String,
      default: 'Call to action that excites the visitor to try your product',
    },
    action1: {
      type: String,
      default: 'Main action',
    },
    action2: {
      type: String,
      default: 'Secondary action',
    },
  },
}
</script>

<style scoped>
.cta1-container {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
}
.cta1-max-width {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
.cta1-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.cta1-heading1 {
  text-align: center;
}
.cta1-content1 {
  text-align: center;
}
.cta1-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
.cta1-action1 {
  text-align: center;
}
.cta1-action2 {
  text-align: center;
}
@media(max-width: 479px) {
  .cta1-actions {
    width: 100%;
    flex-direction: column;
  }
  .cta1-button {
    width: 100%;
  }
  .cta1-button1 {
    width: 100%;
  }
}
</style>

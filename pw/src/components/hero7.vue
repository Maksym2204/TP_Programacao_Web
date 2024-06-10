<template>
  <div class="thq-section-padding">
    <div class="hero7-max-width thq-section-max-width">
      <div class="hero7-content">
        <h1 class="hero7-text thq-heading-1">{{ heading1 }}</h1>
        <p class="hero7-text1 thq-body-large">{{ content1 }}</p>
        <div class="hero7-actions">
          <div class="hero7-container">
            <button class="thq-button-filled hero7-button">
              <span class="hero7-text2 thq-body-small">{{ action1 }}</span>
            </button>
          </div>
          <div class="hero7-container1">
            <button class="thq-button-outline hero7-button1">
              <span class="hero7-text3 thq-body-small">{{ action2 }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero7',
  props: {
    action1: {
      type: String,
      default: 'Explorar Museus Parceiros',
    },
    heading1: {
      type: String,
      default: 'Descubra os Museus LESI',
    },
    action2: {
      type: String,
      default: 'Ver Exibições em Destaque',
    },
    content1: {
      type: String,
      default:
        'Encontre informações sobre os principais museus portugueses e suas exposições, mergulhe na história, arte, cultura e ciências através do acervo do Museus LESI.',
    },
  },
}
</script>

<style scoped>
.hero7-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.hero7-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  max-width: 1000px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.hero7-text {
  text-align: center;
}
.hero7-text1 {
  text-align: center;
}
.hero7-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.hero7-container {
  display: flex;
  align-items: flex-start;
}
.hero7-text2 {
  text-align: center;
}
.hero7-container1 {
  display: flex;
  align-items: flex-start;
}
.hero7-text3 {
  text-align: center;
}
@media(max-width: 479px) {
  .hero7-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero7-container {
    width: 100%;
  }
  .hero7-button {
    width: 100%;
  }
  .hero7-container1 {
    width: 100%;
  }
  .hero7-button1 {
    width: 100%;
  }
}
</style>

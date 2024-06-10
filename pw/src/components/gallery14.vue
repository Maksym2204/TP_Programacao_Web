<template>
  <div class="gallery14-gallery3 thq-section-padding">
    <div class="gallery14-max-width thq-section-max-width">
      <div class="gallery14-section-title">
        <h2 class="gallery14-text thq-heading-2">{{ heading1 }}</h2>
        <span class="gallery14-text1 thq-body-large">{{ content1 }}</span>
      </div>
      <div class="gallery14-content">
        <div class="gallery14-container">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="gallery14-image1 thq-img-ratio-4-3"
          />
          <span class="thq-body-small">{{ image1Title }}</span>
          <span class="gallery14-text3 thq-body-small">
            {{ image1Description }}
          </span>
        </div>
        <div class="gallery14-container1">
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="gallery14-image2 thq-img-ratio-4-3"
          />
          <span class="thq-body-small">{{ image2Title }}</span>
          <span class="gallery14-text5 thq-body-small">
            {{ image2Description }}
          </span>
        </div>
        <div class="gallery14-container2">
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="gallery14-image3 thq-img-ratio-4-3"
          />
          <span class="thq-body-small">{{ image3Title }}</span>
          <span class="gallery14-text7 thq-body-small">
            {{ image3Description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery14',
  props: {
    image3Title: {
      type: String,
      default: 'Exposições Temporárias',
    },
    image2Title: {
      type: String,
      default: 'Museu Nacional do Azulejo',
    },
    image3Alt: {
      type: String,
      default: 'Imagem de Exposição Temporária',
    },
    image2Src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image1Title: {
      type: String,
      default: 'Museu Nacional de Arte Antiga',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1697568465786-a20cd70e7c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MzE0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Imagem do Museu Nacional de Arte Antiga',
    },
    image1Description: {
      type: String,
      default:
        'Descubra a vasta coleção de arte antiga neste museu emblemático.',
    },
    image2Description: {
      type: String,
      default:
        'Conheça a história e a beleza dos azulejos portugueses ao longo dos séculos.',
    },
    image2Alt: {
      type: String,
      default: 'Imagem do Museu Nacional do Azulejo',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1579856703027-dd3bd29d78b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MzE0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    content1: {
      type: String,
      default:
        'Descubra uma seleção cuidadosa de obras de arte e artefatos históricos em destaque nos museus parceiros.',
    },
    heading1: {
      type: String,
      default: 'Galeria',
    },
    image3Description: {
      type: String,
      default:
        'Explore as exposições temporárias e eventos especiais nos museus parceiros.',
    },
  },
}
</script>

<style scoped>
.gallery14-gallery3 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery14-max-width {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gallery14-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery14-text {
  text-align: center;
}
.gallery14-text1 {
  text-align: center;
}
.gallery14-content {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.gallery14-container {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery14-image1 {
  width: 100%;
  height: 300px;
  max-width: 600px;
  align-self: center;
}
.gallery14-text3 {
  text-align: center;
}
.gallery14-container1 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery14-image2 {
  width: 100%;
  height: 300px;
  max-width: 600px;
  align-self: center;
}
.gallery14-text5 {
  text-align: center;
}
.gallery14-container2 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery14-image3 {
  width: 100%;
  height: 300px;
  max-width: 600px;
}
.gallery14-text7 {
  text-align: center;
}
@media(max-width: 991px) {
  .gallery14-content {
    align-items: center;
    flex-direction: column;
  }
  .gallery14-image1 {
    flex: 0 0 auto;
    width: 100%;
    height: 360px;
  }
  .gallery14-image2 {
    flex: 0 0 auto;
    width: 100%;
    height: 360px;
  }
  .gallery14-image3 {
    flex: 0 0 auto;
    width: 100%;
    height: 360px;
  }
}
</style>

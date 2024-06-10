<template>
  <div class="gallery1-gallery3 thq-section-padding">
    <div class="gallery1-max-width thq-section-max-width">
      <div class="gallery1-section-title">
        <h2 class="gallery1-text thq-heading-2">{{ heading1 }}</h2>
        <span class="gallery1-text1 thq-body-large">{{ content1 }}</span>
      </div>
      <div class="gallery1-content">
        <div class="gallery1-container">
          <img :alt="image1Alt" :src="image1Src" class="thq-img-ratio-4-3" />
        </div>
        <div class="gallery1-container1">
          <img :alt="image2Alt" :src="image2Src" class="thq-img-ratio-4-3" />
        </div>
        <div class="gallery1-container2">
          <img :alt="image3Alt" :src="image3Src" class="thq-img-ratio-4-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery1',
  props: {
    image1Alt: {
      type: String,
      default: 'Pintura clássica em exposição no Museu Nacional de Arte Antiga',
    },
    content1: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
    image2Src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1591961172040-ee974a422616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    heading1: {
      type: String,
      default: 'Photo Gallery of the Services you provide',
    },
    image2Alt: {
      type: String,
      default: 'Escultura contemporânea em destaque no Museu de Serralves',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1571840933517-88a527cd7008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Instalação artística no Museu Berardo',
    },
  },
}
</script>

<style scoped>
.gallery1-gallery3 {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery1-max-width {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gallery1-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery1-text {
  text-align: center;
}
.gallery1-text1 {
  text-align: center;
}
.gallery1-content {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.gallery1-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 991px) {
  .gallery1-content {
    align-items: center;
    flex-direction: column;
  }
}
</style>

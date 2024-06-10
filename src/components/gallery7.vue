<template>
  <div class="gallery7-gallery3 thq-section-padding">
    <div class="gallery7-max-width">
      <div class="gallery7-section-title">
        <h2 class="gallery7-text thq-heading-2">{{ heading1 }}</h2>
        <span class="gallery7-text1 thq-body-large">{{ content1 }}</span>
      </div>
      <div class="gallery7-container">
        <div class="gallery7-content">
          <div class="gallery7-container1">
            <img
              :alt="image1Alt"
              :src="image1Src"
              class="gallery7-image1 thq-img-ratio-1-1"
            />
            <img
              :alt="image2Alt"
              :src="image2Src"
              class="gallery7-image2 thq-img-ratio-1-1"
            />
          </div>
          <div class="gallery7-container2">
            <img
              :alt="image3Alt"
              :src="image3Src"
              class="gallery7-image3 thq-img-ratio-4-3"
            />
            <img
              :alt="image4Alt"
              :src="image4Src"
              class="gallery7-image4 thq-img-ratio-1-1"
            />
            <img
              :alt="image5Alt"
              :src="image5Src"
              class="gallery7-image5 thq-img-ratio-4-3"
            />
          </div>
          <div class="gallery7-container3">
            <img
              :alt="image6Alt"
              :src="image6Src"
              class="gallery7-image6 thq-img-ratio-1-1"
            />
            <img
              :alt="image7Alt"
              :src="image7Src"
              class="gallery7-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery7',
  props: {
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1542310894-18d5493778ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 3',
    },
    image6Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 6',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1565688842882-e0b2693d349a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    content1: {
      type: String,
      default:
        'Explora as exibições que altualmente estão em destaque nos nossos museus parceiros.',
    },
    heading1: {
      type: String,
      default: 'Exibições em destaque',
    },
    image2Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 2',
    },
    image6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1598566944246-a8dd2c842fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 5',
    },
    image7Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 7',
    },
    image1Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 1',
    },
    image4Alt: {
      type: String,
      default: 'Artwork from Current Exhibition 4',
    },
    image5Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1580130544401-347c796dceec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1597489420377-e23d4a080346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1602524206567-9bf059d35ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.gallery7-gallery3 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery7-max-width {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gallery7-section-title {
  gap: 24px;
  width: auto;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery7-text {
  text-align: center;
}
.gallery7-text1 {
  text-align: center;
}
.gallery7-container {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.gallery7-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.gallery7-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.gallery7-image1 {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
.gallery7-image2 {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
.gallery7-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.gallery7-image3 {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.gallery7-image4 {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
.gallery7-image5 {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.gallery7-container3 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.gallery7-image6 {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
.gallery7-image7 {
  width: 100%;
  height: 440px;
  object-fit: cover;
}
@media(max-width: 991px) {
  .gallery7-content {
    align-items: center;
    flex-direction: column;
  }
  .gallery7-container1 {
    width: 100%;
  }
  .gallery7-image1 {
    flex: 0 0 auto;
    width: 100%;
  }
  .gallery7-container2 {
    width: 100%;
  }
  .gallery7-container3 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .gallery7-section-title {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>

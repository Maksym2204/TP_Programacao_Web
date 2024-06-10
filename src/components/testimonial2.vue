<template>
  <div class="thq-section-padding">
    <div class="testimonial2-max-width thq-section-max-width">
      <div class="testimonial2-stars">
        <svg viewBox="0 0 1024 1024" class="thq-icon-small">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="thq-icon-small">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          ></path>
        </svg>
      </div>
      <p class="testimonial2-text thq-body-large">{{ review1 }}</p>
      <div class="testimonial2-avatar">
        <img
          :alt="author1Alt"
          :src="author1Src"
          class="testimonial2-avatar-image thq-img-round thq-img-ratio-1-1"
        />
        <div class="testimonial2-avatar-content">
          <span class="testimonial2-text1 thq-body-small">{{ author1Name }}</span>
          <span class="testimonial2-text2 thq-body-small">
            {{ author1Position }}
          </span>
        </div>
        <img
          :alt="company1LogoAlt"
          :src="company1LogoSrc"
          class="testimonial2-logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial2',
  props: {
    author1Name: {
      type: String,
      default: 'Ana Silva',
    },
    author1Position: {
      type: String,
      default: 'Historiadora de Arte',
    },
    author1Alt: {
      type: String,
      default: 'Foto de Ana Silva',
    },
    company1LogoSrc: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    review1: {
      type: String,
      default:
        'O website Museus LESI é uma ferramenta incrível para quem ama explorar a riqueza cultural dos museus portugueses. Recomendo a todos!',
    },
    company1LogoAlt: {
      type: String,
      default: 'Logo da empresa de Ana Silva',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1579105728744-9d6b14a45389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.testimonial2-max-width {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.testimonial2-stars {
  fill: var(--dl-color-theme-primary1);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.testimonial2-text {
  text-align: center;
}
.testimonial2-avatar {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
}
.testimonial2-avatar-image {
  width: 56px;
  height: 56px;
}
.testimonial2-avatar-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.testimonial2-text1 {
  text-align: left;
  font-weight: 600;
}
.testimonial2-text2 {
  text-align: left;
}
.testimonial2-logo {
  height: 2rem;
}
@media(max-width: 479px) {
  .testimonial2-avatar {
    flex-direction: column;
  }
  .testimonial2-avatar-content {
    align-items: center;
    justify-content: center;
  }
}
</style>

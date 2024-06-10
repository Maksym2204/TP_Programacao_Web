<template>
  <div class="logos9-container thq-section-padding">
    <div class="logos9-max-width thq-section-max-width">
      <h2 class="logos9-text thq-heading-2">{{ heading1 }}</h2>
    </div>
    <div
      class="logos9-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal"
    >
      <div class="thq-animated-group-horizontal">
        <img
          :alt="logo1Alt"
          :src="logo1Src"
          class="logos9-logo1 thq-img-ratio-16-9"
        />
        <img
          :alt="logo2Alt"
          :src="logo2Src"
          class="logos9-logo2 thq-img-ratio-16-9"
        />
        <img
          :alt="logo3Alt"
          :src="logo3Src"
          class="logos9-logo3 thq-img-ratio-16-9"
        />
        <img
          :alt="logo4Alt"
          :src="logo4Src"
          class="logos9-logo4 thq-img-ratio-16-9"
        />
        <img
          :alt="logo5Alt"
          :src="logo5Src"
          class="logos9-logo5 thq-img-ratio-16-9"
        />
        <img
          :alt="logo6Alt"
          :src="logo6Src"
          class="logos9-logo6 thq-img-ratio-16-9"
        />
      </div>
      <div class="thq-animated-group-horizontal">
        <img
          :alt="logo1Alt"
          :src="logo1Src"
          class="logos9-logo11 thq-img-ratio-16-9"
        />
        <img
          :alt="logo2Alt"
          :src="logo2Src"
          class="logos9-logo21 thq-img-ratio-16-9"
        />
        <img
          :alt="logo3Alt"
          :src="logo3Src"
          class="logos9-logo31 thq-img-ratio-16-9"
        />
        <img
          :alt="logo4Alt"
          :src="logo4Src"
          class="logos9-logo41 thq-img-ratio-16-9"
        />
        <img
          :alt="logo5Alt"
          :src="logo5Src"
          class="logos9-logo51 thq-img-ratio-16-9"
        />
        <img
          :alt="logo6Alt"
          :src="logo6Src"
          class="logos9-logo61 thq-img-ratio-16-9"
        />
      </div>
    </div>
    <div>
      <div class="logos9-container5">
        <DangerousHTML
          html="<style>
    @keyframes scroll-x {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 16px));
      }
    }
  
    @keyframes scroll-y {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - 16px));
      }
    }
  </style>
  "
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Logos9',
  props: {
    logo1Alt: {
      type: String,
      default: 'Museu LESI logo',
    },
    logo1Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
    },
    logo3Alt: {
      type: String,
      default: 'Museu de História logo',
    },
    logo5Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
    },
    logo4Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
    },
    logo5Alt: {
      type: String,
      default: 'Museu Temático logo',
    },
    logo6Alt: {
      type: String,
      default: 'Museu Parceiro logo',
    },
    logo4Alt: {
      type: String,
      default: 'Museu de Ciências logo',
    },
    logo2Alt: {
      type: String,
      default: 'Museu de Arte Moderna logo',
    },
    heading1: {
      type: String,
      default: 'Explore our Museums',
    },
    logo6Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
    },
    logo3Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
    },
    logo2Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.logos9-container {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.logos9-max-width {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.logos9-text {
  text-align: center;
}
.logos9-container1 {
  width: 100%;
}
.logos9-logo1 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo2 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo3 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo4 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo5 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo6 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo11 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo21 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo31 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo41 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo51 {
  width: 200px;
  object-fit: contain;
}
.logos9-logo61 {
  width: 200px;
  object-fit: contain;
}
.logos9-container5 {
  display: contents;
}
@media(max-width: 767px) {
  .logos9-container {
    gap: var(--dl-space-space-twounits);
  }
  .logos9-max-width {
    gap: var(--dl-space-space-twounits);
  }
}
</style>

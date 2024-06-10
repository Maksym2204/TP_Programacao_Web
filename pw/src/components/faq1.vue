<template>
  <div class="faq1-faq7 thq-section-padding">
    <div class="faq1-max-width thq-section-max-width">
      <div class="thq-flex-column">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <p class="faq1-text1 thq-body-large">{{ content1 }}</p>
      </div>
      <div class="thq-flex-column faq1-list">
        <div class="faq1-list-item1">
          <p class="faq1-faq1-question thq-body-large">{{ faq1Question }}</p>
          <span class="thq-body-small">{{ faq1Answer }}</span>
        </div>
        <div class="faq1-list-item2">
          <p class="faq1-faq2-question thq-body-large">{{ faq2Question }}</p>
          <span class="thq-body-small">{{ faq2Answer }}</span>
        </div>
        <div class="faq1-list-item3">
          <p class="faq1-faq3-question thq-body-large">{{ faq3Question }}</p>
          <span class="thq-body-small">{{ faq3Answer }}</span>
        </div>
        <div class="faq1-list-item4">
          <p class="faq1-faq4-question thq-body-large">{{ faq4Question }}</p>
          <span class="thq-body-small">{{ faq4Answer }}</span>
        </div>
        <div class="faq1-list-item5">
          <p class="faq1-faq5-question thq-body-large">{{ faq5Question }}</p>
          <span class="thq-body-small">{{ faq5Answer }}</span>
        </div>
      </div>
      <div class="thq-flex-column">
        <div class="faq1-content1">
          <h2 class="thq-heading-2">{{ heading2 }}</h2>
          <p class="faq1-text3 thq-body-large">{{ content2 }}</p>
        </div>
        <div class="faq1-container">
          <button class="thq-button-outline faq1-button">
            <span class="thq-body-small">{{ action1 }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ1',
  props: {
    heading2: {
      type: String,
      default: 'Still have a question?',
    },
    faq4Answer: {
      type: String,
      default:
        'Você pode encontrar a lista completa de museus parceiros em nosso site, onde também poderá conhecer mais sobre cada um deles e os benefícios oferecidos aos sócios.',
    },
    faq1Question: {
      type: String,
      default: 'Quais são os benefícios de se tornar um sócio dos Museus LESI?',
    },
    faq4Question: {
      type: String,
      default: 'Como faço para descobrir os museus parceiros dos Museus LESI?',
    },
    action1: {
      type: String,
      default: 'Contact',
    },
    content2: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    faq5Question: {
      type: String,
      default:
        'Posso visitar os museus parceiros gratuitamente sendo sócio dos Museus LESI?',
    },
    faq2Question: {
      type: String,
      default: 'Como posso aderir a um plano de sócio?',
    },
    faq3Question: {
      type: String,
      default: 'Quais tipos de museus posso encontrar nos Museus LESI?',
    },
    faq2Answer: {
      type: String,
      default:
        'Para aderir a um plano de sócio, basta preencher o formulário de inscrição disponível no nosso site e escolher o plano que melhor se adequa às suas preferências.',
    },
    faq3Answer: {
      type: String,
      default:
        'Nos Museus LESI, você encontrará uma variedade de museus que abrangem temas como história, arte, cultura e ciências, proporcionando uma experiência diversificada para os visitantes.',
    },
    faq5Answer: {
      type: String,
      default:
        'Sim, como sócio dos Museus LESI, você terá acesso gratuito aos museus parceiros, além de outros benefícios exclusivos disponíveis para os nossos membros.',
    },
    faq1Answer: {
      type: String,
      default:
        'Ao se tornar sócio dos Museus LESI, você terá acesso a descontos exclusivos em ingressos, eventos especiais, workshops e lojas de museus parceiros.',
    },
    heading1: {
      type: String,
      default: 'FAQs',
    },
    content1: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
  },
}
</script>

<style scoped>
.faq1-faq7 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.faq1-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.faq1-text1 {
  text-align: center;
}
.faq1-list-item1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq1-question {
  font-style: normal;
  font-weight: 600;
}
.faq1-list-item2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq2-question {
  font-style: normal;
  font-weight: 600;
}
.faq1-list-item3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq3-question {
  font-style: normal;
  font-weight: 600;
}
.faq1-list-item4 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq4-question {
  font-style: normal;
  font-weight: 600;
}
.faq1-list-item5 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq5-question {
  font-style: normal;
  font-weight: 600;
}
.faq1-content1 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.faq1-text3 {
  text-align: center;
}
.faq1-container {
  display: flex;
  position: relative;
}
@media(max-width: 991px) {
  .faq1-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 767px) {
  .faq1-text1 {
    text-align: left;
  }
  .faq1-list {
    gap: var(--dl-space-space-twounits);
  }
  .faq1-button {
    width: 100%;
  }
}
</style>

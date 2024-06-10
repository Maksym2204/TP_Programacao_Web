<template>
  <div class="thq-section-padding">
    <div class="team5-max-width thq-section-max-width">
      <div class="team5-section-title">
        <span class="thq-body-small team5-text">{{ content1 }}</span>
        <button class="team5-button thq-button-filled">
          <span class="thq-body-small">{{ actionContent }}</span>
        </button>
        <div class="team5-content">
          <h2 class="thq-heading-2 team5-text02">{{ heading1 }}</h2>
          <p class="team5-text03 thq-body-large">{{ content2 }}</p>
        </div>
      </div>
      <div class="team5-content1">
        <div class="team5-row">
          <div class="team5-container">
            <div class="team5-card">
              <img
                :alt="member1Alt"
                :src="member1Src"
                class="team5-placeholder-image thq-img-round thq-img-ratio-1-1"
              />
              <div class="team5-content2">
                <div class="team5-title">
                  <span class="team5-text04 thq-body-small">{{ member1 }}</span>
                  <span class="team5-text05 thq-body-small">
                    {{ member1Job }}
                  </span>
                </div>
                <span class="team5-text06 thq-body-small">
                  {{ member1Content }}
                </span>
              </div>
              <div class="team5-social-icons">
                <svg viewBox="0 0 877.7142857142857 1024" class="thq-icon-small">
                  <path
                    d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-small">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="team5-card1">
              <img
                :alt="member2Alt"
                :src="member2Src"
                class="team5-placeholder-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div class="team5-content3">
                <div class="team5-title1">
                  <span class="team5-text07 thq-body-small">{{ member2 }}</span>
                  <span class="team5-text08 thq-body-small">
                    {{ member2Job }}
                  </span>
                </div>
                <span class="team5-text09 thq-body-small">
                  {{ member2Content }}
                </span>
              </div>
              <div class="team5-social-icons1">
                <svg viewBox="0 0 877.7142857142857 1024" class="thq-icon-small">
                  <path
                    d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-small">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="team5-row1">
          <div class="team5-container1">
            <div class="team5-card2">
              <img
                :alt="member3Alt"
                :src="member3Src"
                class="team5-placeholder-image2 thq-img-round thq-img-ratio-1-1"
              />
              <div class="team5-content4">
                <div class="team5-title2">
                  <span class="team5-text10 thq-body-small">{{ member3 }}</span>
                  <span class="team5-text11 thq-body-small">
                    {{ member3Job }}
                  </span>
                </div>
                <span class="team5-text12 thq-body-small">
                  {{ member3Content }}
                </span>
              </div>
              <div class="team5-social-icons2">
                <svg viewBox="0 0 877.7142857142857 1024" class="thq-icon-small">
                  <path
                    d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-small">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="team5-card3">
              <img
                :alt="member4Alt"
                :src="member4Src"
                class="team5-placeholder-image3 thq-img-round thq-img-ratio-1-1"
              />
              <div class="team5-content5">
                <div class="team5-title3">
                  <span class="team5-text13 thq-body-small">{{ member4 }}</span>
                  <span class="team5-text14 thq-body-small">
                    {{ member4Job }}
                  </span>
                </div>
                <span class="team5-text15 thq-body-small">
                  {{ member4Content }}
                </span>
              </div>
              <div class="team5-social-icons3">
                <svg viewBox="0 0 877.7142857142857 1024" class="thq-icon-small">
                  <path
                    d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-small">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team5',
  props: {
    member4Job: {
      type: String,
      default: 'Especialista em Museologia',
    },
    member3: {
      type: String,
      default: 'Marta Costa',
    },
    heading1: {
      type: String,
      default: 'Meet our team',
    },
    member1Alt: {
      type: String,
      default: 'Foto de Ana Silva',
    },
    member3Alt: {
      type: String,
      default: 'Foto de Marta Costa',
    },
    content2: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    member1: {
      type: String,
      default: 'Ana Silva',
    },
    member4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExM3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member2: {
      type: String,
      default: 'Rui Santos',
    },
    member2Content: {
      type: String,
      default:
        'Especializado em história portuguesa, Rui contribui com seu conhecimento para enriquecer as informações sobre os museus apresentados.',
    },
    member2Job: {
      type: String,
      default: 'Historiador',
    },
    member2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1564932437263-dbf5578771bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExMnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member2Alt: {
      type: String,
      default: 'Foto de Rui Santos',
    },
    member4Content: {
      type: String,
      default:
        'Com vasta experiência em museus portugueses, Pedro traz seu conhecimento especializado em museologia para garantir a qualidade das informações apresentadas.',
    },
    content1: {
      type: String,
      default: 'Join Our Team Today!',
    },
    member1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1600783486189-553f6a73f6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExM3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    member4Alt: {
      type: String,
      default: 'Foto de Pedro Almeida',
    },
    member4: {
      type: String,
      default: 'Pedro Almeida',
    },
    member3Content: {
      type: String,
      default:
        'Marta combina sua formação em ciências culturais com a sua paixão pela preservação do patrimônio cultural, trazendo uma perspectiva única para o Museus LESI.',
    },
    member3Job: {
      type: String,
      default: 'Cientista Cultural',
    },
    member1Job: {
      type: String,
      default: 'Curadora de Arte',
    },
    actionContent: {
      type: String,
      default: 'Open positions',
    },
    member1Content: {
      type: String,
      default:
        'Com vasta experiência na curadoria de exposições de arte contemporânea, Ana traz sua paixão pela arte para o Museus LESI.',
    },
  },
}
</script>

<style scoped>
.team5-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.team5-section-title {
  gap: var(--dl-space-space-unit);
  width: 30%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.team5-button {
  width: 100%;
  max-width: 300px;
}
.team5-content {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-text03 {
  text-align: center;
}
.team5-content1 {
  gap: 64px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.team5-row {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.team5-container {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.team5-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.team5-placeholder-image {
  width: 80px;
  height: 80px;
}
.team5-content2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-title {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-text04 {
  font-style: normal;
  font-weight: 600;
}
.team5-text05 {
  text-align: center;
}
.team5-text06 {
  text-align: center;
}
.team5-social-icons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.team5-card1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.team5-placeholder-image1 {
  width: 80px;
  height: 80px;
}
.team5-content3 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-title1 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-text07 {
  font-style: normal;
  font-weight: 600;
}
.team5-text08 {
  text-align: center;
}
.team5-text09 {
  text-align: center;
}
.team5-social-icons1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.team5-row1 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.team5-container1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.team5-card2 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.team5-placeholder-image2 {
  width: 80px;
  height: 80px;
}
.team5-content4 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-title2 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-text10 {
  font-style: normal;
  font-weight: 600;
}
.team5-text11 {
  text-align: center;
}
.team5-text12 {
  text-align: center;
}
.team5-social-icons2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.team5-card3 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.team5-placeholder-image3 {
  width: 80px;
  height: 80px;
}
.team5-content5 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-title3 {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.team5-text13 {
  font-style: normal;
  font-weight: 600;
}
.team5-text14 {
  text-align: center;
}
.team5-text15 {
  text-align: center;
}
.team5-social-icons3 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
@media(max-width: 991px) {
  .team5-section-title {
    width: 50%;
  }
}
@media(max-width: 767px) {
  .team5-max-width {
    align-items: center;
    flex-direction: column;
  }
  .team5-section-title {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .team5-text {
    text-align: center;
  }
  .team5-button {
    width: 100%;
  }
  .team5-text02 {
    text-align: center;
  }
  .team5-text03 {
    text-align: center;
  }
  .team5-row {
    align-items: center;
    flex-direction: column;
  }
  .team5-container {
    flex-direction: column;
  }
  .team5-row1 {
    align-items: center;
    flex-direction: column;
  }
  .team5-container1 {
    flex-direction: column;
  }
}
</style>

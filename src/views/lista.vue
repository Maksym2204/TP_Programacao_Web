<template>
  <div class="lista-container">
    <div class="lista-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer lista-navbar-interactive"
      >
        <span class="logo">Museus LESI</span>
        <div data-thq="thq-navbar-nav" class="lista-desktop-menu">
          <nav class="lista-links">
            <span class="bodySmall">História</span>
            <span class="lista-nav22 bodySmall">Arte</span>
            <span class="lista-nav32 bodySmall">Cultura</span>
            <span class="lista-nav42 bodySmall">Ciências</span>
            <span class="lista-nav52 bodySmall">Temáticos</span>
          </nav>
          <div class="lista-buttons">
            <button class="lista-login buttonFlat">Entrar</button>
            <button class="buttonFilled">Registo</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="lista-burger-menu">
          <svg viewBox="0 0 1024 1024" class="lista-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="lista-mobile-menu1 mobileMenu">
          <div class="lista-nav">
            <div class="lista-top">
              <span class="logo">ARTMUSEUM</span>
              <div data-thq="thq-close-menu" class="lista-close-menu">
                <svg viewBox="0 0 1024 1024" class="lista-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="lista-links1">
              <span class="lista-nav121 bodySmall">Visit</span>
              <span class="lista-nav221 bodySmall">Exhibitions</span>
              <span class="lista-nav321 bodySmall">Events</span>
              <span class="lista-nav421 bodySmall">Collections</span>
              <span class="lista-nav521 bodySmall">Contact</span>
            </nav>
            <div class="lista-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="lista-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="lista-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="lista-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <app-banner1 rootClassName="banner1-root-class-name"></app-banner1>
    <app-hero7></app-hero7>
    <app-features18></app-features18>
    <app-gallery14></app-gallery14>
    <app-testimonial2></app-testimonial2>
    <app-contact11></app-contact11>
    <app-team5></app-team5>
    <div class="lista-footer">
      <footer class="footerContainer lista-footer1">
        <div class="lista-container1">
          <span class="logo">MUSEUS LESI</span>
          <nav class="lista-nav1">
            <span class="bodySmall">História</span>
            <span class="lista-nav222 bodySmall">Arte</span>
            <span class="lista-nav322 bodySmall">Cultura</span>
            <span class="lista-nav422 bodySmall">Ciência</span>
            <span class="lista-nav522 bodySmall">Temáticos</span>
          </nav>
        </div>
        <div class="lista-separator"></div>
        <div class="lista-container2">
          <span class="bodySmall lista-text">
            © 2023 museusLESI, All Rights Reserved.
          </span>
          <div class="lista-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="lista-icon10 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="lista-icon12 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="lista-icon14 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import AppBanner1 from '../components/banner1'
import AppHero7 from '../components/hero7'
import AppFeatures18 from '../components/features18'
import AppGallery14 from '../components/gallery14'
import AppTestimonial2 from '../components/testimonial2'
import AppContact11 from '../components/contact11'
import AppTeam5 from '../components/team5'

export default {
  name: 'Lista',
  props: {},
  components: {
    AppBanner1,
    AppHero7,
    AppFeatures18,
    AppGallery14,
    AppTestimonial2,
    AppContact11,
    AppTeam5,
  },
  metaInfo: {
    title: 'Lista - Spotless Hungry Crocodile',
    meta: [
      {
        property: 'og:title',
        content: 'Lista - Spotless Hungry Crocodile',
      },
    ],
  },
}
</script>

<style scoped>
.lista-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.lista-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.lista-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.lista-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.lista-nav22 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav32 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav42 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav52 {
  margin-left: var(--dl-space-space-unit);
}
.lista-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.lista-login {
  width: 45px;
  margin-right: 32px;
}
.lista-burger-menu {
  display: none;
}
.lista-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.lista-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.lista-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.lista-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.lista-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lista-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.lista-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.lista-nav121 {
  margin-bottom: var(--dl-space-space-unit);
}
.lista-nav221 {
  margin-bottom: var(--dl-space-space-unit);
}
.lista-nav321 {
  margin-bottom: var(--dl-space-space-unit);
}
.lista-nav421 {
  margin-bottom: var(--dl-space-space-unit);
}
.lista-nav521 {
  margin-bottom: var(--dl-space-space-unit);
}
.lista-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.lista-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.lista-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.lista-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.lista-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lista-container1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.lista-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.lista-nav222 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav322 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav422 {
  margin-left: var(--dl-space-space-unit);
}
.lista-nav522 {
  margin-left: var(--dl-space-space-unit);
}
.lista-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.lista-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.lista-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.lista-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.lista-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.lista-icon14 {
  width: 24px;
  height: 24px;
}
@media(max-width: 767px) {
  .lista-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .lista-desktop-menu {
    display: none;
  }
  .lista-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lista-nav121 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .lista-nav221 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .lista-nav321 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .lista-nav421 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .lista-nav521 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .lista-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .lista-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .lista-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .lista-text {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .lista-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .lista-mobile-menu1 {
    padding: 16px;
  }
  .lista-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .lista-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .lista-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .lista-text {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>

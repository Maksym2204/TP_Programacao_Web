<template>
  <div class="home-container">
    <div class="home-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer home-navbar-interactive"
      >
        <span class="logo">Museus LESI</span>
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links">
            <span class="bodySmall">História</span>
            <span class="home-nav22 bodySmall">Arte</span>
            <span class="home-nav32 bodySmall">Cultura</span>
            <span class="home-nav42 bodySmall">Ciências</span>
            <span class="home-nav52 bodySmall">Temáticos</span>
          </nav>
          <div class="home-buttons">
            <button class="home-login buttonFlat">Entrar</button>
            <button class="buttonFilled">Registo</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="home-mobile-menu1 mobileMenu">
          <div class="home-nav">
            <div class="home-top">
              <span class="logo">ARTMUSEUM</span>
              <div data-thq="thq-close-menu" class="home-close-menu">
                <svg viewBox="0 0 1024 1024" class="home-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-links1">
              <span class="home-nav121 bodySmall">Visit</span>
              <span class="home-nav221 bodySmall">Exhibitions</span>
              <span class="home-nav321 bodySmall">Events</span>
              <span class="home-nav421 bodySmall">Collections</span>
              <span class="home-nav521 bodySmall">Contact</span>
            </nav>
            <div class="home-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="home-icon06 socialIcons"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="home-icon08 socialIcons"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="home-hero">
      <div class="heroContainer home-hero1">
        <div class="home-container01">
          <h1 class="home-hero-heading">Catálogo de Museus Portugueses</h1>
          <span class="home-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Immerse Yourself in Creativity and Culture</span>
                <span><span v-html="rawbr51"></span></span>
              </span>
              <span>
                <span><span v-html="rawdj6k"></span></span>
                <span><span v-html="rawq1ad"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="raw07fl"></span></span>
                <span><span v-html="raws194"></span></span>
              </span>
              <span>
                <span><span v-html="rawuag2"></span></span>
                <span><span v-html="raw3rd4"></span></span>
              </span>
            </span>
          </span>
          <div class="home-btn-group">
            <button class="home-hero-button1 buttonFilled">
              Museus parceiros
            </button>
            <button class="buttonFlat">Saiba mais...</button>
          </div>
          <app-gallery7></app-gallery7>
        </div>
      </div>
    </div>
    <div class="home-features">
      <div class="featuresContainer">
        <div class="home-features1">
          <div class="home-container02">
            <span class="overline">
              <span>features</span>
              <br />
            </span>
            <h2 class="home-features-heading heading2">
              <span>Descubra cada museu em</span>
              <br />
              <span>apenas um toque </span>
            </h2>
            <span class="home-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Experience art in a whole new way with our unique features and
                    offerings.
                  </span>
                  <span><span v-html="rawqvoc"></span></span>
                </span>
                <span>
                  <span><span v-html="rawo6dj"></span></span>
                  <span><span v-html="raw24if"></span></span>
                </span>
              </span>
              <span>
                <span>
                  <span><span v-html="rawhk6g"></span></span>
                  <span><span v-html="rawfu36"></span></span>
                </span>
                <span>
                  <span><span v-html="rawrhqp"></span></span>
                  <span><span v-html="rawract"></span></span>
                </span>
              </span>
            </span>
          </div>
          <div class="home-container03">
            <feature-card
              heading="Diverse Art Collection"
              subHeading="Explore a wide range of art styles and periods from around the world."
            ></feature-card>
            <feature-card
              heading="Interactive Exhibits"
              subHeading="Engage with our interactive displays to learn more about the artworks on display."
            ></feature-card>
            <feature-card
              heading="Guided Tours"
              subHeading="Join our expert guides for insightful tours that provide a deeper understanding of the art."
            ></feature-card>
            <feature-card
              heading="Art Workshops"
              subHeading="Participate in hands-on art workshops to unleash your creativity and artistic skills."
            ></feature-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-faq">
      <div class="faqContainer">
        <div class="home-faq1">
          <div class="home-container04">
            <span class="overline">
              <span>FAQ</span>
              <br />
            </span>
            <h2 class="home-text37 heading2">Common questions</h2>
            <span class="home-text38 bodyLarge">
              <span>Here are some of the most common questions that we get.</span>
              <br />
            </span>
          </div>
          <div class="home-container05">
            <app-question1
              answer="The museum is open from 10am to 6pm every day except for Mondays."
              question="What are the museum's opening hours?"
            ></app-question1>
            <app-question1
              answer="Yes, there is parking available for visitors at the museum."
              question="Is there parking available at the museum?"
            ></app-question1>
            <app-question1
              answer="Yes, guided tours are available at specific times during the day. Please check the schedule for more information."
              question="Are there guided tours available?"
            ></app-question1>
            <app-question1
              answer="Photography is allowed in certain areas of the museum, but please refrain from using flash photography."
              question="Can I take photographs inside the museum?"
            ></app-question1>
            <app-question1
              answer="Yes, students and seniors are eligible for discounted admission tickets. Please present a valid ID at the ticket counter."
              question="Are there discounts available for students and seniors?"
            ></app-question1>
          </div>
        </div>
      </div>
    </div>
    <div class="home-pricing">
      <div class="pricingContainer">
        <div class="home-container06">
          <span class="overline">
            <span>Preços</span>
            <br />
          </span>
          <h2 class="heading2">Sócio do Museus LESI</h2>
          <span class="overline">
            <span>
              Descubra as vantagens de Aderir aos programas do Museus lesi
            </span>
            <br />
          </span>
          <span class="home-pricing-sub-heading bodyLarge">
            <span>
              <span>
                Explore the benefits of each plan and select the one that suits
                your needs best
              </span>
            </span>
          </span>
        </div>
        <div class="home-container07">
          <div class="freePricingCard home-pricing-card">
            <div class="home-container08">
              <span class="home-text49 heading3">Free</span>
              <span class="bodySmall">
                Enjoy unlimited access to our permanent collection
              </span>
            </div>
            <div class="home-container09">
              <span class="home-text50">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-free-plan-price">0</span>
            </div>
            <div class="home-container10">
              <div class="home-container11">
                <span class="home-text53">✔</span>
                <span class="bodySmall">Access to virtual tours</span>
              </div>
              <div class="home-container12">
                <span class="home-text54">✔</span>
                <span class="bodySmall">Monthly newsletter subscription</span>
              </div>
              <div class="home-container13">
                <span class="home-text55">✔</span>
                <span class="bodySmall">10% discount on gift shop items</span>
              </div>
              <div class="home-container14">
                <span class="home-text56">✔</span>
                <span class="bodySmall">
                  Invitations to exclusive members-only events
                </span>
              </div>
            </div>
            <button class="home-button buttonOutline">Continue with Free</button>
          </div>
          <div class="basicPricingCard home-pricing-card1">
            <div class="home-container15">
              <span class="home-text57 heading3">BASIC</span>
              <span class="bodySmall">
                Enhance your experience with special exhibitions and events
              </span>
            </div>
            <div class="home-container16">
              <span class="home-text58">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-basic-plan-pricing">25</span>
              <span class="home-text61">/ month</span>
            </div>
            <div class="home-container17">
              <div class="home-container18">
                <span class="home-text62">✔</span>
                <span class="bodySmall">All features of FREE plan</span>
              </div>
              <div class="home-container19">
                <span class="home-text64">✔</span>
                <span class="bodySmall">All features of Free plan</span>
              </div>
              <div class="home-container20">
                <span class="home-text65">✔</span>
                <span class="bodySmall">Access to special exhibitions</span>
              </div>
              <div class="home-container21">
                <span class="home-text66">✔</span>
                <span class="bodySmall">Priority booking for events</span>
              </div>
              <div class="home-container22">
                <span class="home-text67">✔</span>
                <span class="bodySmall">20% discount on gift shop items</span>
              </div>
            </div>
            <button class="home-button1 buttonFilledSecondary">
              Try the Basic plan
            </button>
          </div>
          <div class="proPricingCard home-pricing-card2">
            <div class="home-container23">
              <span class="home-text68 heading3">
                <span>PRO</span>
                <br />
              </span>
              <span class="bodySmall">
                Unlock premium benefits and personalized services
              </span>
            </div>
            <div class="home-container24">
              <span class="home-text71">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-pro-plan-pricing">50</span>
              <span class="home-text74">/ month</span>
            </div>
            <div class="home-container25">
              <div class="home-container26">
                <span class="home-text75">✔</span>
                <span class="bodySmall"> All features of BASIC plan</span>
              </div>
              <div class="home-container27">
                <span class="home-text77">✔</span>
                <span class="bodySmall">VIP access to exhibition openings</span>
              </div>
              <div class="home-container28">
                <span class="home-text78">✔</span>
                <span class="bodySmall">Personalized guided tours</span>
              </div>
              <div class="home-container29">
                <span class="home-text79">✔</span>
                <span class="bodySmall">All features of Basic plan</span>
              </div>
              <div class="home-container30">
                <span class="home-text80">✔</span>
                <span class="bodySmall">
                  Complimentary coffee at the museum cafe
                </span>
              </div>
            </div>
            <button class="home-button2 buttonFilledSecondary">
              Try the PRO plan
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <footer class="footerContainer home-footer1">
        <div class="home-container31">
          <span class="logo">MUSEUS LESI</span>
          <nav class="home-nav1">
            <span class="bodySmall">História</span>
            <span class="home-nav222 bodySmall">Arte</span>
            <span class="home-nav322 bodySmall">Cultura</span>
            <span class="home-nav422 bodySmall">Ciência</span>
            <span class="home-nav522 bodySmall">Temáticos</span>
          </nav>
        </div>
        <div class="home-separator"></div>
        <div class="home-container32">
          <span class="bodySmall home-text81">
            © 2023 museusLESI, All Rights Reserved.
          </span>
          <div class="home-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon10 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="home-icon12 socialIcons"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="home-icon14 socialIcons"
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
import AppGallery7 from '../components/gallery7'
import FeatureCard from '../components/feature-card'
import AppQuestion1 from '../components/question1'

export default {
  name: 'Home',
  components: {
    AppGallery7,
    FeatureCard,
    AppQuestion1,
  },
  data() {
    return {
      rawbr51: ' ',
      rawdj6k: ' ',
      rawq1ad: ' ',
      raw07fl: ' ',
      raws194: ' ',
      rawuag2: ' ',
      raw3rd4: ' ',
      rawqvoc: ' ',
      rawo6dj: ' ',
      raw24if: ' ',
      rawhk6g: ' ',
      rawfu36: ' ',
      rawrhqp: ' ',
      rawract: ' ',
    }
  },
  metaInfo: {
    title: 'Spotless Hungry Crocodile',
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.home-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.home-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.home-nav22 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav32 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav42 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav52 {
  margin-left: var(--dl-space-space-unit);
}

.home-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-login {
  width: 45px;
  margin-right: 32px;
}

.home-burger-menu {
  display: none;
}

.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.home-mobile-menu1 {
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

.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}

.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.home-nav121 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav221 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav321 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav421 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-nav521 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}

.home-container01 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-hero-heading {
  max-width: 800px;
  text-align: center;
}

.home-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}

.home-btn-group {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: row;
}

.home-hero-button1 {
  width: 230px;
}

.home-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-features1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: flex-start;
}

.home-container02 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-features-heading {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-features-sub-heading {
  font-size: 18px;
  text-align: center;
}

.home-container03 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-oneandhalfunits);
  grid-template-columns: 1fr 1fr;
}

.home-faq {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-faq1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fourunits);
}

.home-container04 {
  display: flex;
  max-width: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.home-text37 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-text38 {
  text-align: left;
}

.home-container05 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-pricing {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-container06 {
  gap: var(--dl-space-space-unit);
  height: 113px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-pricing-sub-heading {
  text-align: center;
}

.home-container07 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.home-container08 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.home-text49 {
  text-transform: uppercase;
}

.home-container09 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}

.home-text50 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}

.home-free-plan-price {
  font-size: 4rem;
  font-weight: 700;
}

.home-container10 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}

.home-container11 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text53 {
  line-height: 150%;
}

.home-container12 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text54 {
  line-height: 150%;
}

.home-container13 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text55 {
  line-height: 150%;
}

.home-container14 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text56 {
  line-height: 150%;
}

.home-button {
  width: 100%;
}

.home-container15 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.home-text57 {
  text-transform: uppercase;
}

.home-container16 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}

.home-text58 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}

.home-basic-plan-pricing {
  font-size: 4rem;
  font-weight: 700;
}

.home-text61 {
  font-size: 1.15rem;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}

.home-container17 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-threeunits);
  flex-direction: column;
}

.home-container18 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text62 {
  line-height: 150%;
}

.home-container19 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text64 {
  line-height: 150%;
}

.home-container20 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text65 {
  line-height: 150%;
}

.home-container21 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text66 {
  line-height: 150%;
}

.home-container22 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text67 {
  line-height: 150%;
}

.home-button1 {
  width: 100%;
}

.home-container23 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.home-text68 {
  text-transform: uppercase;
}

.home-container24 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}

.home-text71 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}

.home-pro-plan-pricing {
  font-size: 4rem;
  font-weight: 700;
}

.home-text74 {
  font-size: 1.15rem;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}

.home-container25 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}

.home-container26 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text75 {
  line-height: 150%;
}

.home-container27 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text77 {
  line-height: 150%;
}

.home-container28 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text78 {
  line-height: 150%;
}

.home-container29 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text79 {
  line-height: 150%;
}

.home-container30 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}

.home-text80 {
  line-height: 150%;
}

.home-button2 {
  width: 100%;
}

.home-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-container31 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.home-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}

.home-nav222 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav322 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav422 {
  margin-left: var(--dl-space-space-unit);
}

.home-nav522 {
  margin-left: var(--dl-space-space-unit);
}

.home-separator {
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

.home-container32 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.home-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}

.home-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}

.home-icon14 {
  width: 24px;
  height: 24px;
}

@media (max-width: 991px) {
  .home-hero1 {
    flex-direction: column;
  }

  .home-container01 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }

  .home-hero-heading {
    text-align: center;
  }

  .home-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .home-features-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .home-text38 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .home-pricing-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }

  .home-container07 {
    align-items: center;
    flex-direction: column;
  }

  .home-pricing-card {
    width: 100%;
    padding: var(--dl-space-space-twounits);
    max-width: 450px;
  }

  .home-pricing-card1 {
    width: 100%;
    max-width: 450px;
  }

  .home-pricing-card2 {
    width: 100%;
    max-width: 450px;
  }
}

@media (max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-desktop-menu {
    display: none;
  }

  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-nav121 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav221 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav321 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav421 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-nav521 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .home-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-features-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .home-container03 {
    grid-template-columns: 1fr;
  }

  .home-faq1 {
    flex-direction: column;
  }

  .home-container04 {
    max-width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  .home-text38 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .home-pricing-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }

  .home-container07 {
    align-items: center;
    flex-direction: column;
  }

  .home-pricing-card {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-pricing-card1 {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-pricing-card2 {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .home-container32 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .home-text81 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

@media (max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }

  .home-mobile-menu1 {
    padding: 16px;
  }

  .home-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .home-container01 {
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-btn-group {
    flex-direction: column;
  }

  .home-features1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }

  .home-pricing-card2 {
    margin-bottom: 0px;
  }

  .home-footer1 {
    padding: var(--dl-space-space-unit);
  }

  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }

  .home-container32 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .home-text81 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>

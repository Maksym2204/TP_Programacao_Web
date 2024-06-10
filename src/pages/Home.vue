<template>
  <div>

    <link
      rel="stylesheet"
      href="https://unpkg.com/animate.css@4.1.1/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX Two Text"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto Sans"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
    />

    <link rel="stylesheet" href="./style.css" />
    <div>
      <link href="./index.css" rel="stylesheet" />

      <div class="home-container">
        <div class="home-header">
          <header
            data-thq="thq-navbar"
            class="navbarContainer home-navbar-interactive"
          >
            <router-link to="/home">
              <span class="logo">Museus LESI</span>
            </router-link>
            <div data-thq="thq-navbar-nav" class="home-desktop-menu">
              <nav class="home-links">
                <router-link to="/museu#historia" class="bodySmall">História</router-link>
                <router-link to="/museu#arte" class="home-nav22 bodySmall">Arte</router-link>
                <router-link to="/museu#cultura" class="home-nav32 bodySmall">Cultura</router-link>
                <router-link to="/museu#ciencia" class="home-nav42 bodySmall">Ciências</router-link>
                <router-link to="/museu#tematico" class="home-nav52 bodySmall">Temáticos</router-link>
              </nav>
              <div class="home-buttons">
                <button class="home-login buttonFlat" onclick="window.location.href='/login'">Entrar</button>
                <button class="buttonFilled" onclick="window.location.href='/register'">Registo</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" class="home-burger-menu">
              <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              class="home-mobile-menu1 mobileMenu"
            >
              <div class="home-nav">
                <div class="home-top">
                  <span class="logo">ARTMUSEUM</span>
                  <div data-thq="thq-close-menu" class="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      class="home-icon02 socialIcons"
                    >
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
                    <span>Explore a criatividade e cultura</span>
                    <span></span>
                  </span>
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </span>
                <span>
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </span>
              <div class="home-btn-group">
                <router-link to="/museu">
                  <button class="home-hero-button1 buttonFilled">
                    Museus parceiros
                  </button>
                </router-link>

                <a href="#descubra">
                  <button class="buttonFlat">Saiba mais...</button>
                </a>
              </div>
              <div class="gallery7-gallery3 thq-section-padding">
                <div class="gallery7-max-width">
                  <div class="gallery7-section-title">
                    <h2 class="gallery7-text thq-heading-2">
                      <span>Exibições em destaque</span>
                    </h2>
                    <span class="gallery7-text1 thq-body-large">
                      <span>
                        Explora as exibições que altualmente estão em destaque
                        nos nossos museus parceiros.
                      </span>
                    </span>
                  </div>
                  <div class="gallery7-container">
                    <div class="gallery7-content">
                      <div class="gallery7-container1">
                        <img
                          alt="Artwork from Current Exhibition 1"
                          src="https://images.unsplash.com/photo-1565688842882-e0b2693d349a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image1 thq-img-ratio-1-1"
                        />
                        <img
                          alt="Artwork from Current Exhibition 2"
                          src="https://images.unsplash.com/photo-1542310894-18d5493778ad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image2 thq-img-ratio-1-1"
                        />
                      </div>
                      <div class="gallery7-container2">
                        <img
                          alt="Artwork from Current Exhibition 3"
                          src="https://images.unsplash.com/photo-1602524206567-9bf059d35ac3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image3 thq-img-ratio-4-3"
                        />
                        <img
                          alt="Artwork from Current Exhibition 4"
                          src="https://images.unsplash.com/photo-1597489420377-e23d4a080346?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image4 thq-img-ratio-1-1"
                        />
                        <img
                          alt="Artwork from Current Exhibition 5"
                          src="https://images.unsplash.com/photo-1580130544401-347c796dceec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image5 thq-img-ratio-4-3"
                        />
                      </div>
                      <div class="gallery7-container3">
                        <img
                          alt="Artwork from Current Exhibition 6"
                          src="https://images.unsplash.com/photo-1598566944246-a8dd2c842fde?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image6 thq-img-ratio-1-1"
                        />
                        <img
                          alt="Artwork from Current Exhibition 7"
                          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc5NzIwNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                          class="gallery7-image7 thq-img-ratio-1-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-features" id="descubra">
          <div class="featuresContainer">
            <div class="home-features1">
              <div class="home-container02">

                <h2 class="home-features-heading heading2">
                  <span>Descubra cada um dos</span>
                  <br />
                  <span>nossos museus</span>
                </h2>
                <span class="home-features-sub-heading bodyLarge">
          <span>
            <span>
              <span>
                Experimente arte de uma nova maneira com as nossas ofertas exclusivas para aderentes.
              </span>
              <span></span>
            </span>
            <span>
              <span></span>
              <span></span>
            </span>
          </span>
          <span>
            <span>
              <span></span>
              <span></span>
            </span>
            <span>
              <span></span>
              <span></span>
            </span>
          </span>
        </span>
              </div>
              <div class="home-container03">
                <div class="featuresCard feature-card-feature-card">
                  <svg viewBox="0 0 1024 1024" class="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                    ></path>
                  </svg>
                  <div class="feature-card-container">
                    <h3 class="feature-card-text heading3">
                      <span>Diversidade de Arte</span>
                    </h3>
                    <span class="bodySmall">
              <span>
                Explore uma ampla gama de estilos e períodos artísticos de todo o país.
              </span>
            </span>
                  </div>
                </div>
                <div class="featuresCard feature-card-feature-card">
                  <svg viewBox="0 0 1024 1024" class="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                    ></path>
                  </svg>
                  <div class="feature-card-container">
                    <h3 class="feature-card-text heading3">
                      <span>Prévia de Exposições</span>
                    </h3>
                    <span class="bodySmall">
              <span>
                Receba o nosso newsletter para aprender mais sobre as obras em exibição, antes mesmo de as visitar.
              </span>
            </span>
                  </div>
                </div>
                <div class="featuresCard feature-card-feature-card">
                  <svg viewBox="0 0 1024 1024" class="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                    ></path>
                  </svg>
                  <div class="feature-card-container">
                    <h3 class="feature-card-text heading3">
                      <span>Visitas Guiadas</span>
                    </h3>
                    <span class="bodySmall">
              <span>
                Participe nas nossas visitas guiadas exclusivas, realizadas por profissionais qualificados do MuseusLESI, para obter uma compreensão mais profunda da arte.
              </span>
            </span>
                  </div>
                </div>
                <div class="featuresCard feature-card-feature-card">
                  <svg viewBox="0 0 1024 1024" class="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                    ></path>
                  </svg>
                  <div class="feature-card-container">
                    <h3 class="feature-card-text heading3">
                      <span>Workshops Artisticos</span>
                    </h3>
                    <span class="bodySmall">
              <span>
                Participe das nossas oficinas de arte exclusivas para libertar a sua criatividade e a sua habilidade artística interior.
              </span>
            </span>
                  </div>
                </div>
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
                <h2 class="home-text37 heading2">Perguntas Frequentes</h2>
                <span class="home-text38 bodyLarge">
          <span>
            Aqui estão algumas das perguntas mais comuns que recebemos.
          </span>
          <br />
        </span>
              </div>
              <div class="home-container05">
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Quais são os horários de funcionamento dos museus?</span>
          </span>
                  <span class="bodySmall">
            <span>
              Cada museus tem o seus próprios horários que deverão ser consultados (ver a nossa secção de museus aderentes). Mas por convenção, por norma os museus estão abertos das 10h às 18h todos os dias, exceto às segundas-feiras.
            </span>
          </span>
                </div>
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Há estacionamento disponível nos museus?</span>
          </span>
                  <span class="bodySmall">
            <span>
              Cada museus é diferente. A MuseusLESI não consegue assegurar que todos os museus tenham estacionamento disponível.
            </span>
          </span>
                </div>
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Há visitas guiadas exclusivas disponíveis?</span>
          </span>
                  <span class="bodySmall">
            <span>
              Sim, visitas guiadas exclusivas para alguns dos nossos aderente. Consulte os planos abaixo.
            </span>
          </span>
                </div>
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Posso tirar fotografias dentro dos museus?</span>
          </span>
                  <span class="bodySmall">
            <span>
              A fotografia é permitida em certas áreas assinaladas em cada um dos museus (deverão seguir as diretrizes de cada museu). No entanto, é aconselhado a que evitem usar flash em exposições de arte.
            </span>
          </span>
                </div>
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Há descontos disponíveis para estudantes e seniores?</span>
          </span>
                  <span class="bodySmall">
            <span>
              Sim, estudantes e seniores têm direito a 50% de desconto na adesão aos nosso programas. Saiba mais abaixo.
            </span>
          </span>
                </div>
                <div class="question1-container">
          <span class="question1-text heading3">
            <span>Quais são as vantagens de ser um aderente da associação?</span>
          </span>
                  <span class="bodySmall">
            <span>
              Os aderentes têm acesso exclusivo a eventos, descontos na loja de presentes, e convites para exposições especiais, workshops, etc... Consultem os nosso planos de adesão abaixo.
            </span>
          </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-pricing">
          <div class="pricingContainer">
            <div class="home-container06">
      <span class="overline">
        <span>Preçário</span>
        <br />
      </span>
              <h2 class="heading2">Sócio dos Museus LESI</h2>
              <span class="overline">
        <span>
          Explore os benefícios de cada plano e escolha o que melhor se adequa às suas necessidades.
        </span>
        <br />
      </span>
              <span class="home-pricing-sub-heading bodyLarge" style="margin-bottom: 20px;">
        <span>
          <span>
            .
          </span>
        </span>
      </span>
            </div>
            <div class="home-container07">
              <div class="freePricingCard home-pricing-card">
                <div class="home-container08">
                  <span class="home-text49 heading3">Grátis</span>
                  <span class="bodySmall">
            Desfrute de acesso ilimitado à nossa coleção permanente
          </span>
                </div>
                <div class="home-container09">
          <span class="home-text50">
            <span>€</span>
            <span></span>
          </span>
                  <span class="home-free-plan-price">0</span>
                </div>
                <div class="home-container10">
                  <div class="home-container11">
                    <span class="home-text53">✔</span>
                    <span class="bodySmall">Acesso a visitas virtuais</span>
                  </div>
                  <div class="home-container12">
                    <span class="home-text54">✔</span>
                    <span class="bodySmall">
              Subscrição da newsletter mensal
            </span>
                  </div>
                  <div class="home-container13">
                    <span class="home-text55">✔</span>
                    <span class="bodySmall">
              10% de desconto na loja de presentes
            </span>
                  </div>
                  <div class="home-container14">
                    <span class="home-text56">✔</span>
                    <span class="bodySmall">
              Convites para eventos exclusivos para membros
            </span>
                  </div>
                </div>
                <button class="home-button buttonOutline">
                  Continuar com Grátis
                </button>
              </div>
              <div class="basicPricingCard home-pricing-card1">
                <div class="home-container15">
                  <span class="home-text57 heading3">Básico</span>
                  <span class="bodySmall">
            Melhore a sua experiência com exposições e eventos especiais
          </span>
                </div>
                <div class="home-container16">
          <span class="home-text58">
            <span>€</span>
            <span></span>
          </span>
                  <span class="home-basic-plan-pricing">25</span>
                  <span class="home-text61">/ mês</span>
                </div>
                <div class="home-container17">
                  <div class="home-container18">
                    <span class="home-text62">✔</span>
                    <span class="bodySmall">Todas as vantagens do plano grátis</span>
                  </div>
                  <div class="home-container19">
                    <span class="home-text64">✔</span>
                    <span class="bodySmall">Acesso a exposições especiais</span>
                  </div>
                  <div class="home-container20">
                    <span class="home-text65">✔</span>
                    <span class="bodySmall">Reserva prioritária para eventos</span>
                  </div>
                  <div class="home-container21">
                    <span class="home-text66">✔</span>
                    <span class="bodySmall">
              20% de desconto na loja de presentes
            </span>
                  </div>
                </div>
                <button class="home-button1 buttonFilledSecondary">
                  Experimente o plano Básico
                </button>
              </div>
              <div class="proPricingCard home-pricing-card2">
                <div class="home-container23">
          <span class="home-text68 heading3">
            <span>PRO</span>
            <br />
          </span>
                  <span class="bodySmall">
            Desbloqueie benefícios premium e serviços personalizados
          </span>
                </div>
                <div class="home-container24">
          <span class="home-text71">
            <span>€</span>
            <span></span>
          </span>
                  <span class="home-pro-plan-pricing">50</span>
                  <span class="home-text74">/ mês</span>
                </div>
                <div class="home-container25">
                  <div class="home-container26">
                    <span class="home-text75">✔</span>
                    <span class="bodySmall">
              Todas as vantagens do plano Básico
            </span>
                  </div>
                  <div class="home-container27">
                    <span class="home-text77">✔</span>
                    <span class="bodySmall">
              Acesso VIP a inaugurações de exposições
            </span>
                  </div>
                  <div class="home-container28">
                    <span class="home-text78">✔</span>
                    <span class="bodySmall">Visitas guiadas personalizadas</span>
                  </div>
                  <div class="home-container29">
                    <span class="home-text79">✔</span>
                    <span class="bodySmall">
              Todas as vantagens do plano Básico
            </span>
                  </div>
                  <div class="home-container30">
                    <span class="home-text80">✔</span>
                    <span class="bodySmall">
              Café gratuito no café do museu
            </span>
                  </div>
                </div>
                <button class="home-button2 buttonFilledSecondary">
                  Experimente o plano PRO
                </button>
              </div>
            </div>
            <div class="home-discount">
      <span class="bodySmall">
        Estudantes e seniores (65+) têm 50% de desconto na adesão aos planos.
      </span>
            </div>
          </div>
        </div>

        <div class="contact4-contact20 thq-section-padding">
          <div class="contact4-max-width thq-section-max-width">
            <div class="contact4-section-title">
              <span class="thq-body-small">
                <span>Fale connosco hoje!</span>
              </span>
              <div class="contact4-content">
                <h2 class="thq-heading-2"><span>Contacte nos</span></h2>
                <p class="thq-body-large">
                  <span>
                    Fale connosco para obter mais informações sobre os nossos museus parceiros,
                     exposições em destaque e programas educativos.
                  </span>
                </p>
              </div>
            </div>
            <div class="contact4-row">
              <div class="contact4-content1">
                <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                  <path
                    d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  ></path>
                </svg>
                <div class="contact4-contact-info">
                  <div class="contact4-content2">
                    <h3 class="contact4-text3 thq-heading-3">Email</h3>
                    <p class="contact4-text4 thq-body-large">
                      <span>
                        Envie as suas perguntas e solicitações para o nosso endereço de email,
                         onde a nossa equipa está pronta para ajudá-lo.
                      </span>
                    </p>
                  </div>
                  <span class="contact4-email thq-body-small">
                    <span>hello@teleporthq.io</span>
                  </span>
                </div>
              </div>
              <div class="contact4-content3">
                <svg
                  viewBox="0 0 1024 1024"
                  class="contact4-icon2 thq-icon-medium"
                >
                  <path
                    d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                  ></path>
                </svg>
                <div class="contact4-contact-info1">
                  <div class="contact4-content4">
                    <h3 class="contact4-text5 thq-heading-3">Telemovel</h3>
                    <p class="contact4-text6 thq-body-large">
                      <span>
                        Ligue diretamente para nós pelo telemóvel para atendimento rápido e personalizado.
                        <br>
                        <span>Horário de atendimento: 9h - 18h</span>
                      </span>
                    </p>
                  </div>
                  <span class="contact4-phone thq-body-small">
                    <span>+1 (555) 000-0000</span>
                  </span>
                </div>
              </div>
              <div class="contact4-content5">
                <svg
                  viewBox="0 0 1024 1024"
                  class="contact4-icon4 thq-icon-medium"
                >
                  <path
                    d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  ></path>
                </svg>
                <div class="contact4-contact-info2">
                  <div class="contact4-content6">
                    <h3 class="contact4-text7 thq-heading-3">Office</h3>
                    <p class="contact4-text8 thq-body-large">
                      <span>
                        Visite-nos pessoalmente no nosso endereço físico
                         para uma experiência de atendimento completa e detalhada.
                      </span>
                    </p>
                  </div>
                  <span class="contact4-address thq-body-small">
                    <span>Campus do IPCA, Vila Frescaínha S. Martinho › 4750-810 Barcelos</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="home-footer">
          <footer class="footerContainer home-footer1">
            <div class="home-container31">
              <router-link to="/home">
                <span class="logo">Museus LESI</span>
              </router-link>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
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

.feature-card-container {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.feature-card-text {
  font-weight: 600;
  line-height: 28px;
}
@media(max-width: 767px) {
  .feature-card-feature-card {
    flex-direction: row;
  }
  .feature-card-container {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .feature-card-container {
    flex-direction: column;
  }
}

.question1-container {
  gap: var(--dl-space-space-unit);
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.question1-text {
  font-weight: 700;
}

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
@media(max-width: 991px) {
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
@media(max-width: 767px) {
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
@media(max-width: 479px) {
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

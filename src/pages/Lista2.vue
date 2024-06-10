<template>
  <div>
    <head>
      <title>Lista - Spotless Hungry Crocodile</title>
      <meta property="og:title" content="Lista - Spotless Hungry Crocodile" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta property="twitter:card" content="summary_large_image" />

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
    </head>
    <link rel="stylesheet" href="./style.css" />
    <div>
      <link href="./lista.css" rel="stylesheet" />

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
            <div
              data-thq="thq-mobile-menu"
              class="lista-mobile-menu1 mobileMenu"
            >
              <div class="lista-nav">
                <div class="lista-top">
                  <span class="logo">ARTMUSEUM</span>
                  <div data-thq="thq-close-menu" class="lista-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      class="lista-icon02 socialIcons"
                    >
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
        <div
          class="banner1-container thq-section-padding banner1-root-class-name"
        >
          <div class="banner1-max-width thq-section-max-width">
            <div class="banner1-container1">
              <h2 class="banner1-title thq-heading-2">
                <br>
                <span>Bem-vindo ao Museu do Louvre</span>
              </h2>
              <p class="hero7-text1 thq-body-large">
                <span>
                  O Museu do Louvre, localizado em Paris, França, é um dos mais famosos e visitados museus do mundo. Situado às margens do Rio Sena, o Louvre é uma instituição cultural icônica, conhecida por sua vasta coleção de obras de arte e artefatos históricos.                  <br>
                  <br>
                  O edifício que abriga o museu foi originalmente construído como uma fortaleza no final do século XII pelo rei Filipe II e posteriormente transformado em palácio real. Em 1793, durante a Revolução Francesa, foi inaugurado como museu público.                  <br>
                  <br>
                  O Museu do Louvre não é apenas um tesouro de arte, mas também um símbolo da herança cultural e histórica da humanidade, atraindo milhões de visitantes de todo o mundo a cada ano.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="features18-layout349 thq-section-padding">
          <div class="features18-max-width thq-section-max-width">
            <div class="features18-content">
              <div class="features18-section-title">
                <span class="thq-body-small">
                  <span>Descubra mais sobre o nosso museu</span>
                </span>
                <div class="features18-content1">
                  <h2 class="thq-heading-2">
                    <span>Museu Louvre</span>
                  </h2>
                  <p class="thq-body-large">
                    <span>
                      Explore uma vasta coleção de aeronaves americas e
                      internacionais, incluindo supersonicos e comerciais.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="features18-image-container">
              <img
                alt="Imagem do Museu Louvre"
                src="https://www.tudosobreparis.com/f/francia/paris/guia/museo-louvre-m.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div class="gallery14-gallery3 thq-section-padding">
          <div class="gallery14-max-width thq-section-max-width">
            <div class="gallery14-section-title">
              <h2 class="gallery14-text thq-heading-2"><span>Galeria</span></h2>
              <span class="gallery14-text1 thq-body-large">
                <span>
                  Descubra uma seleção cuidadosa de aeronaves
                  históricas que foram destaque no passado.
                </span>
              </span>
            </div>
            <div class="gallery14-content">
              <div class="gallery14-container">
                <img
                  alt="Imagem do b1-a"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/B-1A_Lancer_at_Wings_Over_the_Rockies.jpg/2560px-B-1A_Lancer_at_Wings_Over_the_Rockies.jpg"
                  class="gallery14-image1 thq-img-ratio-4-3"
                />
                <span class="thq-body-small">
                  <span>B-1A</span>
                </span>
                <span class="gallery14-text3 thq-body-small">
                  <span>
                    Um bombardeiro estratégico supersônico desenvolvido pela Força Aérea dos Estados Unidos.
                  </span>
                </span>
              </div>
              <div class="gallery14-container1">
                <img
                  alt="Imagem do F-14"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0c/65/2f/c4/f14-tomcat.jpg"
                  class="gallery14-image2 thq-img-ratio-4-3"
                />
                <span class="thq-body-small">
                  <span>F-14</span>
                </span>
                <span class="gallery14-text5 thq-body-small">
                  <span>
                    O F-14 Tomcat é um caça a jato supersônico desenvolvido para a Marinha dos Estados Unidos.
                  </span>
                </span>
              </div>
              <div class="gallery14-container2">
                <img
                  alt="EB-57"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/01/bb/78/4c/b-57.jpg"
                  class="gallery14-image3 thq-img-ratio-4-3"
                />
                <span class="thq-body-small">
                  <span>EB-57</span>
                </span>
                <span class="gallery14-text7 thq-body-small">
                  <span>
                    Uma versão de reconhecimento do bombardeiro britânico, usada pela Força Aérea Americana.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
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
            <p class="testimonial2-text thq-body-large">
              <span>
                O website Museus LESI é uma ferramenta incrível para quem ama
                explorar a riqueza cultural dos museus portugueses. Recomendo a
                todos!
              </span>
            </p>
            <div class="testimonial2-avatar">
              <img
                alt="Foto de Ana Silva"
                src="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1MjExMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                class="testimonial2-avatar-image thq-img-round thq-img-ratio-1-1"
              />
              <div class="testimonial2-avatar-content">
                <span class="testimonial2-text1 thq-body-small">
                  <span>Ana Silva</span>
                </span>
                <span class="testimonial2-text2 thq-body-small">
                  <span>Historiadora de Arte</span>
                </span>
              </div>
              <img
                alt="Logo da empresa de Ana Silva"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="testimonial2-logo"
              />
            </div>
          </div>
        </div>
        <div class="contact11-container thq-section-padding">
          <div class="contact11-max-width thq-section-max-width">
            <div class="contact11-section-title">
              <div class="contact11-content">
                <h2 class="thq-heading-2">
                  <span>Entre em contato conosco</span>
                </h2>
                <p class="thq-body-large">
                  <span>
                    Estamos aqui para ajudar. Entre em contato conosco se tiver
                    alguma dúvida ou precisar de mais informações sobre o nosso museu.
                  </span>
                </p>
              </div>
            </div>
            <div class="contact11-content1 thq-flex-row">
              <div class="contact11-content2">
                <div class="contact11-content3">
                  <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                    <path
                      d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                    ></path>
                  </svg>
                  <div class="contact11-contact-info">
                    <h3 class="contact11-text2 thq-heading-3">Email</h3>
                    <p class="thq-body-large">
                      <span>Fique por dentro das novidades</span>
                    </p>
                    <span class="thq-body-small">
                      <span>info@museuslesi.pt</span>
                    </span>
                  </div>
                </div>
                <div class="contact11-content4">
                  <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                    <path
                      d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                    ></path>
                  </svg>
                  <div class="contact11-contact-info1">
                    <h3 class="contact11-text4 thq-heading-3">Phone</h3>
                    <p class="thq-body-large">
                      <span>
                        Siga-nos nas redes sociais para acompanhar as últimas
                        atualizações e eventos dos museus.
                      </span>
                    </p>
                    <span class="thq-body-small">
                      <span>+351 123 456 789</span>
                    </span>
                  </div>
                </div>
                <div class="contact11-content5">
                  <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                    <path
                      d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                    ></path>
                  </svg>
                  <div class="contact11-contact-info2">
                    <h3 class="contact11-text7 thq-heading-3">Office</h3>
                    <p class="thq-body-large">
                      <span>
                        Horário de atendimento: Segunda a Sexta, das 9h às 18h
                      </span>
                    </p>
                    <span class="thq-body-small">
                      <span>Rua dos Museus, nº 123, Lisboa, Portugal</span>
                    </span>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro"
                title="Map"
                class="contact11-iframe thq-img-ratio-16-9"
              ></iframe>
            </div>
          </div>
        </div>
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
    </div>
  </div>


</template>

<script>
export default {
  name: 'Lista2'
};
</script>

<style>
.banner1-container {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
}
.banner1-max-width {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.banner1-container1 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.banner1-title {
  text-align: center;
}
.banner1-text {
  text-align: center;
}
.banner1-root-class-name {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
}

.hero7-max-width {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.hero7-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  max-width: 1000px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.hero7-text {
  text-align: center;
}
.hero7-text1 {
  text-align: center;
}
.hero7-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.hero7-container {
  display: flex;
  align-items: flex-start;
}
.hero7-text2 {
  text-align: center;
}
.hero7-container1 {
  display: flex;
  align-items: flex-start;
}
.hero7-text3 {
  text-align: center;
}
@media(max-width: 479px) {
  .hero7-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero7-container {
    width: 100%;
  }
  .hero7-button {
    width: 100%;
  }
  .hero7-container1 {
    width: 100%;
  }
  .hero7-button1 {
    width: 100%;
  }
}

.features18-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features18-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features18-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features18-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features18-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}

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

.contact11-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-max-width {
  align-self: center;
}
.contact11-section-title {
  width: 100%;
  margin-bottom: var(--dl-space-space-threeunits);
}
.contact11-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-content1 {
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contact11-content2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-content3 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-contact-info {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-text2 {
  align-self: flex-start;
  text-align: center;
}
.contact11-content4 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-contact-info1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-text4 {
  align-self: flex-start;
  text-align: center;
}
.contact11-content5 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-contact-info2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact11-text7 {
  align-self: flex-start;
  text-align: center;
}
.contact11-iframe {
  height: 664px;
}
@media(max-width: 991px) {
  .contact11-content1 {
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
}

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

<template>
  <div>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>MuseusLESI</title>
      <meta property="og:title" content="Museu - Spotless Hungry Crocodile" />
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
    <body>
    <link rel="stylesheet" href="./style.css" />
    <div>
      <link href="./museu.css" rel="stylesheet" />

      <div class="museu-container">
        <div class="museu-header">
          <header
            data-thq="thq-navbar"
            class="navbarContainer museu-navbar-interactive"
          >
            <span class="logo">Museus LESI</span>
            <div data-thq="thq-navbar-nav" class="museu-desktop-menu">
              <nav class="museu-links">
                <a rel="noopener" target="_blank" href="#historia" class="museu-nav22 bodySmall">Historia</a>
                <a rel="noopener" target="_blank" href="#arte" class="museu-nav22 bodySmall">Arte</a>
                <a rel="noopener" target="_blank" href="#cultura" class="museu-nav22 bodySmall">Cultura</a>
                <a rel="noopener" target="_blank" href="#ciencia" class="museu-nav22 bodySmall">Ciencia</a>
                <a rel="noopener" target="_blank" href="#tematico" class="museu-nav22 bodySmall">Tematico</a>
              </nav>
              <div class="museu-buttons">
                <button class="museu-login buttonFlat">Entrar</button>
                <button class="buttonFilled">Registo</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" class="museu-burger-menu">
              <svg viewBox="0 0 1024 1024" class="museu-icon socialIcons">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              class="museu-mobile-menu1 mobileMenu"
            >
              <div class="museu-nav">
                <div class="museu-top">
                  <span class="logo">ARTMUSEUM</span>
                  <div data-thq="thq-close-menu" class="museu-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      class="museu-icon02 socialIcons"
                    >
                      <path
                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav class="museu-links1">
                  <span class="museu-nav121 bodySmall">Visit</span>
                  <span class="museu-nav221 bodySmall">Exhibitions</span>
                  <span class="museu-nav321 bodySmall">Events</span>
                  <span class="museu-nav421 bodySmall">Collections</span>
                  <span class="museu-nav521 bodySmall">Contact</span>
                </nav>
                <div class="museu-buttons1">
                  <button class="buttonFlat">Login</button>
                  <button class="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  class="museu-icon04 socialIcons"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path></svg
                ><svg
                viewBox="0 0 877.7142857142857 1024"
                class="museu-icon06 socialIcons"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg
                viewBox="0 0 602.2582857142856 1024"
                class="museu-icon08 socialIcons"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
              </div>
            </div>
          </header>
        </div>
        <div class="hero3-header9">
          <img
            alt="Imagem de um museu com exposições em destaque"
            src="https://images.unsplash.com/photo-1708558156844-9c355b712123?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
            class="thq-img-ratio-16-9"
          />
          <div class="hero3-content thq-section-padding">
            <div class="hero3-max-width thq-section-max-width thq-flex-row">
              <div class="hero3-column">
                <h1 class="thq-heading-1 hero3-text">
                  <span>Descubra os Museus LESI</span>
                </h1>
              </div>
              <div class="hero3-column1">
                <p class="thq-body-large hero3-text1">
                  <span>
                    Explore exibições em destaque nos museus parceiros
                  </span>
                </p>
                <div class="hero3-actions">
                  <button class="thq-button-filled hero3-button">
                    <span class="thq-body-small">
                      <span>Aderir a programas</span>
                    </span>
                  </button>
                  <button class="thq-button-outline hero3-button1">
                    <span class="thq-body-small">
                      <span>Tornar-se sócio</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="logos9-container thq-section-padding">
          <div class="logos9-max-width thq-section-max-width">
            <h2 class="logos9-text thq-heading-2">
              <span>Explore os nossos Museus</span>
            </h2>
          </div>
          <div
            class="logos9-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal"
          >
            <div class="thq-animated-group-horizontal">
              <img
                alt="Museu LESI logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo1 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de Arte Moderna logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo2 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de História logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo3 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de Ciências logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo4 thq-img-ratio-16-9"
              />
              <img
                alt="Museu Temático logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo5 thq-img-ratio-16-9"
              />
              <img
                alt="Museu Parceiro logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo6 thq-img-ratio-16-9"
              />
            </div>
            <div class="thq-animated-group-horizontal">
              <img
                alt="Museu LESI logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo11 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de Art logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo21 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de História logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo31 thq-img-ratio-16-9"
              />
              <img
                alt="Museu de Ciências logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo41 thq-img-ratio-16-9"
              />
              <img
                alt="Museu Temático logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo51 thq-img-ratio-16-9"
              />
              <img
                alt="Museu Parceiro logo"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&amp;q=80&amp;force_format=original"
                class="logos9-logo61 thq-img-ratio-16-9"
              />
            </div>
          </div>
          <div>
            <div class="logos9-container5">
            </div>
          </div>
        </div>
        <div class="gallery1-gallery3 thq-section-padding">
          <div class="gallery1-max-width thq-section-max-width">
            <div class="gallery1-section-title">
              <h2 class="gallery1-text thq-heading-2">
                <span>Exploração de Museus Parceiros</span>
              </h2>
              <span class="gallery1-text1 thq-body-large">
                <span>
                  Descubra uma rede de museus em todo o país. Tenha acesso a uma variedade de museus parceiros com diferentes temáticas e coleções para explorar.
                </span>
              </span>
            </div>
            <div class="gallery1-content">
              <div class="gallery1-container">
                <img
                  alt="Pintura clássica em exposição no Museu Nacional de Arte Antiga"
                  src="https://images.unsplash.com/photo-1591961172040-ee974a422616?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                  class="thq-img-ratio-4-3"
                />
              </div>
              <div class="gallery1-container1">
                <img
                  alt="Escultura contemporânea em destaque no Museu de Serralves"
                  src="../../public/img/ArtImagem.jpg"
                  class="thq-img-ratio-4-3"
                />
              </div>
              <div class="gallery1-container2">
                <img
                  alt="Instalação artística no Museu Berardo"
                  src="https://images.unsplash.com/photo-1571840933517-88a527cd7008?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg1ODg2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                  class="thq-img-ratio-4-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="features17-layout349 thq-section-padding">
          <div class="features17-max-width thq-section-max-width">
            <div class="features17-image-container">
              <img
                alt="Imagem de historia"
                src="../../public/img/MuseuHistoria.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
            <div class="features17-content">
              <div class="features17-section-title">
                <span class="thq-body-small">
                  <span>Descubra a Historia do nosso mundo</span>
                </span>
                <div class="features17-content1">
                  <h2 class="thq-heading-2">
                    <h2 id="historia" class="thq-heading-2"><span>Historia</span></h2>
                  </h2>
                  <p class="thq-body-large">
                    <span>
                      Descubra a riqueza cultural e histórica dos museus, onde o passado ganha vida através de coleções fascinantes e exposições interativas.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="features181-layout349 thq-section-padding">
          <div class="features181-max-width thq-section-max-width">
            <div class="features181-content">
              <div class="features181-section-title">
                <span class="thq-body-small">
                  <span>Descubra as obras de artistas de todo o mundo </span>
                </span>
                <div class="features181-content1">
                  <h2 id="arte" class="thq-heading-2"><span>Arte</span></h2>
                  <p class="thq-body-large">
                    <span>
                      Explore as obras mais emblemáticas do movimento de arte
                      moderna em exposição nos museus parceiros.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="features181-image-container">
              <img
                alt="Exposição de Arte Moderna"
                src="../../public/img/MuseuArt.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div class="features171-layout349 thq-section-padding">
          <div class="features171-max-width thq-section-max-width">
            <div class="features171-image-container">
              <img
                alt="MuseuCultura"
                src="../../public/img/MuseuCultura.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
            <div class="features171-content">
              <div class="features171-section-title">
                <span class="thq-body-small">
                  <span>Acesso a Exibições de culturas exóticas</span>
                </span>
                <div class="features171-content1">
                  <h2 id="cultura" class="thq-heading-2"><span>Cultura</span></h2>
                  <p class="thq-body-large">
                    <span>
                      Mergulhe na diversidade vibrante da cultura, onde tradições,
                       artes e expressões humanas se entrelaçam para celebrar
                        a identidade e a criatividade de diferentes povos.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="features181-layout349 thq-section-padding">
          <div class="features181-max-width thq-section-max-width">
            <div class="features181-content">
              <div class="features181-section-title">
                <span class="thq-body-small">
                  <span>Aprenda de forma diferente </span>
                </span>
                <div class="features181-content1">
                  <h2 id="ciencia" class="thq-heading-2"><span>Ciencias</span></h2>
                  <p class="thq-body-large">
                    <span>
                      Explore o universo do conhecimento nos museus de ciências,
                       onde a curiosidade encontra a inovação através de exposições
                        interativas e descobertas surpreendentes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="features181-image-container">
              <img
                alt="Exposição de Ciencia"
                src="../../public/img/MuseuCiencia.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div class="features171-layout349 thq-section-padding">
          <div class="features171-max-width thq-section-max-width">
            <div class="features171-image-container">
              <img
                alt="MuseuTematico"
                src="../../public/img/MuseuTematico.jpg"
                class="thq-img-ratio-16-9"
              />
            </div>
            <div class="features171-content">
              <div class="features171-section-title">
                <span class="thq-body-small">
                  <span>Divirta se a aprender</span>
                </span>
                <div class="features171-content1">
                  <h2 id="tematico" class="thq-heading-2"><span>Tematico</span></h2>
                  <p class="thq-body-large">
                    <span>
                      Vivencie um mundo de fantasia e diversão nos museus temáticos,
                      onde cada exposição transporta os visitantes para universos únicos e imersivos.
                    </span>
                  </p>
                </div>
              </div>
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
                    <span>Campus do IPCA, Vila Frescaínha S. Martinho › 4750-810 Barcelos0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="museu-footer">
          <footer class="footerContainer museu-footer1">
            <div class="museu-container1">
              <span class="logo">MUSEUS LESI</span>
              <nav class="museu-nav1">
                <span class="bodySmall">História</span>
                <span class="museu-nav222 bodySmall">Arte</span>
                <span class="museu-nav322 bodySmall">Cultura</span>
                <span class="museu-nav422 bodySmall">Ciência</span>
                <span class="museu-nav522 bodySmall">Temáticos</span>
              </nav>
            </div>
            <div class="museu-separator"></div>
            <div class="museu-container2">
              <span class="bodySmall museu-text">
                © 2023 museusLESI, All Rights Reserved.
              </span>
              <div class="museu-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  class="museu-icon10 socialIcons"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path></svg
                ><svg
                viewBox="0 0 877.7142857142857 1024"
                class="museu-icon12 socialIcons"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg
                viewBox="0 0 602.2582857142856 1024"
                class="museu-icon14 socialIcons"
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
    </body>
    </html>

  </div>
</template>

<script>
export default {
  name: 'Museu'
};
</script>

<style scoped>
.hero3-header9 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.hero3-content {
  display: flex;
  justify-content: center;
}
.hero3-max-width {
  align-self: center;
  align-items: center;
}
.hero3-column {
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-column1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
@media(max-width: 991px) {
  .hero3-column {
    width: 100%;
  }
  .hero3-column1 {
    width: auto;
  }
  .hero3-button {
    flex: 1;
  }
  .hero3-button1 {
    flex: 1;
  }
}
@media(max-width: 767px) {
  .hero3-max-width {
    flex-direction: column;
  }
  .hero3-text {
    text-align: center;
  }
  .hero3-text1 {
    text-align: center;
  }
  .hero3-actions {
    width: 100%;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .hero3-actions {
    flex-direction: column;
  }
  .hero3-button {
    width: 100%;
  }
  .hero3-button1 {
    width: 100%;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}

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

.features17-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features17-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features17-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features17-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features17-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features17-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features17-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}

.features181-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features181-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features181-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features181-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features181-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features181-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features181-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}

.features171-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features171-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features171-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features171-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features171-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features171-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}

.cta1-container {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
}
.cta1-max-width {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
.cta1-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.cta1-heading1 {
  text-align: center;
}
.cta1-content1 {
  text-align: center;
}
.cta1-actions {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
.cta1-action1 {
  text-align: center;
}
.cta1-action2 {
  text-align: center;
}
@media(max-width: 479px) {
  .cta1-actions {
    width: 100%;
    flex-direction: column;
  }
  .cta1-button {
    width: 100%;
  }
  .cta1-button1 {
    width: 100%;
  }
}

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

.contact4-contact20 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.contact4-max-width {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contact4-section-title {
  gap: var(--dl-space-space-unit);
  width: auto;
  display: flex;
  max-width: 800px;
  align-self: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-row {
  gap: 48px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.contact4-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-contact-info {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content2 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text3 {
  align-self: flex-start;
  text-align: center;
}
.contact4-text4 {
  align-self: flex-start;
  text-align: left;
}
.contact4-email {
  align-self: flex-start;
  text-align: center;
}
.contact4-content3 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-icon2 {
  align-self: flex-start;
}
.contact4-contact-info1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content4 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text5 {
  align-self: stretch;
  text-align: left;
}
.contact4-text6 {
  text-align: left;
}
.contact4-phone {
  align-self: flex-start;
  text-align: center;
}
.contact4-content5 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-icon4 {
  align-self: flex-start;
}
.contact4-contact-info2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content6 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text7 {
  align-self: flex-start;
  text-align: left;
}
.contact4-text8 {
  text-align: left;
}
.contact4-address {
  align-self: flex-start;
  text-align: left;
}
@media(max-width: 767px) {
  .contact4-row {
    flex-direction: column;
  }
}

.museu-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.museu-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.museu-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.museu-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.museu-nav22 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav32 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav42 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav52 {
  margin-left: var(--dl-space-space-unit);
}
.museu-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.museu-login {
  width: 45px;
  margin-right: 32px;
}
.museu-burger-menu {
  display: none;
}
.museu-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.museu-mobile-menu1 {
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
.museu-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.museu-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.museu-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.museu-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.museu-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.museu-nav121 {
  margin-bottom: var(--dl-space-space-unit);
}
.museu-nav221 {
  margin-bottom: var(--dl-space-space-unit);
}
.museu-nav321 {
  margin-bottom: var(--dl-space-space-unit);
}
.museu-nav421 {
  margin-bottom: var(--dl-space-space-unit);
}
.museu-nav521 {
  margin-bottom: var(--dl-space-space-unit);
}
.museu-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.museu-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.museu-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.museu-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.museu-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.museu-container1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.museu-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.museu-nav222 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav322 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav422 {
  margin-left: var(--dl-space-space-unit);
}
.museu-nav522 {
  margin-left: var(--dl-space-space-unit);
}
.museu-separator {
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
.museu-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.museu-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.museu-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.museu-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.museu-icon14 {
  width: 24px;
  height: 24px;
}
@media(max-width: 767px) {
  .museu-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .museu-desktop-menu {
    display: none;
  }
  .museu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .museu-nav121 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .museu-nav221 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .museu-nav321 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .museu-nav421 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .museu-nav521 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .museu-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .museu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .museu-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .museu-text {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .museu-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .museu-mobile-menu1 {
    padding: 16px;
  }
  .museu-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .museu-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .museu-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .museu-text {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}

</style>

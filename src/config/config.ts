export default {
  header: {
    search: {
      ru: 'Поиск проекта ...',
      en: 'Find a project ...'
    },
    help: {
      ru: 'Введите ключевое слово. <br><b>Например: <i>заказ, лендинг, цветы, еда</i></b>',
      en: 'Enter a keyword. <br><b>For example: <i>order, landing page, flowers, food</i></b>'
    }
  },
  footer: {
    ru: 'Все права защищены',
    en: 'All rights reserved'
  },
  sidebar: {
    slogan: {
      ru: 'красивая страница <br> успешный старт <br> Вашего бизнеса',
      en: 'beautiful page <br> successful start <br> of Your business',
    },
    available: {
      ru: 'я доступен',
      en: 'available to order',
    },
    links: [
      {
        link: 'about',
        text: {
          ru: 'О себе',
          en: 'About me'
        }
      },
      {
        link: 'skills',
        text: {
          ru: 'Умения и навыки',
          en: 'Skills'
        }
      },
      {
        link: 'projects',
        text: {
          ru: 'Мои работы',
          en: 'My projects'
        }
      },
      {
        link: 'offers',
        text: {
          ru: 'Клиентам и партнерам',
          en: 'Offers'
        }
      }
    ]
  },
  skills: {
    pageTitle: {
      ru: 'Умения и навыки',
      en: 'My skills'
    },
    more: {
      ru: 'Узнать больше',
      en: 'Read more'
    },
    skillsItems: [
      {
        name: 'html',
        image: 'html.jpg',
        text: {
          ru: 'HTML (Hypertext Markup Language) - это код (языка разметки), который используется для структурирования и отображения веб-страницы и её контента.',
          en: 'HTML (Hypertext Markup Language) is the code (markup language) that is used to structure and display a web page and its content.'
        },
        outerLink: 'https://ru.wikipedia.org/wiki/HTML'
      },
      {
        name: 'css',
        image: 'css.webp',
        text: {
          ru: 'CSS (Cascading Style Sheets) — формальный язык декорирования и описания внешнего вида документа (веб-страницы).',
          en: 'CSS (Cascading Style Sheets) is a formal language for decorating and describing the appearance of a document (web page).'
        },
        outerLink: 'https://ru.wikipedia.org/wiki/CSS'
      },
      {
        name: 'JS',
        image: 'jja.jpg',
        text: {
          ru: 'jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML.',
          en: 'jQuery is a set of JavaScript functions that focuses on the interaction of JavaScript and HTML.'
        },
        outerLink: 'https://ru.wikipedia.org/wiki/JQuery'
      },
      // {
      //   name: 'Figma / PS',
      //   image: 'fp.jpg',
      //   text: {
      //   ru: 'Figma — онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной работы в режиме реального времени.',
      //   en: 'Figma is an online service for interface development and prototyping with the ability to organize collaboration in real time.',}
      //   outerLink: 'https://ru.wikipedia.org/wiki/Figma'
      // },
      {
        name: 'Bootstrap',
        image: 'bootstrap.webp',
        text: {
          ru: 'Bootstrap — свободный набор инструментов для создания сайтов и веб-приложений.',
          en: 'Bootstrap is a free set of tools for creating websites and web applications.'
        },
        outerLink: 'https://ru.wikipedia.org/wiki/Bootstrap_(фреймворк)'
      },
      {
        name: 'SASS/LESS',
        image: 'ls.jpg',
        text: {
          ru: 'Препроцессор — инструмент (надстройка над CSS), который добавляет ранее недоступные возможности для CSS, с помощью новых синтаксических конструкций.',
          en: 'A preprocessor is a tool (an add-on to CSS) that adds previously unavailable capabilities to CSS using new syntax.'
        },
        outerLink: 'https://mrmlnc.gitbooks.io/less-guidebook-for-beginners/content/chapter_1/css-reprocessors.html'
      },
      {
        name: 'BEM',
        image: 'bem.jpeg',
        text: {
          ru: 'БЭМ — методология web-разработки, а также набор интерфейсных библиотек, фреймворков и вспомогательных инструментов.',
          en: 'BEM is a web development methodology, as well as a set of interface libraries, frameworks and auxiliary tools.',
        },
        outerLink: 'https://ru.wikipedia.org/wiki/БЭМ'
      },
      {
        name: 'GIT',
        image: 'git.jpg',
        text: {
          ru: 'Git — распределённая система управления версиями.',
          en: 'Git is a distributed version control system.',
        },
        outerLink: 'https://ru.wikipedia.org/wiki/Git'
      },
      {
        name: 'Angular',
        image: 'angular.png',
        text: {
          ru: 'Angular - фреймворк для разработки веб-приложений, написанный на языке TypeScript.',
          en: 'Angular is a framework for developing web applications written in TypeScript.',
        },
        outerLink: 'https://ru.wikipedia.org/wiki/Angular_(%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)'
      },
      {
        name: 'TS',
        image: 'ts.png',
        text: {
          ru: 'TypeScript — язык программирования, позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
          en: 'TypeScript is a programming language positioned as a web application development tool that extends the capabilities of JavaScript.'
        },
        outerLink: 'https://ru.wikipedia.org/wiki/TypeScript'
      },
      {
        name: 'Pickers',
        image: 'pickers.png',
        text: {
          ru: 'Сборщики (бандлеры) – это инструменты, которые помогают объединять и управлять модулями и зависимостями в проекте.',
          en: 'Bundlers are tools that help combine and manage modules and dependencies in a project.',
        },
        outerLink: 'https://tproger.ru/articles/cborshhiki-bandlery-prosto-o-slozhnom-frontend'
      }
    ]
  },
  projects: {
    pageTitle: {
      ru: 'Мои работы',
      en: 'My projects'
    },
    projectsItems: [
      {
        title: 'Momentum',
        image: 'momentum.png',
        outerLink: 'https://aliakseivb.github.io/momentum/',
        keyWords: ['пометки', 'органайзер', 'фон', 'картинки', 'музыка', 'лендинг', 'страница', 'marks', 'organizer', 'background', 'pictures', 'music', 'landing page', 'page'],
      },
      {
        title: 'Osobinca',
        image: 'osobinca.png',
        outerLink: 'https://aliakseivb.github.io/osobinca/',
        keyWords: ['упаковка', 'многостраничник', 'продукты', 'packaging', 'multi-page', 'products', 'packaging'],
      },
      {
        title: 'Rent a Car',
        image: 'auto.png',
        outerLink: 'https://aliakseivb.github.io/cars-hw/',
        keyWords: ['авто', 'аренда', 'auto', 'rent', 'car'],
      },
      {
        title: 'Buildings',
        image: 'home.png',
        outerLink: 'https://aliakseivb.github.io/building/',
        keyWords: ['дома', 'строительство', 'лендинг', 'страница', 'house', 'construction', 'landing', 'page']
      },
      {
        title: 'Macaroons',
        image: 'macaroons.png',
        outerLink: 'https://aliakseivb.github.io/makaroons/',
        keyWords: ['пироженки', 'еда', 'лендинг', 'страница', 'заказ', 'cake', 'food', 'landing page', 'page', 'order']
      },
      {
        title: 'Dashboard',
        image: 'dash.png',
        outerLink: 'https://aliakseivb.github.io/dashboard/',
        keyWords: ['дашборд', 'лендинг', 'страница', 'dashboard', 'landing', 'page']
      },
      {
        title: 'Registration',
        image: 'reg.png',
        outerLink: 'https://aliakseivb.github.io/reg-site/',
        keyWords: ['регистрация', 'форма', 'сайт', 'страница', 'registration', 'form', 'site', 'page'],

      },
      {
        title: 'Tea',
        image: 'tea.png',
        outerLink: 'https://aliakseivb.github.io/tea/',
        keyWords: ['чай', 'форма', 'страница', 'tea', 'form', 'page']
      },
      {
        title: 'Sushi',
        image: 'sushi.png',
        outerLink: 'https://aliakseivb.github.io/suchi/',
        keyWords: ['кафе', 'доставка', 'суши', 'страница', 'лендинг', 'заказ', 'еда', 'cafe', 'delivery', 'sushi', 'page', 'landing page', 'order', 'food']
      },
      {
        title: 'Shelter',
        image: 'shelter.png',
        outerLink: 'https://aliakseivb.github.io/rsschool-cv/shelter/',
        keyWords: ['животные', 'звери', 'страница', 'лендинг', 'приют', 'animals', 'beasts', 'page', 'landing page', 'shelter']
      },
      {
        title: 'Burger',
        image: 'burger.png',
        outerLink: 'https://aliakseivb.github.io/burgers/',
        keyWords: ['кафе', 'доставка', 'бургер', 'страница', 'лендинг', 'заказ', 'еда', 'cafe', 'delivery', 'burger', 'page', 'landing', 'order', 'food']
      },
      {
        title: 'Plants',
        image: 'plants.png',
        outerLink: 'https://aliakseivb.github.io/alexboronin.github.io/',
        keyWords: ['цветы', 'растения', 'страница', 'лендинг', 'flowers', 'plants', 'page', 'landing page']
      }
    ]
  },
  about: {
    title: {
      ru: 'Алексей Боронин',
      en: 'Aliaksei Baronin'
    },
    subTitle: {
      ru: 'frontend-разработчик / Беларусь',
      en: 'frontend-developer / Belarus'
    },
    animeText: {
      ru: 'Я',
      en: 'I`m'
    },
    animeArr: {
      ru: ['креативен', 'амбициозен', 'мотивирован', 'frontend-разработчик'],
      en: ['creative', 'ambitious', 'motivated', 'frontend developer']
    },
    presentation: {
      ru: ' Привет!\n' +
        '    <br><br>Будем знакомы! Я Алексей — frontend-разработчик со стажем,\n' +
        '    который со 100% вероятностью гарантирует качественный продукт по результату нашего с Вами сотрудничества!\n' +
        '    <br><br>\n' +
        '    Открыт для общения и легко настраиваем на каждого клиента!!!\n' +
        '    <br>Создам для Вас ваш уникальный сайт (страницу) по Вашему техническому заданию и дизайну любой сложности, используя для\n' +
        '    этого лучшие практики и наработки современной WEB-разработки, с учетом последних "писков" моды.\n' +
        '    <br><br>\n' +
        '    Стоимость - обсуждаема. Сроки - оговариваются и соблюдаются. Правки - обсуждаются и вносятся.\n' +
        '    Баги/недочеты - своевременно исправляются/редактируются/финансово не обременяются.\n' +
        '    <br><br>\n' +
        '    СВЕРСТАЮ | ЗАПРОГРАММИРУЮ | НАСТРОЮ АДАПТИВ\n' +
        '    <br><br>\n' +
        '    Ваш сайт будет красивым и удобным.',
      en: 'Hello!\n' +
        '     <br><br>Let\'s get to know each other! I\'m Alexey, an experienced frontend developer.\n' +
        '     which with 100% probability guarantees a quality product as a result of our cooperation with you!\n' +
        '     <br><br>\n' +
        '     Open for communication and easy to customize for each client!!!\n' +
        '     <br>I will create for you your unique website (page) according to your technical specifications and design of any complexity, using for\n' +
        '     These are the best practices and best practices of modern WEB development, taking into account the latest fashion trends.\n' +
        '     <br><br>\n' +
        '     The cost is negotiable. Deadlines are agreed upon and adhered to. Edits are discussed and made.\n' +
        '     Bugs/shortcomings are corrected/edited/not financially burdened in a timely manner.\n' +
        '     <br><br>\n' +
        '     I\'M CATCHING UP | I WILL PROGRAM | SETTING ADAPTIVE\n' +
        '     <br><br>\n' +
        '     Your website will be beautiful and convenient.'
    },
    animeTextRed: {
      ru: ['Не откладывайте свое правильное решение на завтра, примите его сейчас!',
        'Я со своей стороны добавлю комфортное сотрудничество!'],
      en: ["Don't put off your right decision until tomorrow, make it now!",
        'For my part, I will add comfortable cooperation!']
    }
  },
  offer: {
    title: {
      ru: 'Клиентам и партнерам',
      en: 'For clients and partners'
    },
    offerItems: [
      {
        image: 'client.svg',
        info: {
          ru: '<div class="offer__item_info-title">Я ценю Ваше время и Ваши средства</div><p>Уважаемые Клиенты, предлагая Вам свои услуги, я могу гарантировать добросовестное отношение к выполнению заказа: соблюдение оговоренныx сроков и качество выполненной работы.<br><br>Обращаясь за моими услугами Вы получите комфортное сотрудничество и итоговый конкурентно-способный продукт, не уступающий по качеству (внешний вид, функциональность, интерактивность) Вашим предполагаемым конкурентам, что благоприятно отразится на Вашем бизнесе.</p>',
          en: '<div class="offer__item_info-title">I appreciate your time and your funds</div><p>Dear Clients, offering you my services, I can guarantee a conscientious attitude towards fulfillment of the order: compliance with the agreed deadlines and quality of work performed.<br><br>By applying for my services you will receive comfortable cooperation and a final competitive advantage a product that is not inferior in quality (appearance, functionality, interactivity) to yours potential competitors, which will have a positive impact on your business.</p>'
        },
      },
      {
        image: 'partner.svg',
        info: {
          ru: '<div class="offer__item_info-title">Партнерство - это важно</div><p>Коллеги по web-разработке, а также стартап-проекты, готов предложить Вам свои услуги, а в долгосрочной перспективе и партнерство на постоянной основе.<br><br>Порой говорят "не хватает рук". Если вы столкнулись с такой ситуацией, то я с радостью рассмотрю Ваши предложения по взаимовыгодному сотрудничеству. Могу заверить, что мои знания и в некоторой степени опыт, в совокупности с трудолюбием, поспособствуют нашему плодотворному совместному труду. Я всегда открыт к общению и обсуждению любых коммерческих и производственных вопросов, которые могут возникнуть в процессе нашей совместной деятельности.</p>',
          en: '<div class="offer__item_info-title">Partnership is important</div><p>Colleagues in web development, as well as startup projects, are ready to offer you their services, and in the long term perspective and partnership on an ongoing basis.<br><br>Sometimes they say “there are not enough hands.” If you are faced with such a situation, then I will be happy to consider your proposals for mutually beneficial cooperation. I can assure you that my knowledge and to some extent experience, combined with hard work, will contribute to our fruitful joint work. I am always open to communication and discussion of any commercial and production issues that may arise in the process of our joint activities.</p>'
        },
      }
    ],
    desc: {
      ru: '<p class="red">Все обсуждаемо и решаемо</p>\n' +
        '    <p>Порядочное сотрудничество и надежное партнерство = успешный <span class="red">старт</span>= успешный <span class="red">проект</span>= успешный <span class="red">бизнес</span></p>',
      en: '<p class="red">Everything is discussed and decided</p>\n' +
        '     <p>Honest cooperation and reliable partnership = successful <span class="red">start</span> = successful <span class="red">project</span>= successful <span class="red">business</span></p>'
    }
  },
  layout:
    {
      about: 'back_1.jpg',
      skills: 'back_2.jpg',
      projects: 'back_3.jpg',
      offers: 'back_4.jpg'
    }
}

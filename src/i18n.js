// src/i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  fr: {
    message: {
      hello: 'bonjour le monde'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;

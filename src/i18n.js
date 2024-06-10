// src/i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './locales'; // Adjust the path to your locales

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // Set default locale
  messages, // Set locale messages
});

export default i18n;

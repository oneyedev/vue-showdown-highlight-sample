import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'
import 'github-markdown-css'

import showdownHighlight from 'showdown-highlight'
import 'highlight.js/styles/github.css'
showdown.extension('showdownHighlight', showdownHighlight)

Vue.use(VueShowdown)
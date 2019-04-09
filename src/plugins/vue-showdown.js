import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'
import 'github-markdown-css'

import showdownHighlight from 'showdown-highlight'
import 'highlight.js/styles/github.css'


const colorTextExtension = {
    type: 'lang', // define new syntax
    regex: /\*\*\*\[(#[0-9A-F]{6})\](.+)\*\*\*/g,
    replace: '<span style="color:$1">$2</span>'
};
let x = 0;
const h1LinkExtension = {
    type: 'output', // add feature to existing syntax
    filter: function (text, converter) {
        if (x < 1) {
            ++x
            const html = converter.makeHtml(text)
            return html.replace(/<h1 id="(.+)">(.+)<\/h1>/g, `<h1 id="$1"><a href="#$1" class="anchor" aria-hidden="true"><i style="visibility: visible" class="octicon octicon-link material-icons">link</i></a>$2</h1>`)
        }
        return text;
    }
}

showdown.extension('showdownHighlight', showdownHighlight)
showdown.extension('colorTextExtension', colorTextExtension)
showdown.extension('h1LinkExtension', h1LinkExtension)
Vue.use(VueShowdown)
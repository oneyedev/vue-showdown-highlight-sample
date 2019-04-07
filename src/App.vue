<template>
  <div id="app">
    <vue-showdown
      :markdown="markdown"
      flavor="github"
      class="markdown-body"
      :extensions="['showdownHighlight']"
    ></vue-showdown>
  </div>
</template>

<script>
const MARKDOWN_SAMPLE = `
# This is a h1
## This is a h2 
### This is a h3
#### This is a h4
##### This is a h5
###### this is a h6
***
- This is a unordered item1
- This is a unordered item2
- This is a unordered item3

1. This is a ordered item1
1. This is a ordered item2
1. This is a ordered item3

* depth1
 * depth2
   * depth3 is not working! (maybe.. bug?)

***
[This is a hyper link](https://google.com)
![This is a image](https://picsum.photos/200/200/?random)
![This is a image alt](https://)
***

<center>This text is centered</center>
**This is a emphasizing text**
*This is a italic-style text*
> This is a block quote

\`\`\`sh
This is a code block
\`\`\`
\`\`\`js
const HELLO_WORLD = 'Hello World!'
\`\`\`
`;
export default {
  name: "app",
  data() {
    return {
      markdown: MARKDOWN_SAMPLE
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>

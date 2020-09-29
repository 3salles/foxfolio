var app = new Vue({
  el: '#app',
  data: {
    meta: [], // Dados da sheet Meta
    items: [] // Dados da sheet Items
  },
  mounted () {
    // Coloque aqui link do Sheety do meta
    axios
      .get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/meta')
      .then(response => (this.meta = response.data.meta[0]))
    
    // Coloque aqui o link do Sheety de items
    axios
      .get('https://api.sheety.co/4d058b45974651c077d376c5fcf95c9d/portifolio/items')
      .then(response => (this.items = response.data.items))
  },
  methods: {
    // Convert comma seperated tags to an array
    getTags: function (tags) {
      return tags.split(',')
    }
  }
})
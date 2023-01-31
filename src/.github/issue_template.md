## Descrição

Tratar montagem do componente Previsao.vue para que ao inicializar método getWeather() valide se var 'city' está com valor NULL.

-[ ] Alterar forma com que é executado o método getWeather().
-[ ] Validar se variável 'city' está com valor NULL.

## Ocorrência

mounted () {
    this.getWeather()
    this.interval = setInterval(() => {
        this.getWeather()
        console.log('atualizou')
    }, 15 * 60 * 1000)
},
beforeDestroy () {
    clearInterval(this.interval)
},
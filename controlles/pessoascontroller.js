const path = require('path')
let pessoas = ['joao', 'maria']



class PessoasController {
    static index(req, res) {
        res.sendFile(path.resolve('index.html'))
    }
    static store(req, res) {
        pessoas.push(req.body.nome)
        console.log(pessoas)
    }
}

module.exports = PessoasController
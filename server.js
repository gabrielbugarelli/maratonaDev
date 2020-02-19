//CONFIGURANDO O SERVIDOR
const express = require( "express" )
const server = express()

//configurar o servidor para apresentar os arquivos extras
server.use( express.static( "public" ) )

//habilitar body do formulario 
server.use( express.urlencoded( { extended: true } ) )

//CONFIGURANDO A TAMPLATE ENGINES
const nunjucks = require( "nunjucks" )
nunjucks.configure( "./", {
    express: server,
    noCache: true
} )

//Lista de doadores: Array
const donors = [
    {
        name: 'Gabriel Fonseca',
        blood: 'O-',
    },
    {
        name: 'Rodrigo Fernandes',
        blood: 'AB+',
    },
    {
        name: 'Aline Rosani',
        blood: 'A+',
    },
    {
        name: 'Mayk Brito',
        blood: 'O+',
    },

]

//CONFIGURAR A APRESENTAÇÃO DA PAGINA
server.get( "/", function ( req, res ) {
    return res.render( "index.html", { donors } )

} )

server.post( "/", function ( req, res ) {
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //colocando dados dentro do array
    donors.push( {
        name: name,
        blood: blood,
    } )

    return res.redirect( "/" )
} )

//LIGAR O SERVIDOR E PERMITIR ACESSO NA PORTA 3000
server.listen( 3000, function () {
    console.log( 'Servidor iniciado!' )
} )
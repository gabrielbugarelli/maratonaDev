//CONFIGURANDO O SERVIDOR
const express = require( "express" )
const server = express()

//configurar o servidor para apresentar os arquivos extras
server.use( express.static( "public" ) )

//CONFIGURANDO A TAMPLATE ENGINES
const nunjucks = require( "nunjucks" )
nunjucks.configure( "./", {
    express: server
} )

//CONFIGURAR A APRESENTAÇÃO DA PAGINA
server.get( "/", function ( req, res ) {
    return res.render( "index.html" )

} )

//LIGAR O SERVIDOR E PERMITIR ACESSO NA PORTA 3000
server.listen( 3000, function () {
    console.log( 'Servidor iniciado!' )
} )
const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const JogoController = require('../controllers/JogoController')
const GeneroController = require('../controllers/GeneroController')
const router = express.Router()

//Rotas do UsuarioController
router.get('/getUsuario/:Cod_SeqUsuario?', UsuarioController.getUsuario)
router.delete('/deleteUsuario/:Cod_SeqUsuario', UsuarioController.deleteUsuario)
router.post('/postUsuario', UsuarioController.postUsuario)
router.put('/putUsuario', UsuarioController.putUsuario)

//Rotas do JogoController
router.get('/getJogo/:Cod_SeqJogo?', JogoController.getJogo)
router.delete('/deleteJogo/:Cod_SeqJogo', JogoController.deleteJogo)
router.post('/postJogo', JogoController.postJogo)
router.put('/putJogo', JogoController.putJogo)

//Rotas do GeneroController
router.get('/getGenero/:Cod_SeqGenero?', GeneroController.getGenero)
router.delete('/deleteGenero/:Cod_SeqGenero', GeneroController.deleteGenero)
router.post('/postGenero', GeneroController.postGenero)
router.put('/putGenero', GeneroController.putGenero)

module.exports = router
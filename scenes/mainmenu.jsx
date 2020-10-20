import React from 'react'

function MainMenu() {
    function Titulo() {
        return <h1>Player Select</h1>
    }
    function MapaMundi(pais) {
        return <>
            <h1>{pais.nome}</h1></>
    }
    function ListaPersonagens({ personagens }) {
        return personagens.map((personagemSelecionado) => {
            return <> {personagemSelecionado.nome} </>
        })
    }

    function Personagem() {
        return <>
            <span>Opa</span>
            <h1>oi</h1>
            
    const p1 = {}
    const p2 = {}

export default MainMenu

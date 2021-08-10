import React from 'react'

export const DateInput = () => {

    const formatarData = (data) => {
        const dia = data.getDate().toString().padStart(2, "0")
        const mes = (data.getMonth() + 1).toString().padStart(2, "0")
        const ano = data.getFullYear()
        return `${dia}/${mes}/${ano}`
    }

    const obterDataHoje = () => {
        return new Date()
    }

    const obterPrimeiroDiaDoMesFormatado = () => {
        const hoje = obterDataHoje()
        const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1)
        return formatarData(primeiroDiaMes)
    }

    const obterHojeFormatado = () => {
        const hoje = obterDataHoje()
        return formatarData(hoje)
    }

    return (
        <div>
            <span>
                Range de datas:
            </span>
            <br/>
            <div>
               <span>
                   {obterPrimeiroDiaDoMesFormatado()}
               </span>
                até
                <span>
                    {obterHojeFormatado()}
                </span>
            </div>
        </div>
    )
}
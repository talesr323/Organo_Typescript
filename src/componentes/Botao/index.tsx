import React from 'react'
import { ReactElement } from 'react';
import './Botao.css';



interface BotaoProps {
    //pode ser string e pode ser react element 
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao;

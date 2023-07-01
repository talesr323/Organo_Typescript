import './CampoTexto.css'

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}
//desconstruindo para não precisar usar props.valor, props.obrigatorio, etc.......
const CampoTexto = ({ aoAlterado, placeholder, label, valor, obrigatorio = false }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
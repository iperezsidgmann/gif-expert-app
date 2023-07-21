import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // Evento que permite escribir en el input para enviarlo a la lista
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    // Evento que permite enviar el texto
    const onSubmit = (event) => {
        event.preventDefault();
        //el texto debe ser mayor o igual a uno, evitando que se envíen 'vacios', trim permite eliminar espacios adelante y atrás del texto que se escriba en el input.
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        //hacemos que al presionar enter se borre lo anteriormente escrito
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

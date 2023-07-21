import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        // Validación
        if (categories.includes(newCategory)) return;

        // Desestructuración de la categoría
        setCategories([newCategory, ...categories]);
    };

    return (
        <div>
            <h1>GifExpertApp</h1>
            <hr/>
            <br/>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) =>
                (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </div>
    );
};

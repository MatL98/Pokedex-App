import React, { useContext, useState } from 'react';
import './ItemPokemon.css';

const ItemPokemon = (pokemons)=>{
    const pokes = pokemons.pokemons;

    const [colorType, setColorType] = useState('');
    const colorsTypes = [
        {color: 'red', type: 'fire'},
        {color: 'green', type: 'grass'},
        {color: '#b558b5', type: 'poison'},
        {color: 'lightblue', type: 'flying'},
        {color: 'blue', type: 'water'},
        {color: '#9c9c27', type: 'bug'},
        {color: 'gray', type: 'normal'},
    ]

    const getColorOfType = (type) => {
        const color =  colorsTypes.filter((item) => {
            if (item.type == type) return item.color;
        })

        return color[0].color
    }

    return(
        <div className="cardItem">
            <div className="pokeInfo">
                <span>#{pokes.id}</span>
                <img src={pokes.sprites.front_default}/>
                <h1>{pokes.name}</h1>
                <div className="pokemomnType">
                    {pokes.types.map((t)=>{
                        return <div className='divPokemonType' style={{backgroundColor: getColorOfType(t.type.name)}}>{t.type.name}</div>
                    })}
                </div>
            </div>
        </div>
)
}
export default ItemPokemon

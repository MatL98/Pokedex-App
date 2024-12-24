import ItemPokemon from "./ItemPokemon"
import './ListPokemon.css'
import { Context } from "../../Context/Context";
import SearchBar from "../NavBar/SearchBar/SearchBar";
import React, { useEffect, useState, useContext } from "react";


const ListPokemon = () =>{
    const [pokemones, setPokemones] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState()
    const [loading , setLoading] = useState(true)
    const { getPokemonData, getPokemon, searchPokemon } = useContext(Context)

    const getNames = async (op)=>{
        setLoading(true)
        const data = await getPokemon(20 * page)
        const pokemonsNames = data.results;
        const promises = pokemonsNames.map(async(pokes)=>{
            return await getPokemonData(pokes.url)
        })

        const result = await Promise.all(promises)
        const totalPokemons = data.count;
        const totalPages = (Math.floor(totalPokemons / 15))

        setPage((page) => page + 1)
        setTotal(totalPages)

        setPokemones((prev) => [...prev, ...result])
        setLoading(false)           
    }
    
    useEffect(()=>{
        getNames()
        setPage(0)
    }, [])

    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 50
        ) {
          if (!loading) getNames();
        }
    };      
    
    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]); 
    
    const onSearch = async (pokemon) =>{
        setLoading(true)
        const result = await searchPokemon(pokemon)
            setPokemones([result])
        setLoading(false)
    }

    return(
        <div className="pokedex">
            <SearchBar onSearch={onSearch} cleanSearch={getNames}/>
            <div className="title"></div>
            {loading ? (<h4>cargando pokemones...</h4>)
            :
            (<div className="pokedex-list">
                {pokemones.map((pokes, idx)=>{
                    return <ItemPokemon pokemons={pokes} key={pokes.name}/>})}</div>)
            }
        </div>
    )
}
export default ListPokemon;
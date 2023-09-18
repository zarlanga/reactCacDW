import React, {useState} from "react";

const Todo = () => {
    const [items, citems] = useState([]);
    const [inputu, cin] = useState("");

    const handleChange = (e) => {
        cin(e.target.value)
    }

    const submiteado = (e) => {
        e.preventDefault()
        citems([...items, inputu])
        cin("")
        
    }

    const handleDelete = (e) => {
        citems( items.filter((it, i) => i != e.target.name ))   
    }

    const handleChangeIn = (e) => {
        citems(
            items.map((it, ind) =>{"in"+ ind == e.target.name  ? e.target.value : it})
        )
    }

    const crearLista = () =>{
        return items.map((item, index) =>
        <>
            <button name={index} onClick={handleDelete}>x</button>
            <input name={"in"+index}value={item}
            onChange={handleChangeIn}
            />
            <br/>
        </>)
    }

    return(
        <>
        <div >{crearLista()}
        </div>

        <form action="" onSubmit={submiteado}>
            <input type="text" 
            value={inputu} 
            onChange={handleChange}
            placeholder="Ingrese item" />
            <input type="submit" value="entra?" />
        </form>
        </>
    )
}

export default Todo;
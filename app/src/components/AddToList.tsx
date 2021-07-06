import React, { useState } from 'react'
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList: React.FC<IProps> = ({people,setPeople}) => {
    
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,[e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (
            !input.name || !input.age
        ) {
            return 
        }
        setPeople([
            ...people, {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ])
        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={handleChange} name="name" />
            <input type="text" placeholder="age" className="AddToList-input" value={input.age} name="age" onChange={handleChange}/>
            <input type="text" placeholder="Image's Url" className="AddToList-input" value={input.img} name="img" onChange={handleChange}/>
            <textarea placeholder="Notes" className="AddToList-input" value={input.note} name="note" onChange={handleChange} />
            <button className="AddToList-btn" onClick={handleClick}>Add person</button>
        </div>
    )
}

export default AddToList

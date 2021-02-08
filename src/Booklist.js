import React from 'react'
import './index.css'

function Booklist() {
    return (
        <section className="booklist">
            <Book/>
        </section>
    )
}


const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
            {6+6} db
        </article>
    )
}
const Image = () => {
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/61VXXUzpR+L._SX258_BO1,204,203,200_.jpg" alt="book" />
    )
}
const Title = () => {
    return (
        <h1>I love You to the moon and back</h1>
    )
}
const Author = () => {
    return (
        <h4 style={{color: 'grey', letterSpacing: '5px'}}>Amelia Hepworth</h4>
    )
}

export default Booklist

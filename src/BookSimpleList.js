import React from 'react'
import './index.css'

const books = [
    {
        id: 1,
        title: 'I love You to the moon and back', 
        img: 'https://images-na.ssl-images-amazon.com/images/I/61VXXUzpR+L._SX258_BO1,204,203,200_.jpg', 
        author: 'Amelia Hepworth'
    },
    {
        id: 2,
        title: 'The Hill We Climb and Other Poems', 
        img: 'data:image/webp;base64,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', 
        author: 'Amanda Gorman'
    },
]

function BooklistSimpeList() {
    return (
        <section className="booklist">
            {books.map((book, index) => {
                return <Book {...book} key={index}></Book>
            })}
        </section>
    );
}
const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="book" />
            <h1>{title.toUpperCase()}</h1>
            <h4 style={{color: 'grey', letterSpacing: '5px'}}>{author}</h4>
        </article>
    )
}
export default BooklistSimpeList

import React from 'react'
import './index.css'
import {booksData} from './BookData'

function BookClickEvenet() {
    return (
        <section className="booklist">
            {booksData.map((book, index) => {
                return <Book {...book} key={index}></Book>
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;

    const clickHandler = (e) => {
        console.log(e.target)
        console.log(e)
    }
    const clickHandler2 = (author) => {
        console.log(author)
    }
    return (
        <article className="book" onMouseOver={()=>{
            console.log(title)
        }}>
            <img src={img} alt="book" />
            <h1 onClick={()=> alert('h1')}>{title.toUpperCase()}</h1>
            <h4 onClick={()=> console.log(title)}style={{color: 'grey', letterSpacing: '5px'}}>{author}</h4>
            <button type="button" onClick={clickHandler}>Button</button>
            <button type="button" onClick={clickHandler2}>Button 2</button>
        </article>
    )
}
export default BookClickEvenet

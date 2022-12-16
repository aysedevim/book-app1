import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { BookContext } from '../context/Context'
import { getBooks } from '../function/http/http'
import { useNavigate } from 'react-router-dom'

export default function BookList() {

    const [visible, setVisible] = useState(true)
    const navigate =useNavigate();
    const context = useContext(BookContext);
    const detail = (b) => {
        //setVisible = !setVisible
        console.log(b)
    }

    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks();  //Api den aldığı books
            context.setBook(books)
            //console.log(books)

        }
        getAllBooks()
    }, [])
    return (
      <div className='row' >
        <div className='col-md-7'>
            <button className='btn btn-primary' onClick={()=>navigate("/book/create")}>New Book</button> 
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.books.map(b => {
                            return (
                                <tr onClick={() => detail(b)} key={b.id}>
                                    
                                    <td>{b.bookname}</td>
                                    <td>{b.description}</td>
                                    <td>{b.author}</td>
                                    <td><img src={b.picture} height="50" width="50" /></td>
                                    <td>
                                    <button className='btn btn-success' onClick={()=> navigate("/book/update" +b.id, {state:{id:b.id}})}> Update Button</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                </div>
    )
}

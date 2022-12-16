import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { BookContext } from '../context/Context'
import { getBooks } from '../function/http/http'

export default function BookList() {
    const context = useContext(BookContext)
    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks(); // api den çekilen kitaplar
            const rbooks = [];


            for (let c of books) {
                if (c.recyled == true) {
                    rbooks.push(c)
                }
            }
            context.setBook(rbooks);
        }
        getAllBooks();
    }, [])
    return (
        
            <table className='table'>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Decription</th>
                        <th>Author</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {context.books.map(b => {
                        return (
                            <tr key={b.id}>
                                <td>{b.bookname}</td>
                                <td>{b.description}</td>
                                <td>{b.author}</td>
                                <td><img src={b.picture} height="50" width="50" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        
        
  )
}

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {addBook} from '../function/http/http'
import BookPage from './BookPage';

export default function BookCreate() {
    const navigate = useNavigate();
    const [newBook, setNewBook] = useState({
        bookname: "",
        description: "",
        author: "",
        picture: "",
        recyled: false,
    });
    const createBook = () => {
        addBook(newBook)
            .then((res) =>{
                
                    alert("Ekleme İşlemi Başarılı");
                    navigate("/")
                
            });
    }
    const onChangeText = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    }

    return (
        <BookPage book={newBook} onChangeText={onChangeText} handleBook={createBook}/>
    )
}

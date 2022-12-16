import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { getBook, getBooks, updateSelectedBook } from '../function/http/http'
import { useNavigate } from 'react-router-dom';
import BookPage from './BookPage';

export default function BookUpdate() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.id)

    const [selectedBook, setSelectedBook] = useState({
        bookname: "",
        description: "",
        author: "",
        picture: "",
        recyled: false,
    });
    useEffect(() => {
      getBook(location.state.id).then((res)=>{
        setSelectedBook(res.data)

      })
      
    }, [])
    
    const updateBook= () => {
      updateSelectedBook(location.state.id,selectedBook).then((res)=>{
        if(res){
        alert("Güncelleme Başarılı") 
        
      }
       
      navigate("/")
       
    })
  }
    const onChangeText = (event) => {
        setSelectedBook({ ...selectedBook, [event.target.name]: event.target.value })
    }
    return (
      <BookPage book={selectedBook} onChangeText={onChangeText} handleBook={updateBook}/>
    )
}

import { createContext, useReducer } from "react";

export const BookContext = createContext( 
    {
        bookList: [] //değişecek nesne
        
    }
);
    // action : parametre, metot ismi
function bookReducer(state, action) {
    switch (action.type) {
        case "SET":
            const inverted = action.payload.reverse(); // reverse büyükten küçüğe sıralar
            return inverted;
        default:
            return state;
    }
}

function BookProvider({children}) {
    const [bookState, dispatch] = useReducer(bookReducer, []); //dispatch(obje):göndermek

    function setBook(books) {
        dispatch({type:'SET', payload: books}) 
    };

    const value = {
        books: bookState,
        setBook: setBook
    };
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
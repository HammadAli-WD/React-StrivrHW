import React, { Component } from 'react'
import { Row, FormControl} from 'react-bootstrap'
import Booklistitem from './Booklistitem'

export default class Booklist extends Component {
    state = {
        books:[],
        search: ""            
    }
    
    render() {        
        return (
            <>
            
            <Row>
            <FormControl
            placeholder="search"
            value = {this.state.value}
            onChange = {(e) => this.setState({ search: e.currentTarget.value.toLowerCase()})}
            />
            </Row>
            <Row>
               {this.state.books
               
               .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
               .map( book => 
                <Booklistitem key={book.asin} item = {book}/>
                )}
            </Row>
            </>
        )
    }
   componentDidMount = async() => {
       const resp = await fetch ("https://striveschool.herokuapp.com/books?offset=0&limit=20")

       if (resp.ok) {
           const data = await resp.json()
           console.log (data);
           this.setState({
               books:data
           })
       }
   }
    

}

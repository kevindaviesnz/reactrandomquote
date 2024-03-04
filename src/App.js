
import './App.css';
import React from 'react';

const NewQuoteButton = (props) => {
  return (
    <button id="new_quote" onClick={props.handleNewQuoteButtonClick} >Get another quote</button>
  );
};

const QuoteText = (props) => {
  return (
    <div id="text">
      {props.quoteText}
    </div>
  );
};

const QuoteAuthor = (props) => {
  return (
    <div id="author">
      {props.quoteAuthor}
    </div>
  );
};


class QuoteBox extends React.Component {

  constructor(props) {
    super(props)
    const quotes = [
      ["Say hello to my little friend.","Tony Montana"],
      ["The first rule of Fight Club is you do not talk about Fight Club", "Tyler Durden"]
    ]
    this.state = {
      quotes: quotes,
      quote_index: 0
    }
    this.handleNewQuoteButtonClick = this.handleNewQuoteButtonClick.bind(this)
  }

  handleNewQuoteButtonClick(event) {
    this.setState(prevState => {
        const idx =   Math.floor(Math.random() * prevState.quotes.length)
        console.log('handleNewQuoteButtonClick()')
        console.log("index = " + idx)
        return {
          quotes: prevState.quotes,
          quote_index: idx
        }
      })    
  }

  render() {
    const quote_idx = this.state.quote_index
    const quote_text = this.state.quotes[quote_idx][0]
    const quote_author = this.state.quotes[quote_idx][1]
    return <div id="quote-box">
      <QuoteText quoteText={quote_text}/>
      <QuoteAuthor quoteAuthor={quote_author} />
      <NewQuoteButton handleNewQuoteButtonClick={this.handleNewQuoteButtonClick} />
    </div>
  }

}

function App() {

  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;


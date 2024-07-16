import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [index,setIndex] = useState(0)
  const [quote, setQuote] = useState({});

  const [background,setBackground] = useState("purple")

  const colors=["green","blue","red","black","orange","brown","gray"]

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };


  const updateQuote = () => {
    const randomIndex = Math.floor(Math.random() * 20) + 1;
    const randomColorIndex = Math.floor(Math.random() * colors.length);
  
    
    setIndex(randomIndex);
    setBackground(colors[randomColorIndex]);
  };
  

  return (
    
    <div style={{backgroundColor: background}}  className="background">
    <div className="main-box" id="quote-box">
        {quote.quotes && quote.quotes.length > 0 ? (
          <div className="qbox" >
            <p id="text" style={{color: background,fontWeight:700}}>"{quote.quotes[index].quote}"</p>
            <div className="author">
            <p id="author" style={{color: background}}>~~{quote.quotes[index].author}~~</p>
            </div>
            
          </div>
        ):(<div className="qbox">
          <p>Please Wait</p>
        </div>)}
        <div className="btnContainer">
          <button id="btnTwitter" style={{backgroundColor: background}}><a href="twitter.com/intent/tweet" id="tweet-quote">T</a></button>
          <button id="new-quote" className="btnNext" onClick={updateQuote} style={{backgroundColor: background}}>Next Quote</button>
        </div>
      </div>
      <footer>By Udara Shanuka</footer>
    </div>
      

  );
};

export default App;

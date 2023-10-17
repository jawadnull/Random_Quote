//import logo from './logo.svg';
import React ,{useState}from 'react';
import './App.css';
import colorsBlackWhite from './arrayOfColor'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFontAwesome)


const element = <FontAwesomeIcon icon={faTwitter} />


function App() {
  const [qoute,setQoute]=useState("Life isn’t about getting and having, it’s about giving and being.");
  const [author,setAuthor]=useState("Kevin Kruse");
  const [color,setColor]=useState('#282c34');
 



const qouteArray=[
{
 qoute:"Dreaming, after all, is a form of planning.",
 author:"Gloria Steinem"
},
{
  qoute:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  author:"Joshua J. Marine"
},
{
  qoute:"Your time is limited, so don’t waste it living someone else’s life.",
  author:"Steve Jobs"
},
{
  qoute:"Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
  author:"Johann Wolfgang von Goethe"
},
{
  qoute:"Certain things catch your eye, but pursue only those that capture the heart.",
  author:"Ancient Indian Proverb"
}
,
{
  qoute:"We become what we think about.",
  author:"Earl Nightingale"
}
,
{
  qoute:"It does not matter how slowly you go as long as you do not stop.",
  author:"Confucius"
},
{
  qoute:"I have learned over the years that when one’s mind is made up, this diminishes fear.",
  author:"Rosa Parks"
},
{
  qoute:"Build your own dreams, or someone else will hire you to build theirs.",
  author:"Farrah Gray"
},
{
  qoute:"It is never too late to be what you might have been.",
  author:"George Eliot"
}
]




 const getRandomQuote=()=>{
  let randomNumber=Math.floor(qouteArray.length * Math.random());
   
  setQoute(qouteArray[randomNumber].qoute);
  setAuthor(qouteArray[randomNumber].author);
  setColor(colorsBlackWhite[randomNumber]);
 }

  return (
    <div className="App">
      <header className='App-header' style={{backgroundColor:color , color:color}} >

        <div id="quote-box" style={{ color:color}} >
        <h3 className='text' id="text">" {qoute} "</h3>
        <p className='author' id="author">- {author}</p>
        <div id="buttons" >
        <button style={{backgroundColor:color }} >
          <a 
          id="tweet-quote" 
          href={encodeURI(`https://www.twitter.com/intent/tweet?text=${qoute} -${author}`)}>
          {element}</a>
          </button>  
        <button style={{backgroundColor:color }} id="new-quote" onClick={()=>getRandomQuote()}>NEW QUOTE</button>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import React,{Component} from 'react';
import '../styles/bottomFilter.css';
import { Card } from 'react-bootstrap';
import plane from '../images/plane1.png';


function CardData() {
    const rtn = [{
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      }, {
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      }, {
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      },  {
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      },
      {
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      },
      {
        title: "Banglore to Hyderabed",
        desc: "03 Feb 05:00 hrs - 09:00 hrs",
      }]
    return rtn;
  }
  
  class Cards extends React.Component {
    render() {
      const cardData = CardData();
      return (
        <section>
        {
          cardData.map((card, i) => {
            return (
            <Card key={i} id="card"  style={{width:'18rem'}} className="cardCls bottomCard">
            <Card.Body className="brandDetailCls bottomFilterCard"><div class="image-cropper"><img
          alt=""
          src={plane}
          width="8"
          height="8"
          className="d-inline-block align-top planeCls"
        /></div>
        <div style={{marginLeft:'10px'}}><span>{card.title}</span><span>{card.desc}</span>
        </div></Card.Body>
            </Card>
            )
          })
        }
        </section>
      )
    }
  }
  
  class Display extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCard: 0,
        position: 0,
        cardStyle: {
          transform: 'translateX(0px)'
        },
        width: 0,
      };
    }
  
    componentDidMount() {
      let boxWidth = document.getElementsByClassName("cardCls").clientWidth;
      this.setState({ width: boxWidth });
    }
    
    // func: click the slider buttons
    handleClick(type) {
      // get the card's margin-right
      let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
      margin = JSON.parse(margin.replace(/px/i, '')); 
  
      const cardWidth = this.state.width; // the card's width
      const cardMargin = margin; // the card's margin
      const cardNumber = CardData().length; // the number of cards
      let currentCard = this.state.currentCard; // the index of the current card
      let position = this.state.position; // the position of the cards
  
      // slide cards
      if(type === 'next' && currentCard < cardNumber-1) {
        currentCard++;
        position -= (cardWidth+cardMargin);
      } else if(type === 'prev' && currentCard > 0) {
        currentCard--;
        position += (cardWidth+cardMargin);
      }
      this.setCard(currentCard, position);
    }
    
    setCard(currentCard, position) {
      this.setState({
        currentCard: currentCard,
        position: position,
        cardStyle: {
          transform: `translateX(${position}px)`
        }
      })
    }
  
    render() {
      return (
        <div className="footer">
            <div style={{display:"flex"}}>
            <div className="cards-slider">
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>
          <Cards cardStyle={this.state.cardStyle} />
        </div>
        <Card style={{width:'19rem'}} className="cardBudget">
            <Card.Body className="brandDetailCls bottomFilterCard">
        <div style={{marginLeft:'10px',display:'grid'}}><span>Budget : 5550 INR</span><span>Your package : 3,784 INR</span>
        </div></Card.Body>
            </Card>
            </div>
           
        <footer className="footerDetail">
            <p>@ itiLite Full rights reserved <span> | </span> FAQ <span> | </span> Privacy Policy</p>
            <p>Contact : support@itilite.com <span> | </span> 1234567890</p>
        </footer>
        </div>
       
      )
    }
  }

  export default Display;
  
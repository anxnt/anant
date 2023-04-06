import React, { useState } from 'react';

const items = [
  { id: 1, label: 'Twitter',  url: "https://www.twitter.com/anant715", },
  { id: 2, label: 'Instagram', url: "https://www.instagram.com/anant7", },
  { id: 3, label: 'Linkedin', url: "https://www.linkedin.com/in/anant-b68484218/", },
  { id: 4, label: 'Peerlist', url: "https://peerlist.io/anant7", },
  { id: 5, label: 'Behance', url: "https://www.behance.net/anantkumar11",  },
  { id: 6, label: 'Diamond', url: "https://diamondapp.com/u/anxnt",  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUpClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleDownClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"150px"}}>
      <button className="up-button" onClick={handleUpClick}>
        <ion-icon name="caret-up-outline"></ion-icon>
      </button>
      
      <button className="down-button" onClick={handleDownClick}>
        <ion-icon name="caret-down-outline" className="down-button" onClick={handleDownClick}></ion-icon>
      </button>

      <div className="carousel">
        <div className="items">
          {items.map((item, index) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{color:"inherit", display:"contents"}}>
              <div
                className={`item ${activeIndex === index ? 'active' : ''}`}
                style={{
                  transform: `translateY(${(index - activeIndex) * 100}%) scale(${
                    activeIndex === index ? 1 : 0.5
                  })`,
                  zIndex: `${activeIndex === index ? items.length : items.length - index}`,
                  opacity: `${activeIndex === index ? 1 : 0.5}`,
                }}
              >
                <div className="label">{item.label} </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

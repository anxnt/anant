import React, { useState } from 'react';

const items = [
  { id: 1, label: 'Javascript' },
  { id: 2, label: 'React' },
  { id: 3, label: 'HTML & CSS' },
  { id: 4, label: 'Figma' },
  { id: 5, label: 'Blender'  },
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
    <div className='mainhead' style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"150px"}}>
    <button className="up-button" onClick={handleUpClick}>
    <ion-icon name="caret-up-outline"></ion-icon>
      </button>

      <button className="down-button" onClick={handleDownClick}>
      <ion-icon name="caret-down-outline" className="down-button" onClick={handleDownClick}></ion-icon>
      </button>

    <div className="carousel">

      <div className="items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`item ${activeIndex === index ? 'active' : ''}`}
            style={{
              transform: `translateY(${(index - activeIndex) * 100}%) scale(${
                activeIndex === index ? 1 : 0.5
              })`,
              zIndex: `${activeIndex === index ? items.length : items.length - index}`,
              opacity: `${activeIndex === index ? 1 : 0.5}`,
            }}
          >
          <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Carousel;

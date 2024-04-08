import React, { useState } from 'react';
import insta1 from '../img/inst1.png';
import insta2 from '../img/inst2.png';
import insta3 from '../img/inst3.png';
import insta4 from '../img/inst4.png';
import insta5 from '../img/inst5.png';
import insta6 from '../img/inst6.png';

const Instagram = () => {
  const [picsQuantity, setPicsQuantity] = useState(6); // Initial number of pictures to display
  const [instaBtn, setInstaBtn] = useState('See More Photos');

  const pictures = [
    { src: insta1, alt: 'insta1' },
    { src: insta2, alt: 'insta2' },
    { src: insta3, alt: 'insta3' },
    { src: insta4, alt: 'insta4' },
    { src: insta5, alt: 'insta5' },
    { src: insta6, alt: 'insta6' },
    { src: insta5, alt: 'insta1' },
    { src: insta2, alt: 'insta2' },
    { src: insta4, alt: 'insta3' },
    { src: insta1, alt: 'insta4' },
    { src: insta3, alt: 'insta5' },
    { src: insta4, alt: 'insta6' },
    { src: insta3, alt: 'insta1' },
    { src: insta2, alt: 'insta2' },
    { src: insta1, alt: 'insta3' },
    { src: insta6, alt: 'insta4' },
    { src: insta3, alt: 'insta5' },
    { src: insta2, alt: 'insta6' },
  ];

  const showPic = () => {
    if (picsQuantity === 12) {
      setPicsQuantity(picsQuantity + 6)
      setInstaBtn('Hide Photos');
    } else if (picsQuantity === 18) {
        setPicsQuantity(6);
        setInstaBtn('See More Photos');
    } else {
      setPicsQuantity(picsQuantity + 6)
    }

  };

  return (
    <section className="insta">
      <div className="container">
        <div className="insta_content">
          <div className="insta_sub">@ElasticThemes</div>
          <h2 className="insta_title">We're on Instagram!</h2>
          <ul className="insta_list">
            {pictures.slice(0, picsQuantity).map((picture, index) => (
              <li className="insta_item" key={index}>
                <img src={picture.src} alt={picture.alt} />
              </li>
            ))}
          </ul>
          <button className="insta_btn" onClick={showPic}>
            {instaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;

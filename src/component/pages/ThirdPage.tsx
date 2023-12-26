import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ModalInformation from 'component/block/Modal/ModalInfmation';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RedHotIMG from '../assets/images/redhot.png';
import AskingIMG from '../assets/images/asking.png';
import CrossFaithIMG from '../assets/images/cross.png';
import FearAndIMG from '../assets/images/fear.png';
import MaximumIMG from '../assets/images/maximum.png';
import RingoIMG from '../assets/images/ringgo.png';
import SoilPimpIMG from '../assets/images/soil.png';
import '../../slick-theme.css';
import '../../slick.css';
import '../../App.scss';

const ThirdContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #000;
`;

const ThirdSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const ThirdTitle = styled(motion.h4)`
  width: 50%;
  height: 6rem;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 3rem;
  letter-spacing: 2rem;
`;

const ThirdSliderContainer = styled(motion.div)`
  width: 80%;
`;

const ThirdImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
    opacity: 1;
  }
`;

const ThirdImageText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding: 1rem;
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0.2;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;

  ${ThirdImageWrapper}:hover & {
    opacity: 1;
    z-index: 2;
  }
`;

const ThirdSliderItem = styled(motion.div)<{ Images: string }>`
  height: 20rem;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.Images});
  position: relative;
  margin: 0 0.3rem;
`;

const ThirdCustomArrow = styled.div`
  width: 4rem;
  height: 3rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: 0.21s ease-in-out;
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    opacity: 1;
    color: #ccc;
  }
`;

const images = [
  { img: RedHotIMG, text: 'RED HOT CHILI PEPPERS' },
  { img: AskingIMG, text: 'ASKING ALEXANDRIA' },
  { img: CrossFaithIMG, text: 'CROSS FAITH' },
  { img: FearAndIMG, text: 'FEAR AND LOATHING IN LASVEGAS' },
  { img: MaximumIMG, text: 'MAXIMUM THE HORMONE' },
  { img: RingoIMG, text: 'SHIINA RINGO' },
  { img: SoilPimpIMG, text: 'SOIL & PIMP SESSIONS' },

];

const ThirdPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [animate, setAnimate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<{ img: string; text: string } | null>(null);

  const animationLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };

  const transitionSlide = {
    duration: 1,
    delay: 0.3,
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <ThirdCustomArrow className="slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </ThirdCustomArrow>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <ThirdCustomArrow className="slick-next" onClick={onClick}>
      <FaChevronRight />
    </ThirdCustomArrow>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth >= 768) {
      if (scrollPosition > 1200 && scrollPosition < 2200) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      if (scrollPosition > 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleImageClick = (artist: { img: string; text: string }) => {
    setSelectedArtist(artist);
    setModalOpen(true);
  };
  
  return (
    <ThirdContent ref={ref}>
      <ThirdSection>
        <ThirdTitle
          variants={animationLeft}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transition}
        >
          ARTIST
        </ThirdTitle>
        <ThirdSliderContainer
          ref={ref}
          variants={animationRight}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transitionSlide}
        >
        <Slider {...settings}>
          {images.map((item, index) => (
            <ThirdImageWrapper key={index} onClick={() => handleImageClick(item)}>
              <ThirdSliderItem Images={item.img}>
                <ThirdImageText>{item.text}</ThirdImageText>
              </ThirdSliderItem>
            </ThirdImageWrapper>
          ))}
        </Slider>
        </ThirdSliderContainer>
      </ThirdSection>

      <ModalInformation
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artistName={selectedArtist ? selectedArtist.text : ''}
        artistDescription="언제쓰냐"
      />
    </ThirdContent>
  );
});

export default ThirdPage;

import React from "react";
import "./Gallery1.css";
import './Slider'

import mainEntrance from "../../assets/JNTUK main entrance.jpg";
import nehruStatue from "../../assets/nehru statue_3.jpg";
import centralLibrary from "../../assets/Central Library.jpg";
import innovationCenter from "../../assets/INOVATION CENTER.jpg";
import principalOffice from "../../assets/IMG_1516 copy.jpg";
import cseDept from "../../assets/CSE.jpg";
import civilDept from "../../assets/CIVIL.jpg";
import eeeDept from "../../assets/EEE.jpg";
import eceDept from "../../assets/ECE.jpg";
import petDept from "../../assets/PET.jpg";
import foodTechDept from "../../assets/FOODTECH.jpg";
import gym from "../../assets/GYM.jpg";

const galleryImages = [
  { id: 1, src: mainEntrance, place: "Main Entrance" },
  { id: 2, src: nehruStatue, place: "Nehru Statue" },
  { id: 3, src: centralLibrary, place: "Central Library" },
  { id: 4, src: innovationCenter, place: "Innovation Research Center" },
  { id: 5, src: principalOffice, place: "Principal Office" },
  { id: 6, src: cseDept, place: "Department of Computer Science and Engineering" },
  { id: 7, src: civilDept, place: "Department of CIVIL Engineering" },
  { id: 8, src: eeeDept, place: "Department of Electronics and Electrical Engineering" },
  { id: 9, src: eceDept, place: "Department of Electronics and Communication Engineering" },
  { id: 10, src: petDept, place: "Department of Petroleum and Chemical Engineering" },
  { id: 11, src: foodTechDept, place: "Department of Food Technology" },
  { id: 12, src: gym, place: "JNTUK GYM" },
];

function Gallery() {
  return(
    <>
            <div class="swiper-container main-slider loading">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Shaun Matthews</p>
                <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Alexis Berry</p>
                <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Billie	Pierce</p>
                <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Trevor	Copeland</p>
                <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Bernadette	Newman</p>
                <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
          </div>
          
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>

        
        <div class="swiper-container nav-slider loading">
          <div class="swiper-wrapper" role="navigation">
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Shaun Matthews</p>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Alexis Berry</p>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Billie	Pierce</p>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Trevor	Copeland</p>
              </div>
            </div>
            <div class="swiper-slide">
              <figure class="slide-bgimg" style="background-image:url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)">
                <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85" class="entity-img" />
              </figure>
              <div class="content">
                <p class="title">Bernadette	Newman</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Gallery;
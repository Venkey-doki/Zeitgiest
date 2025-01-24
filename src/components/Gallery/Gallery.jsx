import React from "react";
import "./Gallery.css";

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

function Gallery1() {
  return (
    <div id="Gallery" className="gallery-container">
      {galleryImages.map((image) => (
        <div className="gallery-item" key={image.id}>
          <img src={image.src} alt={image.place} />
          <div className="overlay">
            <span>{image.place}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery1;

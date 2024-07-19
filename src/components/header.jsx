import React, { useState } from "react";
import { ProjectRequestForm } from "./ProjectRequestForm";  // Ensure the path is correct

export const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <button onClick={openModal} className="btn btn-custom btn-lg page-scroll">
                </button>
                <a
                  href="#ProjectRequrstForm"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Ask for Project
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProjectRequestForm closeModal={closeModal} />}
    </header>
  );
};

import React from "react";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="timeline-steps">
          <div className="timeline-step">
            <div className="timeline-content">
              <div className="inner-circle"></div>
              <p className="h6 mt-3 mb-1">
                <span className="section__content--highlighted">2021</span>
              </p>
              <p className="section__content">
                <span className="section__content--highlighted">Becario</span> -
                Desarrollo en Laravel (6 meses).
              </p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-content">
              <div className="inner-circle"></div>
              <p className="h6 mt-3 mb-1">
                <span className="section__content--highlighted">2022</span>
              </p>
              <p className="section__content">
                <span className="section__content--highlighted">Trainee</span> -
                Laravel y React.
              </p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-content">
              <div className="inner-circle"></div>
              <p className="h6 mt-3 mb-1">
                <span className="section__content--highlighted">2023</span>
              </p>
              <p className="section__content">
                <span className="section__content--highlighted">
                  Curso de Ingeniería de Software
                </span>{" "}
                en Towa Software.
              </p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-content">
              <div className="inner-circle"></div>
              <p className="h6 mt-3 mb-1">
                <span className="section__content--highlighted">2024</span>
              </p>
              <p className="section__content">
                <span className="section__content--highlighted">
                  Servicio Social
                </span>{" "}
                en el Instituto de Geografía de la UNAM, colaborando en un
                proyecto de geointeligencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

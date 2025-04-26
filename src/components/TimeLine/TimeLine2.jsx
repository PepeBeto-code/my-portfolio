import React from "react";
import "./Timeline.scss";
import LinkWithModal from "../LinkWithModal";
import experiencia from "../../variables/AboutVariables";
import { Badge } from "reactstrap";

export default function TimeLine2() {
  return (
    <>
      <div className="timeline">
        {experiencia.map((exp, index) => (
          <div key={index} className="timeline-row">
            <div className="timeline-time">
              {exp.actividad}
              <small>{exp.fechaCorta}</small>
            </div>
            <div
              className={`timeline-content card ${
                (index + 1) % 2 != 0 ? "!items-end" : "!items-start"
              }`}
              style={{
                width: "inherit",
              }}
            >
              <i className="icon-attachment"></i>
              <h4 className="card__title">{exp.titulo}</h4>
              <p
                className={`card__text ${
                  (index + 1) % 2 != 0 ? "!text-end" : "!text-start"
                }`}
              >
                {exp.descripcionCorta}
              </p>
              <div
                className={`mt-2 ${
                  (index + 1) % 2 != 0 ? "!text-end" : "!items-start"
                }`}
              >
                {exp?.skills.map((skill, index) => (
                  <Badge key={index} className="mx-1 badge">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-4">
                <LinkWithModal href={`#`} text={"Ver mas"} exp={exp} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

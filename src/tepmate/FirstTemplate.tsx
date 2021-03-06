import React from "react";
import { ITemplate } from "../interfaces";
import "../style/blocks/template/firstTemplate.scss";

export const FirstTemplate: React.FunctionComponent<ITemplate> = (props) => {
  const data = props.state;

  const [education, experience] = [
    props.state.counterEducation.split("."),
    props.state.counterExperience.split(".").reverse(),
  ];

  return (
    <div className="firstTemplate sectionPrint__section">
      <div className="heading">
        <div className="photo-box">
          <img src={data.photo} alt="Ваша фотография" />
        </div>
        <div className="rightTemplate">
          <h3>{`${data.familyName.trim()} ${data.name.trim()} ${data.surname.trim()}`}</h3>
          <p className="position">{data.wantedPosition}</p>
          <p className="busyness">
            Занятость:&nbsp;<span>{data.busyness}</span>
          </p>
          <p className="schedule">
            График работы:&nbsp;<span>{data.schedule}</span>
          </p>
          <p className="businessTrip">
            Готовность к командировкам:&nbsp;
            <span>{data.bussinessTrip ? "да" : "нет"}</span>
          </p>
          {data.salaryNumber.trim() && (
            <p className="salary">
              Желаемая зарплата:&nbsp;<span>{data.salary}</span>
            </p>
          )}
          {data.telephone.trim() && (
            <p className="telephone">
              Телефон:&nbsp;
              <span>{`${data.telephoneCode}${data.telephone}`}</span>
            </p>
          )}
          <p className="email">
            Электронная почта:&nbsp;<span>{data.email}</span>
          </p>
        </div>
      </div>
      <h4>Личная информация</h4>
      <p className="nationality">
        Гражданство:&nbsp;<span>{data.nationality}</span>
      </p>
      {data.city.trim() && (
        <p className="city">
          Место проживания:&nbsp;<span>{data.city}</span>
        </p>
      )}

      <p className="movingToDiffCity">
        Переезд:&nbsp;<span>{data.movingToDiffCity}</span>
      </p>
      <p className="dateBirth">
        Дата рождения:&nbsp;<span>{data.dateBirth}</span>
      </p>
      {data.gender.trim() && (
        <p className="gender">
          Пол:&nbsp;<span>{data.gender}</span>
        </p>
      )}
      <p className="family">
        Семейное положение:&nbsp;<span>{data.family}</span>
      </p>
      <p className="children">
        Наличие детей:&nbsp;
        <span>{data.children ? `${data.children}` : "Нет детей"}</span>
      </p>
      {education && data[`institute0`] && <h4>Образование</h4>}
      {education &&
        education.map((counter) => {
          if (data[`institute${counter}`]) {
            return (
              <div className="educationBox">
                <p className="institute">
                  Учебное заведение:&nbsp;
                  <span>{data[`institute${counter}`]}</span>
                </p>
                <p className="faculty">
                  Факультет:&nbsp;<span>{data[`faculty${counter}`]}</span>
                </p>
                <p className="specialty">
                  Специальность:&nbsp;<span>{data[`specialty${counter}`]}</span>
                </p>
                <p className="formOfEducation">
                  Форма обучения:&nbsp;
                  <span>{data[`formOfEducation${counter}`]}</span>
                </p>
                <p className="endingEducation">
                  Год окончания:&nbsp;
                  <span>{data[`endingEducation${counter}`]}</span>
                </p>
              </div>
            );
          }
          return;
        })}
      {experience && data[`organization0`] && <h4>Опыт работы</h4>}
      {experience &&
        experience.map((counter) => {
          if (data[`organization${counter}`]) {
            return (
              <div className="experienceBox">
                <p className="organization">
                  Организация:&nbsp;
                  <span>{data[`organization${counter}`]}</span>
                </p>
                <p className="period">
                  Период работы: с&nbsp;
                  <span>{data[`workPeriodFrom${counter}`]}</span> &nbsp;
                  <span>
                    {data[`nowTime${counter}`] ||
                      "по " + data[`workPeriodTo${counter}`]}
                  </span>
                </p>
                <p className="positionJob">
                  Должность:&nbsp;<span>{data[`positionJob${counter}`]}</span>
                </p>
                {data["responsibility"] && (
                  <p className="responsibility textbox">
                    Должностные обязанности и достижения:
                    <span>
                      {data[`responsibility${counter}`]
                        .split("$$")
                        .map((item: any) => {
                          return <p>{item}</p>;
                        })}
                    </span>
                  </p>
                )}
              </div>
            );
          }
          return;
        })}
      {(data.language ||
        data.driversLicense ||
        data.medicalBook ||
        data.addInfo ||
        data.links) && <h4>Дополнительная информация</h4>}
      {data.language && (
        <p className="language">
          Языки: <span>{data.language}</span>
        </p>
      )}
      {data.driversLicense && (
        <p className="driversLicense">
          Водительские права: <span>{data.driversLicense}</span>
        </p>
      )}
      {data.medicalBook && (
        <p className="medicalBook">
          Наличие медицинской книжки: <span>{data.medicalBook}</span>
        </p>
      )}
      {data.addInfo && (
        <p className="addInfo textbox">
          Дополнительная информация:
          {data.addInfo.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      )}
      {data.links && (
        <p className="links textbox">
          Ссылки:
          {data.links.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      )}
    </div>
  );
};

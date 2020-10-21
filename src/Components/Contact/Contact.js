import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import logo from "../../assets/images/icons/logo-white.svg";
import { Form } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [nomPrenom, setNomPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [nbPers, setNbPers] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const currentDate = new Date();
  let dd = currentDate.getDate();
  let mm = currentDate.getMonth() + 1;
  let yyyy = currentDate.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  const today = yyyy + "-" + mm + "-" + dd;
  const maxdate = yyyy + 1 + "-" + mm + "-" + dd;

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (email && nomPrenom && message && mobile && nbPers && date && heure) {
      e.preventDefault();
      e.stopPropagation();

      // create a new XMLHttpRequest
      var xhr = new XMLHttpRequest();

      // get a callback when the server responds
      xhr.addEventListener("load", () => {
        // update the response state and the step
        setEmailStatus(xhr.responseText);
      });

      // open the request with the verb and the url
      xhr.open(
        "POST",
        "http://Localhost/202009-BonPlanFastFood/sendemail/contact.php",
        true
      );

      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      const params =
        "email=" +
        email +
        "&nomPrenom=" +
        nomPrenom +
        "&message=" +
        message +
        "&mobile=" +
        mobile +
        "&nbPers=" +
        nbPers +
        "&date=" +
        date +
        "&heure=" +
        heure;

      // send the request
      xhr.send(params);

      // reset the fields
      setValidated(false);
      setNomPrenom("");
      setEmail("");
      setMobile("");
      setMessage("");
      setNbPers("");
      setDate("");
      setHeure("");
    }
  };

  return (
    <div id="contact" className="pt-0 pb-0">
      <div className="container pt-0">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 order-md-1 mb-0">
            <div className="card border-0">
              <ul className="list-group mb-3 border-0">
                <li className="pb-0 list-group-item border-0 d-flex justify-content-center lh-condensed colorGreen">
                  <div className="py-1 text-center">
                    <img
                      className="d-block mx-auto mb-4"
                      src={logo}
                      alt="Logo"
                      width="100"
                    />
                    <p className="lead text-left textDescription">
                      Bon plan Fast Food description... text ...... ......
                      ........ ... .... .. ... ....... ......... ...... ....
                      ........... ...... ........... ....... ....... .... ...
                      ....... ... .. .... ...... .
                    </p>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex lh-condensed colorGreen">
                  <div className="rapideLinks">
                    <h6 className="my-0 pb-2 text-center textTitle">
                      LIENS RAPIDES
                    </h6>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <Link
                          href="#accueil"
                          to="accueil"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Accueil
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="#presentation"
                          to="presentation"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Présentation
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="#plats"
                          to="plats"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Plats
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="#avantages"
                          to="avantages"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Avantages
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="#contact"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between lh-condensed colorGreen">
                  <div>
                    <h6 className="my-0 text-center pb-2 textTitle">CONTACT</h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 colorGreen">
                        <span className="textContact">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          &nbsp;19 Rue des Burger 75520 Paris
                        </span>
                      </li>
                      <li className="list-group-item border-0 colorGreen">
                        <span className="textContact">
                          <FontAwesomeIcon icon={faEnvelope} />
                          &nbsp;Bonplanfood@gmail.com
                        </span>
                      </li>
                      <li className="list-group-item border-0 colorGreen">
                        <span className="textContact">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                          &nbsp;06 50 06 06 33
                        </span>
                      </li>
                      <li className="list-group-item border-0 colorGreen">
                        <span className="textContact">
                          <FontAwesomeIcon icon={faClock} />
                          &nbsp;9:00 AM - 00:00 AM
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-center lh-condensed colorGreen">
                  <ul className="list-group-item border-0 colorGreen social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagramSquare} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 order-md-2 mb-4">
            <h1 className="mb-3 contactTitre text-center pt-5">
              VOUS ÊTES PLUS QUE LES BIENVENUS SI VOUS VOULEZ NOUS
              <span className="textGreen"> CONTACTER</span> OÙ FAIRE UNE
              <span className="textGreen"> RÉSERVATION</span>
            </h1>
            <Form
              className="needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nomPrenom">Nom et Prénom</label>
                  <Form.Control
                    value={nomPrenom}
                    type="text"
                    className="form-control"
                    id="nomPrenom"
                    name="nomPrenom"
                    placeholder="nom et prénom"
                    onChange={(e) => setNomPrenom(e.target.value)}
                    required
                    minLength={3}
                    maxLength={38}
                  />
                  <Form.Control.Feedback type="invalid">
                    Un nom et prénom valide est requis.
                  </Form.Control.Feedback>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir une adresse e-mail valide.
                  </Form.Control.Feedback>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    value={mobile}
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="00 00 00 00 00"
                    pattern="[0-9]{3,38}"
                    maxLength={38}
                    required
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Un numero mobile valide est requis.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="nbPers">Nombre de personnes</label>
                  <input
                    type="number"
                    value={nbPers}
                    name="nbPers"
                    className="form-control"
                    min="1"
                    max="6"
                    id="nbPers"
                    placeholder="entre (1 et 6)"
                    onChange={(e) => setNbPers(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir un nombre valide.
                  </Form.Control.Feedback>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="date">Date</label>
                  <input
                    value={date}
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    placeholder="jj/mm/aaaa"
                    min={today}
                    max={maxdate}
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Une date valide est requis.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="heure">Heure</label>
                  <input
                    type="time"
                    value={heure}
                    className="form-control"
                    id="heure"
                    name="heure"
                    placeholder="(ex: 19h00)"
                    min="09:00:00"
                    max="23:59:00"
                    onChange={(e) => setHeure(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Veuillez saisir un nombre valide.
                  </Form.Control.Feedback>
                </div>
              </div>
              <div className="mb-0">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Veuillez nous indiquer vos restrictions alimentaires si vous avez..."
                  required
                  minLength={5}
                  maxLength={830}
                ></textarea>
                <Form.Control.Feedback type="invalid">
                  Veuillez saisir un message valide.
                </Form.Control.Feedback>
              </div>
              <div className="text-center pb-5">
                <p className="form-message text-success">
                  {emailStatus ? emailStatus : null}
                </p>
                <button className="btn btn-green" type="submit">
                  Réserver une table
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

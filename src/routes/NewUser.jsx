/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Style from "./css/NewUser.module.css";
import CheckAuth from "../components/CheckAuth";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function NewUser() {
  <CheckAuth />

  var [level, setLevel] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirm, setConfirm] = useState();
  const [response, setResponse] = useState();

  const urlBase = "http://localhost:5000/user/new/admin";
  const regUser = (e) => {
    e.preventDefault();
    if (pass === confirm) {
      axios
        .post(urlBase, { name: name, email: email, pass: pass, level: level })
        .then(async (res) => {
          console.log(res)
        }) //! finalizar sistema de envio de log
        .catch((err) => {
          console.log(err);
        });
    } else {
      //! finalizar sistema de infobox
      console.log("senhas não batem");
    }
  };

  return (
    <>
      <div className={Style.wrap}>
        <form className={Style.form}>
          <h4 className="text-light" >Registrar novo usuário</h4>

          <div className="input-group mb-2 mt-4">
            <span className="input-group-text" id="basic-addon1">
              <FaUser />
            </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Username ID"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
            <MdEmail />
            </span>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Valid Mail"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="password"
              onChange={(e) => setConfirm(e.target.value)}
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <hr className="mb-2 mt-4" />

          <div className="input-group mb-2  text-light">
            <label htmlFor="">Nível de permissão - {level}</label>
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              defaultValue={0}
              onChange={(e) => setLevel(e.target.value)}
              className="form-range"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            onClick={(e) => regUser(e)}
          >
            Cadastrar
          </button>
        </form>
      </div>{" wrapper "}
    </>
  );
}

export default NewUser;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div className="search-box">
        <button onClick={() => setLgShow(true)} className="search-box__btn">
          جستجو کنید .... <SearchIcon className="search-box__btn-icon" />
        </button>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal__search"
      >
        <Modal.Header closeButton className="modal__header" > 
        </Modal.Header>
        <Modal.Body className="modal__body">
          <div className="modal__search-box">
          <input type="text"  className="modal__input" placeholder="جستجو کنید"/>
          </div>
          <ul className="modal__list">
            <li className="modal__item">
              <Link to={'/'} className="link" ></Link>
            </li>  
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

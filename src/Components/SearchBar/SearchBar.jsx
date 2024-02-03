import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

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
      >
        <Modal.Header closeButton className="modal__header" > 
           <input type="text" />
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

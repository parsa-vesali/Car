import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { searchBrnand } from "../../datas";
export default function SearchBar() {
  const [lgShow, setLgShow] = useState(false);
  const [query, setQuery] = useState('')


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
            <input type="text" className="modal__input" placeholder="جستجو کنید"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <ul className="modal__list">
            {
              query ? (
                searchBrnand.filter(item => item.name.toLowerCase().includes(query)).map(item => (
                  <li key={item.id} className="modal__item">
                    <Link to={'/'} className="link" >{item.name}</Link>
                  </li>
                ))
              ) : (
                <li className="modal__item">
                  <Link to={'/'} className="link" ></Link>
                </li>
              )
            }
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

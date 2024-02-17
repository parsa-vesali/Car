import React from "react";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import ChatIcon from '@mui/icons-material/Chat';
import "./Message.css";
export default function Message(prpos) {
  return (
    <div>
      <Col md={6} className="mb-2">
        <Toast className="Message" show={true}>
          <Toast.Header className="Message__header"></Toast.Header>
          <Toast.Body className="Message__body">
            <h2 className="Message__title">{prpos.msg}</h2>
            <span className="Message__icon"><ChatIcon /></span>
          </Toast.Body>
        </Toast>
      </Col>
    </div>
  );
}

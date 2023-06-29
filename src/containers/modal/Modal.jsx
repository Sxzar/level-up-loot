import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, title, children }) => {
	if (!show) return null;

	return (
		<div className="lul__modal" onClick={onClose}>
			<div
				className="lul__modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="lul__modal-content__header">
					<h4>{title}</h4>
					<span onClick={onClose}>Close</span>
				</div>
				<div className="lul__modal-content__body">{children}</div>
				<div className="lul__modal-content__footer">footer</div>
			</div>
		</div>
	);
};

export default Modal;

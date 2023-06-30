import React from "react";
import SubscribeBanner from "../../assets/img/subscribe-banner.jpg";
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
					<img src={SubscribeBanner} alt={title} />
					<span className="lul__modal-close" onClick={onClose}></span>
				</div>
				<div className="lul__modal-content__body">{children}</div>
			</div>
		</div>
	);
};

export default Modal;

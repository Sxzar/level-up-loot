import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubscriptionForm } from "../../components";
import { Modal } from "../../containers";
import "./Cta.css";

const Cta = ({ title, action }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="lul__cta">
			{action === "modal" ? (
				<div>
					<button onClick={() => setShow(true)}>{title}</button>
					<Modal
						show={show}
						onClose={() => setShow(false)}
						title="Don't miss out!"
						children={<SubscriptionForm />}
					/>
				</div>
			) : (
				<Link href={action}>{title}</Link>
			)}
		</div>
	);
};

export default Cta;

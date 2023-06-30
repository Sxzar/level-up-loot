import React from "react";
import { Cta, NavLinks, Search } from "../";
import "./MobileMenu.css";

const MobileMenu = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="lul__mobileMenu">
			<button
				className={
					open
						? "lul__mobileMenu-button open"
						: "lul__mobileMenu-button"
				}
				onClick={() => {
					setOpen(!open);
				}}
			></button>
			<div
				className={
					open
						? "lul__mobileMenu-navigation scale-up-ver-top expanded"
						: "lul__mobileMenu-navigation"
				}
			>
				<Search
					click={() => {
						setOpen(!open);
					}}
				/>
				<NavLinks
					click={() => {
						setOpen(!open);
					}}
				/>
				<Cta title="Subscribe" action="modal" />
			</div>
		</div>
	);
};

export default MobileMenu;

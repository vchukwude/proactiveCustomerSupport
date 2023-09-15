"use client";
import React, {  useState } from "react";
import reactDOM from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";





const Modal = ({ children, toggleModal }) => {
	const [container, setContainer] = useState(null);

	useEffect(() => {
		const body = document.querySelector("body");

		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = "auto";
		};
	}, []);





	useEffect(() => {
		const portalContainer = document.createElement("div");
		document?.body?.appendChild(portalContainer);
		setContainer(portalContainer);
		return () => {
			document?.body?.removeChild(portalContainer);
		};
	}, []);

	return (
		container &&
		reactDOM.createPortal(
			<motion.div className='fixed top-0 left-0 h-full w-full z-50'>
				<motion.div
					className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-[8px] op flex cursor-pointer items-center justify-center'
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
						},
					}}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
					onClick={toggleModal}
				>
					{children}
				</motion.div>
			</motion.div>,
			container
		)
	);
};

export default Modal;

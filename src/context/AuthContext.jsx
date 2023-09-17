import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const user = localStorage.getItem("username");

		if (user) {
			setUser(user);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

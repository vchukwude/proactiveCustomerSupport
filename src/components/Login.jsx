import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
//import Button from "../../components/Button";

import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";

const baseUrl = "https://help.pplrepairshub.co.uk";


const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { setUser } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const postData = {
				email: formData.email,
				password: formData.password,
			};

			const api = axios.create({
				baseURL: baseUrl,
				withCredentials: true,
			});
			const responsePost = await api.post(`${baseUrl}/login`, postData);
			if (responsePost.status === 200) {
				localStorage.setItem("authToken", responsePost.data.token);
				console.log(responsePost.data.firstname)
				setUser(responsePost.data.firstname);
				localStorage.setItem('username',responsePost.data.firstname)
				toast.success("Successfully logged in");
				// navigate("/");
				setTimeout(() => (window.location.href = "/"), 800);
			}
		} catch (e) {
			if (e instanceof AxiosError) {
				toast.error(e.response.data.message);
			} else {
				toast.error("An error occurred while trying to log you in");
			}
		}
	};

	return (
		<div className='max-w-[600px] mt-10 w-11/12 mx-auto'>

			<h3 className='font-bold text-3xl text-center mt-0'>Login</h3>
			<p className='text-center '>
				Not a member?{" "}
				<Link to='/register' className='underline text-indigo-400'>
					Signup
				</Link>
			</p>

			<div className='w-11/12 mx-auto bg-white shadow-sm rounded-lg  p-8 border border-gray-100 mt-10'>
				<form className='md:w-11/12 max-w-[500px] mx-auto'>
					<div className='form-group '>
						<label
							htmlFor='email'
							className='block mb-2  text-lg  font-medium text-gray-900 dark:text-white'
						>
							Email
						</label>
						<input
							type='text'
							name='email'
							id='email'
							className='bg-gray-50 border border-gray-300 text-gray-900  text-lg  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Doe'
							required
							value={formData.username}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group '>
						<label
							htmlFor='password'
							className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Doe'
							required
							value={formData.username}
							onChange={handleChange}
						/>
					</div>

					<div className='form-group btn'>
						<button
							className='text-white bg-indigo-500 flex justify-center w-full py-4 rounded-md font-bold'
							onClick={handleSubmit}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

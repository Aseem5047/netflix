import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Jumbotron from "../components/Jumbotron";
import useAuth from "../hooks/useAuth";

interface Inputs {
	email: string;
	password: string;
}

const Login = () => {
	const [login, setLogin] = useState(false);
	const { signIn, signUp } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		// console.log(data);
		if (login) {
			await signIn(data.email, data.password);
		} else {
			await signUp(data.email, data.password);
		}
	};

	return (
		<>
			<div className="relative flex h-[48vh] md:h-[100vh] lg:h-screen w-full flex-col bg-black md:items-center justify-center md:bg-transparent ">
				<Head>
					<title>Netflix</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Image
					src="https://rb.gy/p2hphi"
					layout="fill"
					className="-z-10 !hidden opacity-60 sm:!inline"
					objectFit="cover"
				/>{" "}
				<div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
					<Image src="https://rb.gy/ek4j9f" layout="fill" objectFit="contain" />
				</div>
				<form
					className="relative mt-24 space-y-8 sm:margin-auto rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 className="text-4xl font-semibold">Sign In</h1>
					<div className="space-y-4">
						<label className="inline-block w-full">
							<input
								type="email"
								placeholder="Email"
								className="input"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<p className="text-sm  text-orange-500">
									Please enter a valid email.
								</p>
							)}
						</label>
						<label className="inline-block w-full">
							<input
								type="password"
								placeholder="Password"
								className="input"
								{...register("password", { required: true })}
							/>
							{errors.password && (
								<p className="text-sm  text-orange-500">
									Your password must contain between 4 and 60 characters.
								</p>
							)}
						</label>
					</div>
					<button
						className="w-full rounded bg-[#E50914] py-3 font-semibold"
						type="submit"
						onClick={() => setLogin(true)}
					>
						Sign In
					</button>
					<div className="text-[gray]">
						New to Netflix ?{" "}
						<button
							className="cursor-pointer text-white hover:text-gray-400"
							type="submit"
							onClick={() => setLogin(false)}
						>
							Sign up now
						</button>
					</div>
				</form>
			</div>
			<div>
				<Jumbotron />
			</div>
		</>
	);
};

export default Login;

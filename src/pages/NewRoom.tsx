import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";


export const NewRoom = () => {
	// const { user } = useAuth();

	return (
		<div id="page-auth">
			<aside>
				<img id="aside-img" src={illustrationImg} alt="Ilustration showing Q and A" />
				<strong id="aside-strong">Create live rooms of Q&amp;A</strong>
				<p>Answer questions from your audience in real time</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoImg} alt="letmeask" />
               <h2>Create a new room</h2>
					<form>
						<input type="text" placeholder="Room's name" />
						<Button type="submit">Create room</Button>
					</form>
               <p>
                  To join an existent room <Link to="/">click here</Link>
               </p>
				</div>
			</main>
		</div>
	);
};

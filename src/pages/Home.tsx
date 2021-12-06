import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.css";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
	const navigate = useNavigate();
	const { user, signInWithGoogle } = useAuth();

	const handleCreateRoom = async () => {
		if (!user) {
			await signInWithGoogle();
		}
		navigate("/rooms/new");
	};

	return (
		<div id="page-auth">
			<aside>
				<img
					id="aside-img"
					src={illustrationImg}
					alt="Ilustration showing Q and A"
				/>
				<strong id="aside-strong">Create live rooms of Q&amp;A</strong>
				<p>Answer questions from your audience in real time</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoImg} alt="letmeask" />
					<button className="create-room" onClick={handleCreateRoom}>
						<img src={googleIconImg} alt="Google's logo" />
						Create your room with Google
					</button>
					<div className="separator">or enter a room</div>
					<form>
						<input type="text" placeholder="Type the room's code" />
						<Button type="submit">Enter the room</Button>
					</form>
				</div>
			</main>
		</div>
	);
};

import { ButtonHTMLAttributes } from "react";
import "../styles/button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
	return <button className="button" {...props} />;
};

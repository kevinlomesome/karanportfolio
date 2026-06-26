type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

function Button({
  text,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
function Button({
  text,
  onClick,
  type = "button",
}) {
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
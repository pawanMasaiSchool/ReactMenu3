import styling from "./Common.module.css";

function MyButton({ name, bgclr }) {
  return (
    <button className={styling.myButton} style={{ background: bgclr }}>
      {name}
    </button>
  );
}

export default MyButton;

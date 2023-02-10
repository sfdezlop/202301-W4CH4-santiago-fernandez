import "./key.css";
import { useContext } from "react";
import { useGrabar } from "../../../hooks/use-grabar";
// import { PhoneContext } from "../../../context/phone-context.jpg";

export function Key() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1];

  // const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Delete"];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { handlerClickNumber, handlerDelete } = useContext(PhoneContext);

  return (
    <ul>
      {numbers.map((item) => (
        <li>
          <button className="key" onClick={() => useGrabar(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

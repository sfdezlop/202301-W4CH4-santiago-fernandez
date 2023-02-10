import "./action.css";
import { useContext } from "react";
import { useGrabar } from "../../../hooks/use-grabar";

export function Action() {
  return (
    <>
      <button className="call" id="buttoncall" onClick={() => useGrabar(1)}>
        Call
      </button>
      <button className="hang" id="buttonhang" onClick={() => useGrabar(2)}>
        Hang
      </button>
    </>
  );
}

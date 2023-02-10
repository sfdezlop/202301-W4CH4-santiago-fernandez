import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { Key } from "../key/key";
import "./keyboard.css";

export function Keyboard() {
  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          <Key></Key>
        </ol>
      </div>
    </>
  );
}

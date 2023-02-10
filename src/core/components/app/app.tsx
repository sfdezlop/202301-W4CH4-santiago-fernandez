import { Action } from "../../../features/call/components/action/action";
import { Display } from "../../../features/call/components/display/display";
import { Key } from "../../../features/call/components/key/key";

export function App() {
  return (
    <>
      <section className="phone">
        <Display></Display>
        <Action></Action>
        <Key></Key>
      </section>
    </>
  );
}

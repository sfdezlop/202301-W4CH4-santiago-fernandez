import { useState } from "react";

export function useGrabar(a: number) {
  const display: any = document.getElementById("display");
  const buttonhang: any = document.getElementById("buttonhang");
  const displayArray = [];
  // display.innerHTML = a;
  displayArray.push(a, a, a, a, a, a, a, a, a);
  display.textContent = displayArray.join("");
  buttonhang.classList.add("ocultar");
}

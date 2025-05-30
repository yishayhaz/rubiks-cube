import { CubeFace } from "./face"

const faces = ["red", "blue", "orange", "green", "white", "yellow"]

export const App = () =>
  `<div class='scene'><div class='cube'>${faces
    .map((face) => CubeFace({ color: face }))
    .join("")}</div></div>`

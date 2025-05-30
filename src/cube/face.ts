type CubeFaceProps = { color: string }

export const CubeFace = ({ color }: CubeFaceProps) =>
  `<div class='cube__face' style='--color: ${color}'>${Array.from(
    { length: 9 },
    () => `<div class='cube__face__tile'></div>`
  ).join("")}</div>`

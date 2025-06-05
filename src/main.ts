import { App } from "./cube/index.ts"
import "./style.css"

document.querySelector<HTMLDivElement>("main")!.innerHTML = App()

const cube = document.querySelector(".cube") as HTMLDivElement

let isMouseDown = false
const lastCoords: { x?: number; y?: number } = {}
const rotation = { x: 0, y: 0, z: 0 }

const handleDrag = (e: MouseEvent) => {
  if (!isMouseDown) return

  const { pageX: x, pageY: y } = e

  const dx = x - lastCoords.x!
  const dy = y - lastCoords.y!

  rotation.x = (rotation.x + dx) % 360
  rotation.y = (rotation.y + dy) % 360

  lastCoords.x = x
  lastCoords.y = y

  document.documentElement.style.setProperty(
    "--rotate-x",
    rotation.x.toString() + "deg"
  )
  document.documentElement.style.setProperty(
    "--rotate-y",
    (rotation.y * -1).toString() + "deg"
  )
}

document.body.addEventListener("mousedown", (e: MouseEvent) => {
  isMouseDown = true
  lastCoords.x = e.pageX
  lastCoords.y = e.pageY
})
document.body.addEventListener("mouseup", () => (isMouseDown = false))
document.body.addEventListener("mousemove", handleDrag)

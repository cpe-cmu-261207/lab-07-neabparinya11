import { CLear, randomCol } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={()=>CLear()}>Clear</button>
      <button className="w-36" onClick={()=>randomCol()}>Random color</button>
    </div>
  )
}

export default Utility
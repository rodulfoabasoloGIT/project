import React, { useRef } from "react"
import moon from "../images/pexels-pixabay-47367.jpg"
import land from "../images/pexels-jaime-reimer-2662116.jpg"
import cat from "../images/cart.gif"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
const Parallex = () => {
  const ref = useRef()
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>webdev is fun</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Parallex

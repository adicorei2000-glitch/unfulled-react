import React from 'react'
import { Mainstyle } from './contrast/genelStyle'
import { DNA } from 'react-loader-spinner'

const Portfolio = () => {
  return (
    <Mainstyle>
      <button style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />

      </button>

    </Mainstyle>

  )
}

export default Portfolio
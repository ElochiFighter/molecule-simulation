import { useState } from 'react'
import { ElementEnum } from './Constants.jsx'
import './styles/Compound.css'

function Compound() {
  const elementKeys = Object.keys(ElementEnum);

  return (
    <main>
      <aside id="element-sidebar">
        {elementKeys.map((key) => {
          const element = ElementEnum[key];
          return (
            <div key={key} className="element-item">
              <h2>{element.symbol}</h2>
              <p>{element.name}</p>
              <p>{element.atomicNumber}</p>
            </div>
          );
        })}
      </aside>
    </main>
  )
}

export default Compound

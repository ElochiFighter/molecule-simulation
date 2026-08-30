import { useState } from 'react'
import { ElementEnum } from './Elements.jsx'
import './styles/Compound.css'

function Compound() {
  const elementKeys = Object.keys(ElementEnum);

  return (
    <main>
      <aside id="element-sidebar">
        {elementKeys.map((key) => {
          const element = ElementEnum[key];
          let color;
          switch (element.category) {
            case 'reactive-nonmetal':
              color = '#ff6b6b';
              break;
            case 'noble-gas':
              color = '#1dd1a1';
              break;
            case 'alkali-metal':
              color = '#feca57';
              break;
            case 'alkaline-earth-metal':
              color = '#48dbfb';
              break;
            case 'metalloid':
              color = '#ff9ff3';
              break;
            case 'post-transition-metal':
              color = '#f368e0';
              break;
            case 'transition-metal':
              color = '#576574';
              break;
            case 'lanthanide':
              color = '#00d2d3';
              break;
            case 'actinide':
              color = '#ff9f43';
              break;
            default:
              color = '#b7b7b7';
          }
          return (
            <div key={key} className="element-item" style={{ backgroundColor: color }}>
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

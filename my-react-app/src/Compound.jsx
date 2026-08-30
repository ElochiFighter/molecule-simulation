import { useState } from 'react'
import { ElementEnum } from './Elements.jsx'
import './styles/Compound.css'

function getColorForCategory(category) {
  switch (category) {
    case 'reactive-nonmetal':
      return '#ff6b6b';
    case 'noble-gas':
      return '#1dd1a1';
    case 'alkali-metal':
      return '#feca57';
    case 'alkaline-earth-metal':
      return '#48dbfb';
    case 'metalloid':
      return '#ff9ff3';
    case 'post-transition-metal':
      return '#f368e0';
    case 'transition-metal':
      return '#576574';
    case 'lanthanide':
      return '#00d2d3';
    case 'actinide':
      return '#ff9f43';
    default:
      return '#b7b7b7';
  }
}

function getStringFromOxidationStates(oxidationStates) {
  if (!oxidationStates || oxidationStates.length === 0) {
    return '';
  }
  return ` [${oxidationStates.join(', ')}]`;
}

function Compound() {
  const elementKeys = Object.keys(ElementEnum);
  const [showOxidationStates, setShowOxidationStates] = useState(false);
  const [showAtomicMass, setShowAtomicMass] = useState(false);

  return (
    <main>
      <aside id="element-sidebar">
        {elementKeys.map((key) => {
          const element = ElementEnum[key];
          const color = getColorForCategory(element.category);
          const atomicMassText = showAtomicMass ? ` (${element.atomicMass})` : '';
          const oxidationText = showOxidationStates
            ? getStringFromOxidationStates(element.oxidationStates)
            : '';

          return (
            <div key={key} className="element-item" style={{ backgroundColor: color }}>
              <h2 className="element-symbol">{element.symbol}</h2>
              <p className="element-name">{element.name}</p>
              <p className="element-oxidation-states">{oxidationText}</p>
              <p className="element-atomic-number">{element.atomicNumber}</p>
              <p className="element-atomic-mass">{atomicMassText}</p>
            </div>
          );
        })}
      </aside>
      <footer id="compound-legend">
        <input
          id="oxidation-states"
          type="checkbox"
          checked={showOxidationStates}
          onChange={(e) => setShowOxidationStates(e.target.checked)}
        />
        <label htmlFor="oxidation-states">Show Oxidation States</label>
        <input
          id="atomic-mass"
          type="checkbox"
          checked={showAtomicMass}
          onChange={(e) => setShowAtomicMass(e.target.checked)}
        />
        <label htmlFor="atomic-mass">Show Atomic Masses</label>
      </footer>
    </main>
  )
}

export default Compound
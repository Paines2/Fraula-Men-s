import { useState } from 'react';

const presetMenu = [
  { name: 'Empanada de sobrasada', isStar: false },
  { name: 'Tarta de queso con higos *', isStar: true },
  { name: 'Coca de trampó', isStar: false },
];

const swapOptions = [
  'Croqueta de jamón',
  'Berenjena rellena *',
  'Tarta de almendra',
  'Ensaladilla rusa',
];

export default function MenuConfigurator() {
  const [menu, setMenu] = useState(presetMenu);
  const [swapCount, setSwapCount] = useState(0);

  const handleSwap = (newDish) => {
    if (swapCount >= 1) return alert('Solo puedes intercambiar 1 plato.');
    const updated = [...menu];
    updated[0] = { name: newDish, isStar: newDish.includes('*') };
    setMenu(updated);
    setSwapCount(1);
  };

  const starCount = menu.filter(item => item.isStar).length;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Configura tu menú</h1>

      <div style={{ background: '#f3f3f3', padding: 16, borderRadius: 8, marginBottom: 20 }}>
        <h2>Menú actual:</h2>
        <ul>
          {menu.map((item, i) => <li key={i}>{item.name}</li>)}
        </ul>
        <p style={{ fontSize: 12, color: '#555' }}>* Máximo 2 platos con asterisco permitidos</p>
      </div>

      <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
        <h2>Intercambiar una pieza:</h2>
        {swapOptions.map((dish, i) => (
          <button
            key={i}
            style={{
              margin: 4,
              padding: '6px 10px',
              border: '1px solid #ccc',
              borderRadius: 4,
              background: '#fff',
              cursor: swapCount >= 1 || (dish.includes('*') && starCount >= 2) ? 'not-allowed' : 'pointer'
            }}
            disabled={swapCount >= 1 || (dish.includes('*') && starCount >= 2)}
            onClick={() => handleSwap(dish)}
          >
            {dish}
          </button>
        ))}
      </div>

      <button style={{ marginTop: 20, padding: '10px 20px', fontSize: 16 }}>Confirmar selección</button>
    </div>
  );
}
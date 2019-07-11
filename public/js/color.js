const main = document.getElementById('root');
const search = new URLSearchParams(window.location.search);
const color = search.get('color');

fetch(`/api/v1/colors/${color}`)
  .then(res => res.json())
  .then(color => {
    console.log(color);
    const p = document.createElement('p');
    p.textContent = (`Color: ${color.name} HEX: ${color.hex} RGB: ${color.r} ${color.g} ${color.b}`);
    main.style.color = color.hex;

    main.appendChild(p);
  });
  

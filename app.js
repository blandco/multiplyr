const GROUP_COLORS = [
  '#ff6b6b','#ff9f43','#ffd32a','#0be881','#00d2d3',
  '#48dbfb','#a29bfe','#fd79a8','#6c5ce7','#e17055',
  '#00b894','#74b9ff'
];

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const equationEl = document.getElementById('equation');
const vizEl = document.getElementById('visualization');

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function render() {
  const groups = clamp(parseInt(num1Input.value) || 1, 1, 12);
  const perGroup = clamp(parseInt(num2Input.value) || 1, 1, 12);
  const product = groups * perGroup;

  num1Input.value = groups;
  num2Input.value = perGroup;

  equationEl.innerHTML =
    `${groups} × ${perGroup} = <span class="result">${product}</span>`;

  vizEl.innerHTML = '';

  for (let g = 0; g < groups; g++) {
    const color = GROUP_COLORS[g % GROUP_COLORS.length];

    const card = document.createElement('div');
    card.className = 'group-card';
    card.style.setProperty('--group-color', color);

    const label = document.createElement('div');
    label.className = 'group-label';
    label.textContent = `Group ${g + 1}`;
    card.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'items-grid';

    for (let i = 0; i < perGroup; i++) {
      const item = document.createElement('div');
      item.className = 'item';
      item.title = `${g + 1} × ${i + 1}`;
      grid.appendChild(item);
    }

    card.appendChild(grid);
    vizEl.appendChild(card);
  }
}

// Stepper buttons
document.querySelectorAll('.stepper').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const delta = parseInt(btn.dataset.delta);
    target.value = clamp((parseInt(target.value) || 1) + delta, 1, 12);
    render();
  });
});

// Direct input changes
num1Input.addEventListener('input', render);
num2Input.addEventListener('input', render);

// Initial render
render();

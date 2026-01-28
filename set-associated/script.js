// SETTINGS
const CACHE_LINES = 8;
const SETS = 4;              // Number of sets
const ASSOCIATIVITY = CACHE_LINES / SETS; // Lines per set (2-way)
const MEMORY_SIZE = 32;

// Cache structure: array of sets
const cache = Array.from({ length: SETS }, () =>
  Array.from({ length: ASSOCIATIVITY }, () => ({
    tag: null,
    data: null
  }))
);

const tableBody = document.querySelector("#cacheTable tbody");
const resultText = document.getElementById("resultText");
const binaryDisplay = document.getElementById("binaryDisplay");

// Bits
const setBits = Math.ceil(Math.log2(SETS));
const lineBits = Math.ceil(Math.log2(ASSOCIATIVITY));

function toBinary(value, bits) {
  return value.toString(2).padStart(bits, "0");
}

// Draw table
function renderCache(highlight = null) {
  tableBody.innerHTML = "";

  cache.forEach((set, setIndex) => {
    set.forEach((line, lineIndex) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${setIndex}</td>
        <td>${toBinary(lineIndex, lineBits)} (${lineIndex})</td>
        <td>${line.tag !== null ? line.tag : "-"}</td>
        <td>${line.data !== null ? line.data : "-"}</td>
        <td>${line.tag !== null ? "Filled" : "Empty"}</td>
      `;

      if (highlight && highlight.set === setIndex && highlight.line === lineIndex) {
        row.classList.add(highlight.type);
        setTimeout(() => row.classList.remove(highlight.type), 600);
      }

      tableBody.appendChild(row);
    });
  });
}

// Memory access
function accessMemory(address) {
  const setIndex = address % SETS;
  const tag = Math.floor(address / SETS);

  const set = cache[setIndex];
  let lineIndex = set.findIndex(line => line.tag === tag);

  let message;
  let highlightType;

  // HIT
  if (lineIndex !== -1) {
    message = `Cache HIT! Address ${address} found in Set ${setIndex}, Line ${lineIndex}.`;
    highlightType = "hit";
  }

  // MISS
  else {
    let emptyLine = set.findIndex(line => line.tag === null);

    if (emptyLine === -1) {
      emptyLine = Math.floor(Math.random() * ASSOCIATIVITY); // RANDOM
    }

    set[emptyLine] = {
      tag: tag,
      data: `Data[${address}]`
    };

    lineIndex = emptyLine;
    message = `Cache MISS! Address ${address} loaded into Set ${setIndex}, Line ${lineIndex} (Random).`;
    highlightType = "miss";
  }

  binaryDisplay.innerText = `Binary Address: ${toBinary(address, 8)} | Tag: ${tag} | Set: ${setIndex}`;
  resultText.innerText = message;

  renderCache({ set: setIndex, line: lineIndex, type: highlightType });
}

// Button
document.getElementById("accessMemory").addEventListener("click", () => {
  const address = parseInt(document.getElementById("memoryAddress").value);

  if (isNaN(address) || address < 0 || address >= MEMORY_SIZE) {
    alert(`Enter address 0–${MEMORY_SIZE - 1}`);
    return;
  }

  accessMemory(address);
});

// Initial draw
renderCache();

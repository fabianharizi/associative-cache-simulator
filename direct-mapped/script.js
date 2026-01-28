// CONFIGURATION
const CACHE_SIZE = 8; // Number of cache lines
const MEMORY_SIZE = 32; // Maximum memory address
const cache = new Array(CACHE_SIZE).fill(null).map(() => ({ tag: null, data: null }));

const cacheTableBody = document.querySelector("#cacheTable tbody");
const binaryDisplay = document.getElementById("binaryDisplay");
const resultText = document.getElementById("resultText");

// Calculate number of index bits dynamically
const indexBits = Math.ceil(Math.log2(CACHE_SIZE));

// Convert decimal to binary string with padding
function toBinary(value, bits) {
  return value.toString(2).padStart(bits, '0');
}

// Render cache table with binary cache lines
function renderCache(highlightIndex = null, highlightType = "") {
  cacheTableBody.innerHTML = "";
  cache.forEach((line, index) => {
    const lineBits = toBinary(index, indexBits);
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${lineBits} (${index})</td>
      <td>${line.tag !== null ? line.tag : "-"}</td>
      <td>${line.data !== null ? line.data : "-"}</td>
      <td>${line.tag !== null ? "Filled" : "Empty"}</td>
    `;

    if (index === highlightIndex) {
      tr.classList.add(highlightType);
      // Remove highlight after 0.5s
      setTimeout(() => tr.classList.remove(highlightType), 500);
    }

    cacheTableBody.appendChild(tr);
  });
}

// Access memory address
function accessMemory(address) {
  // Show binary memory address (8 bits)
  binaryDisplay.innerText = `Binary Address: ${toBinary(address, 8)}`;

  const lineIndex = address % CACHE_SIZE;
  const tag = Math.floor(address / CACHE_SIZE);
  const line = cache[lineIndex];

  let highlightType;
  if (line.tag === tag) {
    // Cache Hit
    resultText.innerText = `Cache Hit! Address ${address} is in line ${lineIndex}.`;
    highlightType = "hit";
  } else {
    // Cache Miss
    resultText.innerText = `Cache Miss! Loading address ${address} into line ${lineIndex}.`;
    cache[lineIndex] = { tag: tag, data: `Data[${address}]` };
    highlightType = "miss";
  }

  renderCache(lineIndex, highlightType);
}

// Event listener
document.getElementById("accessMemory").addEventListener("click", () => {
  const address = parseInt(document.getElementById("memoryAddress").value);

  if (isNaN(address) || address < 0 || address >= MEMORY_SIZE) {
    alert(`Enter a valid memory address (0-${MEMORY_SIZE - 1})`);
    binaryDisplay.innerText = "Binary Address: -";
    return;
  }

  accessMemory(address);
});

// Initial render
renderCache();

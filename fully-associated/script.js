// SETTINGS
const CACHE_SIZE = 8;
const MEMORY_SIZE = 32;

// Each line can store ANY block
const cache = new Array(CACHE_SIZE).fill(null).map(() => ({
  tag: null,
  data: null
}));

const tableBody = document.querySelector("#cacheTable tbody");
const resultText = document.getElementById("resultText");
const binaryDisplay = document.getElementById("binaryDisplay");

// Bits needed to show cache line index
const lineBits = Math.ceil(Math.log2(CACHE_SIZE));

// Convert decimal → binary
function toBinary(value, bits) {
  return value.toString(2).padStart(bits, "0");
}

// Draw table
function renderCache(highlightIndex = null, type = "") {
  tableBody.innerHTML = "";

  cache.forEach((line, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${toBinary(index, lineBits)} (${index})</td>
      <td>${line.tag !== null ? line.tag : "-"}</td>
      <td>${line.data !== null ? line.data : "-"}</td>
      <td>${line.tag !== null ? "Filled" : "Empty"}</td>
    `;

    if (index === highlightIndex) {
      row.classList.add(type);
      setTimeout(() => row.classList.remove(type), 600);
    }

    tableBody.appendChild(row);
  });
}

// MAIN ACCESS FUNCTION
function accessMemory(address) {
  const tag = address; // fully-associative → full address is tag
  let index = cache.findIndex(line => line.tag === tag);

  let message;
  let highlightType;

  // ---------------- HIT ----------------
  if (index !== -1) {
    message = `Cache HIT! Address ${address} found in line ${index}.`;
    highlightType = "hit";
  }

  // ---------------- MISS ----------------
  else {
    let emptyLine = cache.findIndex(line => line.tag === null);

    if (emptyLine === -1) {
      emptyLine = Math.floor(Math.random() * CACHE_SIZE); // RANDOM
    }

    cache[emptyLine] = {
      tag: tag,
      data: `Data[${address}]`
    };

    index = emptyLine;
    message = `Cache MISS! Address ${address} loaded into line ${index} (Random).`;
    highlightType = "miss";
  }

  binaryDisplay.innerText = `Binary Address: ${toBinary(address, 8)}`;
  resultText.innerText = message;

  renderCache(index, highlightType);
}

// BUTTON
document.getElementById("accessMemory").addEventListener("click", () => {
  const address = parseInt(document.getElementById("memoryAddress").value);

  if (isNaN(address) || address < 0 || address >= MEMORY_SIZE) {
    alert(`Enter address 0–${MEMORY_SIZE - 1}`);
    return;
  }

  accessMemory(address);
});

// First draw
renderCache();

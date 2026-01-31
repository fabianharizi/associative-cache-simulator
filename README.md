# 🧠 Associative Cache Memory Simulator

An interactive web-based simulator for understanding **cache memory architectures** in Computer Organization and Architecture.

This project demonstrates how different cache mapping techniques work visually and step-by-step.

---

## 👨‍🎓 Academic Context

**Built by:** Fabian Harizi  
**Course:** Organizim Kompjuteri dhe Arkitekturë  
**Faculty:** FSHN  
**Department:** Informatikë  

---

## 🚀 Features

This simulator includes **three cache architectures**:

| Cache Type | Description |
|-----------|------------|
| **Direct-Mapped Cache** | Each memory block maps to exactly one cache line. |
| **Fully-Associative Cache** | Any block can be stored in any cache line. |
| **Set-Associative Cache** | Cache divided into sets; block maps to one set but any line inside it. |

---

## 🎯 What the Simulator Shows

- Memory address input (decimal)
- Conversion of memory address → **binary**
- Cache line indices displayed in **bit format**
- Tag calculation
- Cache Hit / Miss detection
- Visual highlighting of affected cache lines
- Random replacement (where applicable)
- Step-by-step state of the cache after every access

---

## 🧩 How to Use

1. Open any simulator page.
2. Enter a **memory address**.
3. Click **Access Memory**.
4. Observe:
   - Binary address
   - Tag & index/set breakdown
   - Cache hit or miss
   - Updated cache state

---

## 🧪 Learning Goals

This tool helps visualize:

- Cache mapping strategies
- Address breakdown (Tag / Index / Set)
- Replacement policies
- Spatial locality
- Cache behavior over multiple accesses

---

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- DOM manipulation

---

## 📸 Possible Extensions

- LRU / FIFO replacement
- Block size > 1 word
- Performance metrics (hit rate)
- Animation of data movement
- Side-by-side comparison of cache types

---

## 📜 License

This project is for **educational purposes**.

---

✨ Designed as a teaching & learning tool for Computer Architecture.

# Cache Memory Simulator

An interactive, browser-based simulator for exploring cache memory architectures. Built for the Computer Organization and Architecture course at FSHN — Faculty of Natural Sciences, Department of Informatics.

---

## Overview

This simulator visualizes how three fundamental cache mapping techniques work under the hood — step by step, access by access. Designed to make abstract concepts tangible for students learning computer architecture.

## Cache architectures

| Type | Description |
|------|-------------|
| Direct-mapped | Each memory block maps to exactly one cache line |
| Fully associative | Any block can be placed in any cache line |
| Set associative | Cache is divided into sets; a block maps to one set but any line within it |

## Features

- Decimal memory address input with binary conversion
- Tag and index/set bit breakdown displayed per access
- Cache hit / miss detection with visual highlighting
- Step-by-step cache state after every memory access
- Random replacement policy (where applicable)

## Usage

1. Open any simulator page
2. Enter a memory address
3. Click **Access Memory**
4. Observe the binary address, tag/index breakdown, hit or miss result, and updated cache state

## Learning goals

- Cache mapping strategies (direct, fully associative, set associative)
- Memory address decomposition (tag / index / offset)
- Replacement policies
- Spatial locality and cache behavior across multiple accesses

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript
- DOM manipulation — no dependencies

## Possible extensions

- LRU and FIFO replacement policies
- Block size greater than one word
- Hit rate and performance metrics
- Animation of data movement between memory and cache
- Side-by-side comparison mode across cache types

## Academic context

**Author:** Fabian Harizi  
**Course:** Organizim Kompjuteri dhe Arkitekturë  
**Faculty:** FSHN — Fakulteti i Shkencave të Natyrës  
**Department:** Informatikë  

---

*Built as a teaching and learning tool for Computer Architecture. For educational use.*

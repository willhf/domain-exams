---
title: Algorithms & Data Structures
description: A rigorous, proof-based exam of core undergraduate algorithms and data structures.
layout: layouts/exam.njk
permalink: /exams/algorithms/
---

# Algorithms &amp; Data Structures

Help determine initial exam dates and locations. CTA here

<section>

## Exam at a Glance

- Level: Undergraduate (Honors)
- Duration: 2.5 hours
- Format: Written, proof-based (pseudocode expected)
- Materials: Closed-book

</section>

<section id="outcomes">

## Why Master Algorithms & Data Structures?

- Preparation for algorithmic problem-solving in technical interviews
- Readiness for advanced coursework in algorithms
- Because all computation involves organizing and transforming data efficiently

</section>

<section>

## Exam Scope

This exam assesses undergraduate (honors-level) mastery of core algorithms and data structures, with emphasis on **formal correctness reasoning** and **runtime analysis**. Solutions are expected in clear English and pseudocode; no programming-language specifics are required.

The exam is closed-book and does not provide definitions of core concepts or standard algorithms. Candidates should be able to state definitions precisely.

<p class="note">The scope described here is subject to refinement.</p>

### Asymptotic Analysis

- Formal definitions of Big-O, Θ, and Ω
- Worst-case runtime analysis; asymptotic comparisons
- Solving recurrences (substitution, recursion tree, Master Theorem)
- Amortized analysis (accounting and potential methods)

### Algorithm Design Strategies

- Divide-and-conquer design and analysis
- Greedy algorithms (including correctness arguments such as exchange arguments)
- Dynamic programming (optimal substructure; overlapping subproblems)

### Data Structures

- Arrays, stacks, queues, linked lists
- Heaps and priority queues
- Binary search trees (unbalanced); red–black trees
- Hash tables (expected-performance reasoning; collision resolution strategies)
- B-trees

Candidates are expected to be able to implement and analyze the core operations
for each data structure—insert, delete, search, min, max, and
enumeration/traversal—and may be asked to write correct pseudocode for these
operations on demand.

### Sorting and Order Statistics

- Elementary sorts: insertion, selection, bubble (for comparison and analysis)
- Comparison sorts: merge sort, quicksort, heap sort; properties and tradeoffs
- Non-comparison sorts: counting, radix, bucket (assumptions and constraints)
- Order statistics (selection; median and quantiles)

Candidates should understand average and worst-case runtime complexity, memory
usage, stability, and the assumptions or constraints that distinguish these
algorithms from one another.

### Graph Algorithms

- Graph representations; traversal with BFS and DFS
- Topological sorting
- Strongly connected components
- Minimum spanning trees (Kruskal, Prim)
- Shortest paths (Bellman–Ford, Dijkstra; correctness conditions)

### String Algorithms

- Dynamic programming on strings (LCS; edit distance / Wagner–Fischer)
- Substring search (finite automata, Rabin–Karp, KMP)
- Trie-based string processing
- Suffix arrays (basic construction idea and typical applications)

</section>

<section>

## Out of Scope

The following topics are not covered in the exam. This section is provided
to clarify boundaries and help candidates focus their preparation.

- Randomization and complexity theory
  - Randomized algorithms (Monte Carlo / Las Vegas)
  - Computational complexity theory (NP-completeness, reductions, complexity classes)
  - Approximation algorithms and approximation guarantees

- Advanced computational models
  - Parallel, distributed, and concurrent algorithms
  - Quantum algorithms

- Number-theoretic and cryptographic topics
  - Number-theoretic algorithms
  - Cryptographic algorithms and primitives
  - Hash function construction (as distinct from hash tables)

- Numerical and applied domains
  - Linear and integer programming
  - Data compression and coding theory
  - Algorithms specific to machine learning or artificial intelligence

- Specialized data structures
  - Advanced or specialized data structures beyond those listed in the exam scope

</section>

{% include "partials/exam-format.md" %}

{% include "partials/performance-standards.md" %}

<section id="canonical-reference-texts">

## Recommended Resources

These are recommended primary resources for preparation. The exam is governed by the published scope; these texts reflect the level and style expected.

- _Introduction to Algorithms_ (Cormen, Leiserson, Rivest, Stein)
- _Algorithms_ (Sedgewick & Wayne)

</section>

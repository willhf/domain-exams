---
title: Discrete Mathematics
description: A rigorous, proof-based exam of core undergraduate discrete mathematics.
layout: layouts/exam.njk
permalink: /exams/discrete-mathematics/
---

# Discrete Mathematics

Help determine initial exam dates and locations. CTA here

<section>

## Exam at a Glance

- Level: Undergraduate (Honors)
- Duration: 2.5 hours
- Format: Written, proof-based
- Materials: Closed-book

</section>

<section id="outcomes">

## Why Master Discrete Mathematics?

Discrete mathematics trains precise reasoning. It teaches you how to define
concepts rigorously, prove claims, and reason about structure rather than
examples.

Its core ideas—including logic and Boolean algebra, graphs and trees, and
relations and recurrences—form the mathematical language of computing. They
underlie algorithms, data structures, program correctness, and complexity
analysis.

Mastery indicates readiness for advanced mathematics and theoretical computer
science. More importantly, it signals mathematical maturity: comfort with
abstraction, careful logic, and rigorous proof.

</section>

<section>

## Exam Scope

todo add information about the exam scope

<p class="note">The scope described here is subject to refinement.</p>

### Propositional Logic

- Boolean algebra, proof by truth table
- Connective operations: conjunction, disjunction, negation, implication, equivalence
- Definitions of logical equivalence, tautology, contradiction, converse, inverse, contrapositive
- Algebraic properties: identity, commutative, associative, distributive, De Morgan's laws
- You should be able to:
  - Define terms above
  - Prove logical equivalences using algebraic properties and truth tables

### Sets

- You should understand definitions of: Set, Subset, Union, Intersection, Power
  Set, Disjoint, Set Difference, Symmetric Difference, Cartesian Product
- You should understand how to construct sets using set builder notation
- You should know how to prove set equality, and that one set is a subset of another

### Proof Techniques

- Direct, indirect, contrapositive, contradiction

### Counting

- todo

### Graph Theory

- Definitions
  - Graph, Adjacent Vertices, Vertex Degree, Complete Graph
  - Subgraph, Induced Subgraph, Clique, Clique Number
  - Independent Set, Independent Number
  - Graph Complement
  - Walk, Walk Concatenation, Path, Path Graph, Connected To
- Theorems (Proof Required)
  - Lemma: If there exists a walk between two vertices, then there exists a path between those vertices
  - Proposition. The relation “is connected to” on the vertex set of a graph is
    an equivalence relation. Its equivalence classes are the connected
    components of the graph.

## Number Theory

This section covers elementary properties of the integers, divisibility, and modular arithmetic.

- Definitions
  - Divisibility; divisor; multiple
  - Prime and composite integers
  - Greatest common divisor (gcd)
  - Relatively prime integers
  - Congruence modulo $n$
  - Modular addition and multiplication
  - Multiplicative inverse modulo $n$ (when it exists)

- Theorems (Proof Required)
  - Division Algorithm
    - For integers $a$ and $b>0$, there exist unique integers
      $q,r$ such that $a = q\,b + r$ with $0 \le r < b$.

  - Euclidean Algorithm
    - The Euclidean Algorithm correctly computes $\gcd(a,b)$
      for integers $a$ and $b$, and terminates.

  - Bézout’s Identity
    - For integers $a$ and $b$, there exist integers $x,y$ such that
      $ax + by = \gcd(a,b)$.

- Theorems (Statement and Use Required; Proof Not Required)
  - Fundamental Theorem of Arithmetic
  - Properties of Congruences (compatibility with addition and multiplication)
  - Solvability of Linear Congruences $ax \equiv b \ (\mathrm{mod}\ n)$

- Results (Statement and Simple Applications Required; Proof Not Required)
  - Chinese Remainder Theorem
  - Applications of modular arithmetic to divisibility tests and elementary counting arguments

### Probability

- todo

</section>

<section>

## Out of Scope

The following topics are not covered in the exam. This section is provided
to clarify boundaries and help candidates focus their preparation.

- Abstract Algebra
- Asymptotic Analysis (covered in [Algorithms & Data Structures](/exams/algorithms))
- Digital Circuits
- Automata Theory, Formal Languages, and Regular Expressions

</section>

{% include "partials/exam-format.md" %}

{% include "partials/performance-standards.md" %}

<section id="canonical-reference-texts">

## Recommended Resources

These are recommended primary resources for preparation. The exam is governed by the published scope; these texts reflect the level and style expected.

- _Discrete Mathematics with Application_ (Susanna Epp)
- _Mathematics a Discrete Introduction_ (Edward Scheinerman)

</section>

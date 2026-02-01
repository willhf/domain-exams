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

<section id="prerequisites">

## Recommended Background

Successful study of this exam scope assumes fluency with high-school algebra
(including equations, inequalities, exponents, and logarithms), as well as a
willingness to engage with abstract, proof-based reasoning.

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

### Proof Techniques

- Direct, indirect, contrapoitive, contradiction

- TODO somewhere: quantifiers

### Foundational Structures

- **Sets**

  - Definitions
    - Set, subset, equality of sets
    - Union, intersection, set difference $A \setminus B$, symmetric difference $A \triangle B$
    - Disjoint sets
    - Power set
    - Cartesian product $A \times B$
  - Skills
    - Construct sets using set-builder notation
    - Prove set equality and subset relationships from definitions
  - Theorems (proof required)
    - The size of the power set of a set with $n$ elements is $2^n$
    - Inclusion–Exclusion Principle (Two Sets):
      Let $A$ and $B$ be finite sets. Then
      $|A| + |B| = |A \cup B| + |A \cap B|$
    - Let $A$ and $B$ be sets. Then  
      $A \triangle B = (A \cup B) \setminus (A \cap B)$
    - De Morgan’s laws:
      - $(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$
    - Let $A$ and $B$ be finite sets. Then $|A \times B| = |A| \cdot |B|$

- **Relations**

  - Definitions
    - Relation, inverse relation
    - Relation properties: reflexive, irreflexive, symmetric, antisymmetric, transitive
  - Theorems (proof required)

    - For any relation $R$, $(R^{-1})^{-1} = R$

- **Equivalence Relations**

  - Definitions
    - Equivalence relation, equivalence class
    - Partition
  - Theorems (proof required)
    - An equivalence relation on a set defines a partition of the set
    - A partition of a set defines an equivalence relation

- **Partially Ordered Sets**

  - Definitions
    - Partially ordered set (poset), total order (linear order)
    - Comparable elements
    - Minimal and maximal elements
    - Least (minimum) and greatest (maximum) elements
  - Theorems (proof required)
    - Every finite poset has at least one minimal element and at least one maximal element
    - A least element of a poset, if it exists, is unique
    - A greatest element of a poset, if it exists, is unique
    - There exists a poset with a minimal element that is not a least element
    - Every finite totally ordered set with $n$ elements can be labeled with the numbers
      $1,2,\dots,n$ in such a way that the order agrees with the usual order on the integers
  - Example
    - The subset relation defines a partial order on the power set of a set

- **Functions**

  - Definitions
    - Function, domain, codomain, range
    - Equality of functions
    - Injective, surjective, bijective
    - Left inverse, right inverse, inverse
    - Function composition, identity function
    - Image and preimage of a set
  - Theorems (proof required)
    - A function has an inverse if and only if it is bijective
    - Pigeonhole Principle: If $f : A \to B$ and $|A| > |B|$, then $f$ is not injective
    - If there is a bijection between $A$ and $B$, then $|A| = |B|$
    - Function composition is associative
    - The composition of injective functions is injective; the composition of surjective functions is surjective
    - If $f$ and $g$ are invertible, then $g \circ f$ is invertible and $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$
  - Skills
    - Prove that a function is injective, surjective, or bijective using multiple methods
    - Use the Pigeonhole Principle in proof
    - Prove equality of functions from first principles

- **Permutations**
  - Definitions
    - Permutation of a finite set; symmetric group $S_n$
    - Composition of permutations, identity, inverse
    - Cycle, cycle notation
    - Transposition
    - Even and odd permutations
    - Inversion
    - Sign of a permutation
  - Theorems (proof required)
    - Every permutation can be written as a product of transpositions
    - Any two transposition decompositions of a permutation have the same parity
    - A permutation is even if and only if it has an even number of inversions
    - If a permutation of a set of size $n$ is written as a product of $c$ disjoint cycles (including fixed points), then its sign is $(-1)^{n - c}$

### Combinatorics

- **Binomial Coefficients**
  - Pascal's Triangle
- **Counting Multisets**
- **Inclusion-Exclusion**
- **Recurrence Relations**

### Graph Theory (done)

- **Basic Graph Structure**

  - Definitions
    - Graph (simple), Vertex set, Edge set
    - Adjacent vertices, Vertex degree, Isolated vertex
    - Order, Size, Maximum degree, Minimum degree
    - Complete graph
    - Subgraph, Induced subgraph
  - Theorems (proof required)
    - The sum of vertex degrees in a graph is twice the number of edges

- **Cliques and Independent Sets**

  - Definitions
    - Complement graph
    - Clique, Maximum clique, Maximal clique, Clique number
    - Independent set, Maximum independent set, Maximal independent set, Independence number
  - Theorems (proof required)
    - The size of a maximum clique in a graph equals the size of a maximum independent set in the complement graph
    - Every graph on 6 vertices contains either a clique of size 3 or an independent set of size 3

- **Walks, Paths, and Connectivity**

  - Definitions
    - Walk, Walk concatenation
    - Path (simple path; no repeated vertices), Path graph, Distance
    - Connected to (relation), Connected graph, Component
    - Cut edge (bridge)
  - Theorems (proof required)
    - If there exists a walk between two vertices, then there exists a path between those vertices
    - The relation “is connected to” on the vertex set of a graph is an equivalence relation
    - If a cut edge is removed from a connected graph, the graph has exactly two connected components

- **Cycles and Trees**

  - Definitions
    - Cycle, Acyclic graph
    - Tree, Leaf
    - Spanning tree, Forest
  - Theorems (proof required)
    - A graph is connected if and only if it contains a spanning tree
    - Equivalent characterizations of trees
      - A graph is a tree if and only if there exists a unique path between every pair of vertices
      - A graph is a tree if and only if it is connected and acyclic
      - A connected graph is a tree if and only if every edge is a cut edge
      - A tree with $n \ge 1$ vertices has exactly $n - 1$ edges
    - Every tree with at least two vertices has at least two leaves
    - Removing a leaf and its incident edge from a tree yields a tree

- **Eulerian Graphs**

  - Definitions
    - Eulerian trail, Eulerian tour (circuit), Eulerian graph
  - Theorems (proof required)
    - A connected graph has an Eulerian tour if and only if every vertex has even degree
    - A connected graph has an Eulerian trail but no Eulerian tour if and only if it has exactly two vertices of odd degree

- **Graph Coloring**
  - Definitions
    - Proper vertex coloring, $k$-coloring, Chromatic number $\chi(G)$
    - Maximum degree $\Delta(G)$, Clique number $\omega(G)$
    - Bipartite graph, Complete bipartite graph
  - Theorems (proof required)
    - If $H$ is a subgraph of $G$, then $\chi(H) \le \chi(G)$
    - For any graph $G$, $\chi(G) \le \Delta(G) + 1$
    - For any graph $G$, $\chi(G) \ge \omega(G)$
    - If $G$ is bipartite, then $\chi(G) \le 2$
  - Theorems (statement and use required; proof not required)
    - A graph is bipartite if and only if it is $2$-colorable
    - A graph is bipartite if and only if it contains no cycles of odd length

## Number Theory (needs work)

This section covers elementary properties of the integers, divisibility, and modular arithmetic.

- Definitions

  - Divisibility; divisor; multiple, div and mod operations
  - Prime and composite integers
  - Greatest common divisor (gcd)
  - Relatively prime integers
  - Congruence modulo $n$
  - Modular addition and multiplication
  - Multiplicative inverse modulo $n$ (when it exists)

- Theorems (Proof Required)

  - Division Algorithm: For integers $a$ and $b>0$, there exist unique integers
    $q,r$ such that $a = q\,b + r$ with $0 \le r < b$.

  - Euclidean Algorithm: It correctly computes $\gcd(a,b)$
    for integers $a$ and $b$, and terminates in at most $2\log_2(b)$ iterations.

  - Bézout’s Identity: For integers $a$ and $b$, there exist integers $x,y$ such that
    $ax + by = \gcd(a,b)$.

  - Congruence modulo $n$ is an equivalence relation on the integers.

- Theorems (Statement and Use Required; Proof Not Required)

  - Fundamental Theorem of Arithmetic
  - Properties of Congruences (compatibility with addition and multiplication)
  - Solvability of Linear Congruences $ax \equiv b \ (\mathrm{mod}\ n)$

- Results (Statement and Simple Applications Required; Proof Not Required)
  - Chinese Remainder Theorem
  - Applications of modular arithmetic to divisibility tests and elementary counting arguments

### Probability (done)

- **Foundations**

  - Definitions
    - Sample space, event
    - Union, intersection, complement
    - Conditional probability, independent events
    - Finite probability model
  - Axioms
    - Kolmogorov axioms
  - Theorems (proof required)
    - Complement rule: $P(A^c) = 1 - P(A)$
    - Inclusion–Exclusion Principle (Two Events)
    - Law of Total Probability (finite case)
    - Bayes’ Theorem

- **Random Variables and Expectation**

  - Definitions
    - Random variable, expected value
    - Independent random variables
    - Indicator random variables
  - Theorems (proof required)
    - $E[\mathbf{1}_A] = P(A)$
    - Linearity of expectation: $E[X + Y] = E[X] + E[Y]$
    - If $X$ and $Y$ are independent random variables, then $E[XY] = E[X]E[Y]$

- **Variance**
  - Definitions
    - Variance
  - Theorems (proof required)
    - Let $X$ be a real-valued random variable. Then $\text{Var}(X) = E[X^2] - E[X]^2$
    - Let $a, b \in \mathbb{R}$. Then $\text{Var}(aX + b) = a^2 \text{Var}(X)$

</section>

<section>

## Out of Scope

The following topics are not covered in the exam. This section is provided
to clarify boundaries and help candidates focus their preparation.

- Abstract Algebra
- Cryptography
- Asymptotic Analysis (covered in [Algorithms & Data Structures](/exams/algorithms))
- Digital Circuits
- Planar Graphs
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

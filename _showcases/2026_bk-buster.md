---
layout: showcase
title: "BK-Buster"
title-short: BK-Buster
description: Informed, but Not Always Improved
github: https://github.com/bckrlab/bk-buster
github-badge: bk-buster
img: /assets/img/p/2026_bk-buster/ga.png
permalink: /p/bk-buster/
---

<img src="/assets/img/p/2026_bk-buster/ga.png" title="" alt="" width="100%" data-align="center">

## Motivation

Biological background knowledge (BK) graphs, such as protein-protein interactions (PPIs), are widely used to guide graph neural networks (GNNs) toward biologically informed predictions, especially in low-sample, high-dimensional settings like cancer genomics. Adding such a graph is often assumed to help, but a basic question is rarely tested: do these models actually use the provided biological graph, and what happens when that graph is incomplete, noisy, or biased?

This matters because biological BK graphs are not ground truth: interaction networks are incomplete, noisy, database-dependent, and biased toward well-studied genes and proteins. A GNN's performance may therefore depend not only on whether BK is included, but on how missing interactions, spurious edges, or structural biases in the graph affect message passing. Most studies treat the BK graph as a fixed input and judge it only by downstream predictive performance, which cannot reveal whether that performance depends on specific biological interactions, generic graph structure, node features, or just added model capacity.

## Approach

BK-Buster systematically probes BK utilization in GNNs through a catalogue of controlled perturbations applied to the BK graph, including random and hub-targeted edge removal, random and preferential-attachment edge addition, edge-weight noise, node isolation, node-degree permutation, and a detach-and-rewire operation for clustered graphs. Applying these perturbations at varying severity and comparing informed models against uninformed baselines reveals whether a model's performance reflects genuine use of the graph, and if so, which structural properties (individual edges, overall density, or hub-mediated reachability) it actually relies on.

This framework is applied across two real-world cancer-related tasks, graph-level cancer subtype classification and node-level cancer gene detection, alongside controlled synthetic experiments where graph informativeness is guaranteed by construction. In cancer subtype classification, uninformed baselines outperform BK-informed GNNs and perturbations have little effect, indicating the provided biological networks are barely used. In cancer gene detection, PPI usage is stronger but architecture-dependent, ranging from topology- and hub-reachability-dominated behavior to a more balanced use of structure and node features. The synthetic experiments serve as a positive control, confirming that informed GNNs do outperform uninformed baselines and degrade predictably when the graph is genuinely informative. Together, these results argue that the contribution of biological BK should be explicitly tested through perturbations rather than assumed from predictive performance alone.

## Resources

- [https://github.com/bckrlab/bk-buster](https://github.com/bckrlab/bk-buster)
- [https://github.com/bckrlab/kill-gnn](https://github.com/bckrlab/kill-gnn)
- [https://github.com/bckrlab/cgmega](https://github.com/bckrlab/cgmega)
- [https://github.com/bckrlab/emgnn](https://github.com/bckrlab/emgnn)

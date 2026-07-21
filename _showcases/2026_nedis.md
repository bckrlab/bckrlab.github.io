---
layout: showcase
title: "NeDis: Network-based disruption analysis of biological coordination"
title-short: NeDis
description: network-based disruption analysis of biological coordination
github: https://github.com/bckrlab/nedis
github-badge: nedis
# arxiv: https://arxiv.org/abs/2505.11283
# arxiv-badge: "2505.11283"
img: /assets/img/p/2026_nedis/graphical-abstract.png
permalink: /p/nedis/
---

<img src="/assets/img/p/2026_nedis/graphical-abstract.png" title="approach schematic" alt="approach schematic" width="50%" data-align="center" style="float: right">

## Motivation

The body and other biological systems do not function as collections of separate components. Cells, molecules, and signalling processes interact with one another, and the system as a whole can adapt, change, or be disrupted in response to external or internal challenges. Thus, looking at one component at a time is often not enough to understand how a complex biological system works. A broader view is needed, one that considers how relationships between components change across conditions or over time.

This network-level view is especially important when a system needs to adapt to a major physiological challenge. Pregnancy, for example, requires broad changes in immune, metabolic, and hormonal processes. In some cases, the level of an individual biomarker may appear stable during pregnancy, while its relationship with other biomarkers changes substantially. These changing relationships can reveal adaptations or disruptions that are missed by standard biomarker-by-biomarker analyses.

For this reason, it is important to treat biomarkers as parts of an interacting network and develop methods that can capture how this network changes across conditions or over time. By identifying groups of biomarkers with similar patterns of network activity and disruption researchers may better describe how biological systems reorganize in response to challenges. This complements standard biomarker analysis and has the potential to provide a broader view of complex biological processes.

## Approach

NeDis is an easy-to-use, highly customizable, open-source package that enables quantification of the functional disruption of biomarker networks across conditions and time. This allows the discovery of interconnected and coordinated subgroups of biomarkers with characteristic disruption profiles (e.g., increasing disruption over time) and enables a dynamic perspective on the coordination and adaptation of biological systems.

Synthetic experiments demonstrate that NeDis’ captures more intricate signals than dimensionality reduction (e.g., PCA or t-SNE). On high-dimensional single-cell mass cytometry (CyTOF) data, NeDis reveals coordinated functional disruptions of the immune system during human pregnancy, e.g., pointing to increased susceptibility to infection.


## Acknowledgements

Among others the funding for this study was in part provided by the BMBF (01IS22077,01ED2507) as well as the DFG via the [CRC 1713 (534829736)](https://crc1713.de).

## Resources

- Paper: TBA (Cell Patterns)
- Code Repository: [https://github.com/bckrlab/nedis](https://github.com/bckrlab/nedis)
- Zenodo ressourced:
    - Code: [https://zenodo.org/records/19352950](https://zenodo.org/records/19352950)
    - Data: [https://zenodo.org/records/10545240](https://zenodo.org/records/10545240)
    - A Docker image for reproduction: [https://zenodo.org/records/19348875](https://zenodo.org/records/19348875)

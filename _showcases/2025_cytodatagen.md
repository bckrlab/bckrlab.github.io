---
layout: showcase
title: "cytodatagen"
title-short: "cytodatagen"
author: Bjarne
description: A Python package for generating synthetic flow cytometry data
github: https://github.com/bckrlab/cytodatagen
github-badge: cytodatagen
img: /assets/img/p/2025_cytodatagen/tsne_300p.png
permalink: /p/cytodatagen/
---

<img src="/assets/img/p/2025_cytodatagen/tsne_300p.png" title="t-SNE of synthetic flow cytometry data" alt="tsne" width="100%" data-align="center">

Synthetic datasets are useful to validate machine learning algorithms across varying dataset properties.
We present `cytodatagen`, a Python package for generating synthetic flow cytometry and CyTOF data.
Fluoroessence signals are modelled as a mixture of multivariate normal distributions.
However, a modular design allows for rapid extensions, like other probability distributions.
`cytodatagen` supports data export to the Fow Cytometry Standard format, as well as the scverse-central `AnnData` format.
The code is available at: [https://github.com/bckrlab/cytodatagen](https://github.com/bckrlab/cytodatagen)

<img src="/assets/img/p/2025_cytodatagen/pairplot.png" title="synthetic flow cytometry data" alt="pairplot" width="100%" data-align="center">
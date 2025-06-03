---
layout: showcase
title: "SubROC: AUC-Based Discovery of Exceptional Subgroup Performance for Binary Classifiers"
title-short: SubROC
description: subgroup-level model performance evaluation
github: https://github.com/bckrlab/subroc
github-badge: subroc
arxiv: https://arxiv.org/abs/2505.11283
arxiv-badge: 2505.11283
img: /assets/img/p/2025_subroc/figure_1.png
permalink: /p/subroc/
---

<img src="/assets/img/p/2025_subroc/figure_1.png" title="approach schematic" alt="approach schematic" width="100%" data-align="center">

## Motivation

Machine learning (ML) is increasingly employed in real-world applications like medicine or economics, thus, potentially affecting large populations. However, ML models often do not perform homogeneously across such populations resulting in subgroups of the population (e.g., sex=female $$\wedge$$ marital_status=married) where the model underperforms or, conversely, is particularly accurate.  Identifying and describing such subgroups can support practical decisions on which subpopulation a model is safe to deploy or where more training data is required. The potential of identifying and analyzing such subgroups has been recognized, however, an efficient and coherent framework for effective search is missing.

## Approach

We introduce *SubROC*, an open-source, easy-to-use framework based on Exceptional Model Mining for reliably and efficiently finding strengths and weaknesses of classification models in the form of interpretable population subgroups. SubROC incorporates common evaluation measures (ROC and PR AUC), efficient search space pruning for fast exhaustive subgroup search, control for class imbalance, adjustment for redundant patterns, and significance testing.

The above approach schematic shows: In an exemplary application, binary classification could distinguish between healthy and diseased patients (left). Predictions of soft classifiers impose an ordering on the persons, which performs better the clearer healthy patients are separated from diseased patients. In this case there is a clear difference between the densities of healthy and diseased patients in this ordering, which are represented by the red and blue curves here (middle left). A dataset can be split up in different ways by patterns describing subsets. Our approach based on subgroup discovery evaluates these subsets systematically and returns those where the model predictions create the best or worst separation of the classes (middle right). Results may highlight arbitrary sensitive subgroups of a population, where the model under- or over-performs compared to the rest of the dataset (right).

## Acknowledgements

The funding for this study was in part provided by the BMBF (01IS22077).

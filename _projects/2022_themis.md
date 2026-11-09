---
layout: page
title: THEMIS
description: "Leveraging Background Knowledge for Understanding and Modeling Complex Systems (<strong>BMBF Junior Research Group</strong>)"
img: assets/img/projects/themis_fig1_small.png
importance: 2
category: funded
start_date: 2022-09-16
permalink: /projects/themis/
redirect_from:
  - /projects/2022_themis/
---

<img src="/assets/img/projects/themis_fig1.png" style="float: right; width:100%; padding: 1em; background-color: white;"/>

## Motivation

Complex systems are ubiquitous, whether in environmental processes, human behavior or biomedical applications. Understanding the underlying processes of such systems better and being able to make adequate predictions is a major challenge. Machine learning methods and in particular deep learning models deal with this mainly by relying on huge amounts of data. This often leads to models that are difficult to understand and from which it is not easily possible to gain deeper insights into the corresponding domain. At the same time, background knowledge and a deeper understanding of complex systems are essential for practical decision-making and planning. This highlights the central role of background knowledge, whose integration with machine learning has the potential to enable explanatory as well as predictive models with significantly increased predictive power, robustness, generalizability and fairness.

<!-- Komplexe Systeme sind allgegenwärtig, ob in Umweltprozessen, menschlichem Verhalten oder biomedizinischen Anwendungen. Die zugrundeliegenden Prozesse solcher System besser zu verstehen und adäquate Vorhersagen treffen zu koennen, stellt eine große Herausforderung dar. Maschinelle Lernverfahren und insbesondere Deep-Learning-Modelle bewältigen dies hauptsächlich, indem sie sich auf riesige Datenmengen stützen. Dies führt zu oft schwer verständlichen Modellen, aus denen es nicht ohne weiteres möglich ist, tiefere Einblicke in die entsprechende Domäne zu gewinnen. Gleichzeitig sind Hintergrundwissen sowie ein tieferes Verständnis komplexer Systeme für praktische Entscheidungsfindung und Planung unerlässlich. Dies hebt die zentrale Rolle von Hintergrundwissen hervor, dessen Integration mit maschinellem Lernen das Potential birgt, erklärende sowie prädiktive Modelle mit deutlich erhöhter Vorhersageleistung, Robustheit, Generalisierbarkeit und Fairness zu ermöglichen. -->

## Goals and approach

Therefore, the AI ​​junior research group Themis deals with knowledge extraction and knowledge integration for machine learning. The project aims to develop knowledge extraction methods to explain and understand complex systems along three axes: horizontal (interactions between components of the system), vertical (differences in the collected data, such as for different groups of people), and temporal (over time). Furthermore, the limits and the potential of knowledge integration in practical applications are examined and optimized. The methods developed are to be tested in case studies and projects with users.

<!--
Deshalb befasst sich die KI-Nachwuchsgruppe Themis mit Wissensextraktion und Wissensintegration für maschinelles Lernen. Das Projekt zielt darauf ab, Methoden zur Wissensextraktion zu entwickeln, um komplexe Systeme entlang dreier Achsen zu erklären und zu verstehen: horizontal (Interaktionen zwischen Komponenten des Systems), vertikal (Unterschiede in den gesammelten Daten, wie etwa für unterschiedliche Personengruppen), sowie temporal (über die Zeit). Weiterhin werden die Grenzen sowie das Potenzial von Wissensintegration in praktischen Anwendungen  untersucht und optimiert. Die entwickelten Methoden sollen in Fallstudien und Projekten mit Anwendern erprobt werden.  -->

## Innovation und perspectives

The methods developed will thus form the basis for gaining new insights in a wide variety of application scenarios and optimally using existing knowledge for comprehensible machine learning. In the medium term, this should enable the practical application of knowledge-based machine learning in a variety of industries such as environmental modelling, behavioral analysis or biomedical development.

<!--
Die entwickelten Methoden werden so die Grundlage bilden, neue Erkenntnisse in unterschiedlichsten Anwendungsszenarien zu gewinnen und vorhandenes Wissen optimal für nachvollziehbares maschinelles Lernen zu nutzen. Mittelfristig soll dies die praktische Anwendung des wissensbasierten maschinellen Lernens in einer Vielzahl von Branchen ermöglichen wie etwa in der Umwelt-modellierung, Verhaltensanalyse oder in der biomedizinischen Entwicklung.  -->

## Resources

### Software

Developed in the project:

- [BK-Buster](/p/bk-buster/) ([code](https://github.com/bckrlab/bk-buster), [earlier experiments](https://github.com/bckrlab/kill-gnn)): perturbation framework for testing whether GNNs actually use biological background knowledge graphs.
- [SubROC](/p/subroc/) ([code](https://github.com/bckrlab/subroc)): discovers subgroups where a classifier performs exceptionally well or poorly; also available in pysubgroup.
- [EMC](/p/emc/) ([code](https://github.com/bckrlab/emc)): Evolving Markov Chains for online mode discovery and recognition in data streams.
- [NeDis](/p/nedis/) ([code](https://github.com/bckrlab/nedis)): network-based analysis of how coordination among biomarkers is disrupted across conditions and time.
- [CytoBERT](/p/cytobert/) ([code](https://github.com/bckrlab/cytobert)): foundation model for cytometry data with variable marker panels.
- [ad-fidelity](/p/ad-fidelity/) ([code](https://github.com/bckrlab/ad-fidelity)): evaluates how faithful CNN explanations are for Alzheimer's disease detection.
- [CorALS](https://github.com/bckrlab/corals): construction and analysis of large-scale correlation networks for high-dimensional data.

Co-developed with collaborators:

- [ITS](https://github.com/johSchm/ITS): test-time search for transformations that make classifiers invariant to rotation and scale.
- [TokenSTN](https://github.com/johSchm/TokenSTN): token-based probabilistic spatial transformers for transformer architectures.
- [SPACEc](https://github.com/yuqiyuqitan/SPACEc): interactive Python workflow for multiplexed image processing and analysis.
- [pysubgroup](https://github.com/flemmerich/pysubgroup): subgroup discovery library, which includes SubROC.

### Literature collections

- [Awesome Informed Machine Learning](https://github.com/bckrlab/awesome-InformedMachineLearning): curated surveys, papers, and datasets on integrating background knowledge into machine learning.
- [Awesome Heterogeneity](https://github.com/bckrlab/awesome-heterogeneity): curated methods for uncovering heterogeneity in complex systems along the horizontal (components), vertical (subgroups), and temporal axes.

## Publications

<!-- Generated from Zotero: items tagged "project:themis" (see _scripts/zotero.py) -->
<div class="publications">

{% bibliography -f zotero --group_by none -q @*[projects~=themis]* %}

</div>

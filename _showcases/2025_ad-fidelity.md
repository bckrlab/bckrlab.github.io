---
layout: showcase
title: Evaluating the Fidelity of Explanations for Convolutional Neural Networks in Alzheimer's Disease Detection
title-short: ad-fidelity
description: XAI for Alzheimer's Disease detection 
date: 2025-03-02
doi-url: https://doi.org/10.1007/s00440-002-0236-0
doi-badge: 10/n87w
github: https://github.com/chillerb/ad-fidelity
github-badge: ad-fidelity
img: /assets/img/p/2025_ad-fidelity/feature-attribution.png
permalink: /p/ad-fidelity/
---

<!-- Bagdes -->
<!--
Now handled by showcase layout
[![Conference Paper Badge](https://img.shields.io/badge/doi-10%2Fn87w-blue?style=flat&logo=doi)](https://doi.org/10.1007/978-3-658-47422-5_18)
[![GitHub Badge](https://img.shields.io/badge/GitHub-ad--fidelity-black?style=flat&logo=github)](https://github.com/chillerb/ad-fidelity)
-->


> Can we trust explanations of neural network decisions in Alzheimer's Disease (AD) detection?

## Key Findings

<details class="info-box hoverable">
    <summary>
        A plethora of explanation methods for convolutional neural networks is available, each with individual benefits and drawbacks.
    </summary>
    <div class="content">
        <img src="/assets/img/p/2025_ad-fidelity/overview.png" width="100%" alt="overview"/>
    </div>
</details>

<details class="info-box hoverable">
    <summary>
        Even though generated attribution maps may appear similar by visual inspection, they can differ significantly regarding the fidelity towards the underlying classifier.**
    </summary>

    <div class="content">
        Visual inspection does not reveal major differences between attribution maps.
        All explanations highlight the hippocampal area, as well as the frontal and temporal lobe:

        <img src="/assets/img/p/2025_ad-fidelity/attribution-maps.png" width="100%" alt="attribution-maps"/>

        To evaluate the fidelity of the explanation methods, we employed the perturbation based *deletion* metric.

        <img src="/assets/img/p/2025_ad-fidelity/deletion-metric.png" width="100%" alt="deletion metric"/>

        Interestingly, this revealed differences between the explanation methods in their ability to decrease the predicted probability for AD:

        <img src="/assets/img/p/2025_ad-fidelity/deletion-cn-mean.png" width="100%" alt="deletion metric with mean image as reference"/>
    </div>
</details>

<details class="info-box hoverable">
    <summary>
    Interpretation of attribution maps should always include the employed reference image, since its selection allows generating an almost arbitrary explanation.
    </summary>

    <div class="content">
    Explanation methods usually implicitly or explicitly employ a *reference image*:
    The computed attribution map tries to explain the differences in model output by the *relative* difference between model input and the reference image.
    Since the reference image is often chosen to be a null image, i.e., an MRI image containg zero signal, this can lead to seemingly contra-intuitive explanations.

    <img src="/assets/img/p/2025_ad-fidelity/feature-attribution.png" width="100%" alt="feature attribution"/>

    For example, we observed explanation methods to assign the hippocampal area negative contribution for classifying a AD sample with AD -
    Even though hippocampal atrophy is a gold standard biomarker in AD detection.
    We hypothesize, that the neural network learned to utilize atrophy patterns, i.e., areas with reduced signal strength, to classify AD.
    However, since a null image was used as reference to generate explanations, even the atrophied AD hippocampus had more overall signal then the null image.
    Thus, the atrophied AD hippocampus was *decreasing* the probability for Alzheimer's Disease *relative to the reference image*.
    Therefore, the explanation method ended up assigning negative contribution.
    </div>
</details>

> In conclusion, we found the **mean image of the control class** to generate more interpretable explanations, since it asks the question:
>
> *"Why was this subject predicted to have AD - compared to a healthy control subject?"*

## Conference Talk
<!--
Well, embedding PDF slides into HTML is not super trivial.
From what I've seen until now, there are multiple options:

- use the Google Docs PDF Viewer to display your PDF. Very simple, works, but requires your PDF to be publicly available somewhere, like GitHub
- you can use Mozialla's open source pdf.js. You are in control, but some JS scripting is required

If your PDF was created with Latex, you can use tex4ht (latex2html seems to be discontinued) to convert your tex directly into HTML.
I tried it, it worked, but the output wasn't very pretty and some things like tikz figures haven't been rendered correctly

The prettiest solution for embedded presentation slides I've encountered was this:
https://ml-book.ai4sc-lehre.auf.uni-rostock.de/

Apparently, it works like this:

- they wrote their slides in Markdown
- then, they used Quatro to convert the Markdown to reveal.js
- reveal.js is used to render the presentation


<iframe src="https://github.com/chillerb/ad-fidelity/blob/main/docs/presentations/2025-03-09_bvm/2025-bvm.pdf?raw=true" width="100%" height="600px"></iframe>
https://raw.githubusercontent.com/chillerb/ad-fidelity/refs/heads/main/docs/presentations/2025-03-09_bvm/2025-bvm.pdf
-->

The results have been presented at the [German Conference on Medical Image Computing (BVM) 2025](https://www.bvm-conf.org/):

<iframe src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/chillerb/ad-fidelity/refs/heads/main/docs/presentations/2025-03-09_bvm/2025-bvm.pdf&embedded=true" width="100%" height="600px"></iframe>

## Acknowledgements

Funding was provided by the BMBF (01IS22077) and DFG (DY151/2-1). Data was provided by the Alzheimer’s Disease Neuroimaging Initiative (ADNI).

> Data collection and sharing for this project was funded by the Alzheimer's Disease Neuroimaging Initiative (ADNI) (National Institutes of Health Grant U01 AG024904) and DOD ADNI (Department of Defense award number W81XWH-12-2-0012). ADNI is funded by the National Institute on Aging, the National Institute of Biomedical Imaging and Bioengineering, and through generous contributions from the following: AbbVie, Alzheimer’s Association; Alzheimer’s Drug Discovery Foundation; Araclon Biotech; BioClinica, Inc.; Biogen; Bristol-Myers Squibb Company; CereSpir, Inc.; Cogstate; Eisai Inc.; Elan Pharmaceuticals, Inc.; Eli Lilly and Company; EuroImmun; F. Hoffmann-La Roche Ltd and its affiliated company Genentech, Inc.; Fujirebio; GE Healthcare; IXICO Ltd.; Janssen Alzheimer Immunotherapy Research & Development, LLC.; Johnson & Johnson Pharmaceutical Research & Development LLC.; Lumosity; Lundbeck; Merck & Co., Inc.; Meso Scale Diagnostics, LLC.; NeuroRx Research; Neurotrack Technologies; Novartis Pharmaceuticals Corporation; Pfizer Inc.; Piramal Imaging; Servier; Takeda Pharmaceutical Company; and Transition Therapeutics. The Canadian Institutes of Health Research is providing funds to support ADNI clinical sites in Canada. Private sector contributions are facilitated by the Foundation for the National Institutes of Health (www.fnih.org). The grantee organization is the Northern California Institute for Research and Education, and the study is coordinated by the Alzheimer’s Therapeutic Research Institute at the University of Southern California. ADNI data are disseminated by the Laboratory for Neuro Imaging at the University of Southern California.

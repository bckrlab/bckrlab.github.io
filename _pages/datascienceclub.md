---
layout: page
permalink: /datascienceclub/
title: Data Science Club
description: University of Rostock
nav: true
nav_order: 23
---

<!-- <img src="/assets/img/datascienceclub/kaggle_pizza.png" style="float: right; width:100%"/> -->
<!-- % next_meeting: see includes/next-dsc-meeting.txt -->

A weekly meeting for anyone who wants to learn about and apply Data Science for real-world problem settings in a casual environment!

<div style="background-color:orange; color: black; padding: 1em">
    <strong>Next meeting</strong>: Wednesday, {% include next-dsc-meeting.txt -%}, 17:00 Uhr, Konrad-Zuse-Haus, Room 116. <strong>Bring your laptops!</strong>
    Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl6HbEX4FjS4U_16XDFxszbY0mImSRmQzLRquIjJME8I8B7g/viewform?usp=sf_link"><b>sign up here</b></a>, so I can plan a little.
</div>

<div class="data-visualization" id="viz"></div>

<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script>
// Create an animated data visualization
const viz = d3.select("#viz");
const width = viz.node().getBoundingClientRect().width;
const height = 200;
const margin = {top: 20, right: 20, bottom: 20, left: 20};

const svg = viz.append("svg")
    .attr("width", width)
    .attr("height", height);

const data = Array.from({length: 50}, (_, i) => ({
    x: i,
    y: Math.sin(i * 0.2) * 30 + 50 + Math.random() * 10
}));

const xScale = d3.scaleLinear()
    .domain([0, data.length - 1])
    .range([margin.left, width - margin.right]);

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);

const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(d3.curveNatural);

const path = svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#ff6e40")
    .attr("stroke-width", 3)
    .attr("d", line);

const pathLength = path.node().getTotalLength();

path
    .attr("stroke-dasharray", pathLength)
    .attr("stroke-dashoffset", pathLength)
    .transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0)
    .on("end", function repeat() {
        d3.select(this)
            .attr("stroke-dashoffset", pathLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .on("end", repeat);
    });

// Add floating particles
const particles = svg.selectAll(".particle")
    .data(Array(10).fill())
    .enter()
    .append("circle")
    .attr("class", "particle")
    .attr("r", 3)
    .attr("fill", "#1e3d59")
    .attr("cx", () => Math.random() * width)
    .attr("cy", () => Math.random() * height);

function animateParticles() {
    particles
        .transition()
        .duration(3000)
        .attr("cx", () => Math.random() * width)
        .attr("cy", () => Math.random() * height)
        .on("end", animateParticles);
}

animateParticles();
</script>


<div style="background-color:lightblue; color: black; padding: 1em">
    <strong>Pizza:</strong> Please bring 3 EUR for Pizza on Monday. It's so awesome that so many people came last time, so we will still get Pizza, but currently, I can't afford that much Pizza every week 😄
</div>

<div style="display: flex; align-items: center; justify-content: center; padding: 1em; background-color: #333; color: white;">
    <div style="flex: 1; text-align: center; padding: 1em;">
        <h2>Let’s solve real-life <strong>DATA SCIENCE COMPETITIONS</strong> together using state-of-the-art <strong>MACHINE LEARNING</strong> for FUN!</h2>
        <p><span style="font-weight: bold; font-size: 1.5em; color: #20B5E5;">Kaggle</span></p>
        <p>Win medals, win prize money, become famous 😊</p>
        <div style="font-size: 2em;">
            <span style="color: #CD7F32;">🥉</span>
            <span style="color: #C0C0C0;">🥈</span>
            <span style="color: #FFD700;">🥇</span>
        </div>
    </div>
    <div style="flex: 1; text-align: center; padding: 1em;">
        <p style="font-size: 2em;">🍕</p>
        <h2>Fun, casual setting with <strong>FREE PIZZA!</strong></h2>
        <p>Come to learn, code, or just hang out.</p>
    </div>
</div>
<div style="background-color:lightgreen; color: black; font-weight: bold; text-align: center; padding: 1em;">
    No prior knowledge or experience necessary!
</div>


## Resources

- [A gentle introduction to Kaggle](https://medium.datadriveninvestor.com/introduction-to-kaggle-for-beginners-in-machine-learning-and-data-science-865199d7ead2)
- [Kaggle](https://www.kaggle.com/)

<!-- 
## History

WS23/24

- 2024-03-04: New Members! Also looked into the [Harmful Brain Activity Classification Challenge](https://www.kaggle.com/competitions/hms-harmful-brain-activity-classification).
- 2024-02-26: 3 days left for the Kaggle February challenge on obesity risk prediction! Spoiler: The "weight" feature seems to be quite informative.
- 2024-02-19: Presentation about graph clustering, community detection and visualization.
- 2024-02-12: Started the next Kaggle Playground Challenge on multi-class obesity detection.
- 2024-02-05: João Saraiva gave an introduction to processing EEG data in Python.
- 2024-01-15: Agreed upon also working on group projects in addition to the Kaggle challenges. Would be interesting to hear teams present their progress.
- 2024-01-08: Ovarian Cancer Competition is closed - started looking for new competitions like [this one](https://www.kaggle.com/competitions/playground-series-s4e1).
- 2023-12-11: Looked into [Advent of Code](https://adventofcode.com/) Challenges. Also got familiar with pyvips to deal with huge Whole Slide Image PNG files.
- 2023-11-13: Continued to work on the ML tutorials and the ovarian cancer challenge. Apparently, the host plans to add label map annotations, rendering training approaches more efficient.
- 2023-11-06: First Meeting in WS23/24! Welcomed the new members and started to work on the [Ovarian Cancer Subtype Classification Challenge](https://www.kaggle.com/competitions/UBC-OCEAN).

SS23
- **30th meeting**: Monday, 03.07.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Training first contrail model.
- **29th meeting**: Monday, 26.06.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Debugging the contrail models.
- **28th meeting**: Monday, 19.06.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Debugging the contrail models, trying out pytorch.
- **27th meeting**: Monday, 12.06.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. We have decided to try the contrail segmentation challenge. Developing first models and dataloader, trying pytorch for the first time.
- **26th meeting**: Monday, 05.06.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Choosing a new competition. Our favorites are either sign language classification or contrail segmentation.
- **25th meeting**: Monday, 22.05.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Making last changes to BirdCLEF competition, slightly improving our score. Next week we will choose a new competition.
- **24th meeting**: Monday, 15.05.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Fixing issues with previous submission being too slow/having wrong csv format.
- **23rd meeting**: Monday, 08.05.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. First submission to BirdCLEF.
- **22nd meeting**: Monday, 24.04.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Training models for BirdCLEF.
- **21st meeting**: Monday, 17.04.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Fixing issues with jupyter lab.
- **20th meeting**: Monday, 03.04.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Debugging GPU issues, setting up docker images, implementing preprocessing for BirdCLEF.

WS22/23
- **19th meeting**: Monday, 27.03.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Training first models for BirdCLEF, debugging jupyter lab issues on GPU cluster.
- **18th meeting**: Monday, 20.03.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Decided on new challenge [BirdCLEF](https://www.kaggle.com/competitions/birdclef-2023).
- **17th meeting**: Monday, 13.03.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Deciding on a new kaggle challenge.
- **16th meeting**: Monday, 06.03.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Discussing our results on the RSNA challenge; looking at new challenges.
- **15th meeting**: Monday, 27.02.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Submitted our first submission on the RSNA Kaggle challenge!
- **14th meeting**: Monday, 20.02.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Finally training on the cluster, formed a team for the competition.
- **13th meeting**: Monday, 13.02.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Trying to train first model on the cluster.
- **12th meeting**: Monday, 06.02.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Preparing first model for kubernetes.
- **11th meeting**: Monday, 30.01.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. We are working with our new cluster access.
- **10th meeting**: Monday, 23.01.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Working on some fancy models for mamography images.
- **9th meeting**: Monday, 16.01.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Trying out servers.
- **8th meeting**: Monday, 09.01.2023, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Lot's of people today, awesome!
- **7th meeting**: Monday, 02.01.2023, 18:00 Uhr, Konrad-Zuse-Haus, Room 116. Happy new year! We are getting back to coding again.
- **6th meeting**: Monday, 19.12.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 116. Everybody was happily looking at our Kaggle image dataset 😄
- **5th meeting**: Monday, 12.12.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 210. Our Discord is online now and we decided on our first joint [Kaggle](https://www.kaggle.com/) challenge!
- **4th meeting**: Monday, 05.12.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 210. We are getting a scoreboard! 😄
- **3rd meeting**: Monday, 28.11.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 210. We are starting to compete against each other, which is amazing! 🤩
- **2nd meeting**: Monday, 21.11.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 210. Today pretty much everyone submitted their first challenge! And we found a place to get cheaper Pizza 😁
- **1st meeting**: Monday, 14.11.2022, 19:00 Uhr, Konrad-Zuse-Haus, Room 210. It was a wonderful first meeting with more than 40 people attending! -->

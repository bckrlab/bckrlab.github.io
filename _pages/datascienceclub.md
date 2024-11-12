---
layout: page
title: Data Science Club
description: University of Rostock
permalink: /datascienceclub/
nav: true
nav_order: 23
---

<div class="dsc-terminal-style">
    <h1>Data Science Club</h1>
    <p class="subheader">University of Rostock</p>

    <p class="description">A weekly meeting for anyone who wants to learn about and apply Data Science for real-world problem settings in a casual environment!</p>

    <!-- Next Meeting Notification -->
    <div class="banner-orange">
        <strong>Next meeting</strong>: Wednesday, {% include next-dsc-meeting.txt %}, 17:00 Uhr, Konrad-Zuse-Haus, Room 116. <strong>Bring your laptops!</strong>
        Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl6HbEX4FjS4U_16XDFxszbY0mImSRmQzLRquIjJME8I8B7g/viewform?usp=sf_link"><b>sign up here</b></a>, so I can plan a little.
    </div>

    <!-- Kaggle + Pizza Content -->
    <div class="content-section">
        <div>
            <h2>Let’s solve real-life <strong>DATA SCIENCE COMPETITIONS</strong> together using state-of-the-art <strong>MACHINE LEARNING</strong> for FUN!</h2>
            <p class="kaggle-title">Kaggle</p>
            <p>Win medals, win prize money, become famous 😊</p>
            <div class="medals">
                🥉 🥈 🥇
            </div>
        </div>
        <div>
            <p class="pizza-icon">🍕</p>
            <h2>Fun, casual setting with <strong>FREE PIZZA!</strong></h2>
            <p>Come to learn, code, or just hang out.</p>
        </div>
    </div>

    <!-- Data Visualization Section -->
    <div id="viz"></div>

    <div class="banner-blue">
        <strong>Pizza:</strong> Please bring 3 EUR for Pizza on Monday. It's so awesome that so many people came last time, so we will still get Pizza, but currently, I can't afford that much Pizza every week 😄
    </div>

    <div class="banner-green">
        No prior knowledge or experience necessary!
    </div>

    ## Resources

    - [A gentle introduction to Kaggle](https://medium.datadriveninvestor.com/introduction-to-kaggle-for-beginners-in-machine-learning-and-data-science-865199d7ead2)
    - [Kaggle](https://www.kaggle.com/)
</div>

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

<style>
    /* Specific styling for the Data Science Club section only */
    .dsc-terminal-style {
        font-family: 'Courier New', Courier, monospace;
        color: #00ff00;
    }

    .dsc-terminal-style h1, .dsc-terminal-style h2 {
        color: #00ff00;
    }

    .dsc-terminal-style .banner-orange, 
    .dsc-terminal-style .banner-blue, 
    .dsc-terminal-style .banner-green {
        background-color: #002200;
        color: #00ff00;
        padding: 1em;
        margin: 1em 0;
        border-radius: 5px;
        border: 1px solid #00ff00;
        text-align: center;
    }

    .dsc-terminal-style .content-section {
        display: flex;
        justify-content: center;
        background-color: #001a00;
        color: #00ff00;
        padding: 1em;
        border: 1px solid #00ff00;
        border-radius: 5px;
        margin: 1em 0;
    }

    .dsc-terminal-style .content-section div {
        flex: 1;
        text-align: center;
    }

    .dsc-terminal-style .pizza-icon, 
    .dsc-terminal-style .medals {
        font-size: 2em;
    }

    .dsc-terminal-style .kaggle-title {
        color: #00ff00;
        font-weight: bold;
    }

    .dsc-terminal-style a {
        color: #00ff00;
        text-decoration: underline;
    }

    .dsc-terminal-style a:hover {
        color: #00cc00;
    }

    .dsc-terminal-style #viz {
        margin: 2em 0;
    }
</style>

---
layout: page
description: University of Rostock
title: Data Science Club
permalink: /datascienceclub/
nav: true
nav_order: 23
---

<style>
    /* Matrix background styling */
    .matrix-canvas {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
    }
    
    /* Override default Jekyll page title styling */
    .post-title {
        color: #00ff00;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        font-size: 3em; /* Increased size for better prominence */
        margin-top: 1em;
        text-shadow: 0 0 5px #00ff00; /* Added glow effect */
    }

    /* Override default Jekyll page title styling */
    .post-description {
        color: #00ff00;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        text-shadow: 0 0 5px #00ff00; /* Added glow effect */
    }

    /* Styling for the Data Science Club content area */
    .post {
        font-family: 'Courier New', Courier, monospace;
        color: #00ff00;
        background-color: rgba(0, 0, 0, 0.7);
        margin: -2rem 0;
        border: 2rem solid rgba(0, 0, 0, 0.7);
    }

    /* Add a subtle background layer to content for readability */
    .dsc-content-background {
        background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
        padding: 1.5em;
        margin: 1em 0;
        border-radius: 8px;
        border: 1px solid #00ff00;
        box-shadow: 0 0 10px #00ff00;
    }

    /* Styling for banners */
    .dsc-banner {
        background-color: rgba(0, 34, 0, 0.85);
        color: #00ff00;
        padding: 1em 1.5em;
        margin: 1em 0;
        border-radius: 8px;
        border: 1px solid #00ff00;
        text-align: center;
        box-shadow: 0 0 10px #00ff00;
    }

    /* Styling for content sections */
    .dsc-content-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: rgba(0, 26, 0, 0.85);
        color: #00ff00;
        padding: 1.5em;
        border: 1px solid #00ff00;
        border-radius: 8px;
        margin: 1em 0;
        box-shadow: 0 0 10px #00ff00;
    }

    .dsc-content-section div {
        flex: 1;
        min-width: 250px;
        text-align: center;
        margin: 1em;
    }

    .dsc-content-section h2 {
        font-size: 1.8em;
        text-shadow: 0 0 5px #00ff00;
    }

    .dsc-icon {
        font-size: 2.5em;
        margin: 0.5em 0;
    }

    .kaggle-title {
        color: #00ff00;
        font-weight: bold;
        font-size: 1.5em;
        text-shadow: 0 0 3px #00ff00;
    }

    /* Styling for links */
    .dsc-terminal-style a {
        color: #00ff00;
        text-decoration: underline;
        transition: color 0.3s;
    }

    .dsc-terminal-style a:hover {
        color: #00cc00;
    }

    /* Styling for Resources section */
    .dsc-resources {
        background-color: rgba(0, 26, 0, 0.85);
        color: #00ff00;
        padding: 1.5em;
        margin: 1em 0;
        border: 1px solid #00ff00;
        border-radius: 8px;
        box-shadow: 0 0 10px #00ff00;
    }

    .dsc-resources h2 {
        font-size: 1.8em;
        text-align: center;
        margin-bottom: 1em;
        text-shadow: 0 0 5px #00ff00;
    }

    .dsc-resources ul {
        list-style-type: none; /* Remove default bullets */
        padding: 0;
    }

    .dsc-resources li {
        margin: 0.5em 0;
        font-size: 1.2em;
    }

    .dsc-resources a {
        color: #00ff00;
        text-decoration: underline;
    }

    .dsc-resources a:hover {
        color: #00cc00;
    }

    /* Data Visualization Section */
    #viz {
        margin: 2em 0;
    }

    /* Responsive adjustments */
    @media (max-width: 800px) {
        .dsc-content-section {
            flex-direction: column;
        }

        .page-title {
            font-size: 2.5em;
        }

        .dsc-content-section h2 {
            font-size: 1.5em;
        }

        .dsc-resources h2 {
            font-size: 1.5em;
        }
    }
</style>

<div class="dsc-content-background">
    <p class="description" style="text-align: center;">A weekly meeting for anyone who wants to learn about and apply Data Science for real-world problem settings in a casual environment!</p>
</div>

<div class="dsc-banner">
    <strong>Next meeting</strong>: Wednesday, {% include next-dsc-meeting.txt %}, 17:00 Uhr, Konrad-Zuse-Haus, Room 116. <strong>Bring your laptops!</strong>
    Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl6HbEX4FjS4U_16XDFxszbY0mImSRmQzLRquIjJME8I8B7g/viewform?usp=sf_link"><b>sign up here</b></a>, so I can plan a little.
</div>

<!-- Kaggle + Pizza Content -->
<section class="dsc-content-section">
    <div>
        <h2>Let’s solve real-life <strong>DATA SCIENCE COMPETITIONS</strong> together using state-of-the-art <strong>MACHINE LEARNING</strong> for FUN!</h2>
        <p class="kaggle-title">Kaggle</p>
        <p>Win medals, win prize money, become famous 😊</p>
        <div class="dsc-icon">
                🥉 🥈 🥇
        </div>
    </div>
    <div>
        <div class="dsc-icon">🍕</div>
        <h2>Fun, casual setting with <strong>FREE PIZZA!</strong></h2>
        <p>Come to learn, code, or just hang out.</p>
    </div>
</section>

<!-- Data Visualization Section -->
<div id="viz"></div>

<!-- Pizza Contribution Notice -->
<div class="dsc-banner">
    <strong>Pizza:</strong> Please bring 3 EUR for Pizza on Monday. It's so awesome that so many people came last time, so we will still get Pizza, but currently, I can't afford that much Pizza every week 😄
</div>

<!-- No Experience Needed Notice -->
<div class="dsc-banner">
    No prior knowledge or experience necessary!
</div>

<!-- Resources Section -->
<div class="dsc-resources">
    <h2>Resources</h2>
    <ul>
        <li><a href="https://medium.datadriveninvestor.com/introduction-to-kaggle-for-beginners-in-machine-learning-and-data-science-865199d7ead2" target="_blank">A gentle introduction to Kaggle</a></li>
        <li><a href="https://www.kaggle.com/" target="_blank">Kaggle</a></li>
    </ul>
</div>

<!-- Matrix Background Script -->

<canvas class="matrix-canvas"></canvas>

<script>
    // Matrix effect script
    const canvas = document.querySelector('.matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Make the canvas full screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Characters - taken from the unicode charset
    const letters = 'アァカサタナハマヤャラワン1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersArray = letters.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        drops.forEach((y, i) => {
            const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        });
    }

    setInterval(draw, 33);

    // Adjust canvas size on window resize
    window.addEventListener('resize', resizeCanvas);
</script>

<!-- D3.js Visualization Script -->
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script>
    const viz = d3.select("#viz");
    const width = viz.node().getBoundingClientRect().width;
    const height = 200;
    const margin = {top: 20, right: 20, bottom: 20, left: 20};

    const svg = viz.append("svg")
        .attr("width", width)
        .attr("height", height);

    let data = generateRandomDataWithEdges();

    function generateRandomDataWithEdges() {
        const randomPoints = Array.from({length: 18}, () => ({
            x: Math.random() * 10,
            y: Math.random() * 10
        }));
        randomPoints.push({ x: 0, y: Math.random() * 10 });
        randomPoints.push({ x: 10, y: Math.random() * 10 });
        return randomPoints.sort((a, b) => a.x - b.x);
    }

    function movingAverage(data, windowSize) {
        const smoothedData = [];
        for (let i = 0; i < data.length; i++) {
            let start = Math.max(0, i - windowSize);
            let end = Math.min(data.length, i + windowSize + 1);
            let subset = data.slice(start, end);
            let avgY = d3.mean(subset, d => d.y);
            smoothedData.push({ x: data[i].x, y: avgY });
        }
        return smoothedData;
    }

    function drawChart() {
        const smoothedData = movingAverage(data, 2);

        const xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height - margin.bottom, margin.top]);

        const dots = svg.selectAll(".dot")
            .data(data);

        dots.enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3)
            .merge(dots)
            .transition()
            .duration(1000)
            .attr("cx", d => xScale(d.x))
            .attr("cy", d => yScale(d.y))
            .attr("fill", "#00ff00");

        dots.exit().remove();

        setTimeout(() => {
            const line = d3.line()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y))
                .curve(d3.curveBasis);

            const path = svg.selectAll(".line")
                .data([smoothedData]);

            path.enter().append("path")
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke", "#00ff00")
                .attr("stroke-width", 2)
                .merge(path)
                .attr("d", line)
                .attr("stroke-dasharray", function() { return this.getTotalLength(); })
                .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
                .transition()
                .duration(2000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);

            path.exit().remove();
        }, 1000);
    }

    function updateAndAnimate() {
        data = generateRandomDataWithEdges();
        drawChart();
        setTimeout(updateAndAnimate, 3000);
    }

    updateAndAnimate();
</script>

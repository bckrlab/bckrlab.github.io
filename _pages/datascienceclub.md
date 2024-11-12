---
layout: page
description: University of Rostock
permalink: /datascienceclub/
nav: true
nav_order: 23
---

<style>
    /* Styling for the Jekyll title */
    .page-title {
        color: #00ff00; /* Bright green to match the terminal style */
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        font-size: 2em;
    }

    /* Specific styling for the Data Science Club section only */
    .dsc-terminal-style {
        font-family: 'Courier New', Courier, monospace;
        color: #00ff00;
    }

    .dsc-terminal-style .subheader {
        color: #00ff00;
        text-align: center;
        margin-top: -0.5em;
        font-size: 1em;
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

<div class="dsc-terminal-style">
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
            <p>Win medals, win price money, become famous 😊</p>
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
// Create an animated data visualization with random points, moving average smoothing, and line drawing effect
const viz = d3.select("#viz");
const width = viz.node().getBoundingClientRect().width;
const height = 200;
const margin = {top: 20, right: 20, bottom: 20, left: 20};

const svg = viz.append("svg")
    .attr("width", width)
    .attr("height", height);

let data = generateRandomDataWithEdges(); // Initialize with initial data including edge points

function generateRandomDataWithEdges() {
    // Generate random scatter points with two additional points at x = 0 and x = 10
    const randomPoints = Array.from({length: 18}, () => ({
        x: Math.random() * 10,
        y: Math.random() * 10
    }));
    randomPoints.push({ x: 0, y: Math.random() * 10 }); // Start point at x = 0
    randomPoints.push({ x: 10, y: Math.random() * 10 }); // End point at x = 10
    return randomPoints.sort((a, b) => a.x - b.x); // Sort by x to create a smoother curve
}

function movingAverage(data, windowSize) {
    // Apply a moving average to smooth out the data
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
    const smoothedData = movingAverage(data, 2); // Smoothing with a window size of 2

    const xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([height - margin.bottom, margin.top]);

    // Draw or update scatter points with a transition for shuffling
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
        .attr("fill", "#00ff00"); // Green color for points

    dots.exit().remove();

    // Delay line drawing to start after point transition finishes
    setTimeout(() => {
        // Draw or update the smoothed line with a "line drawing" animation
        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveBasis); // Smooth line through the moving averages

        const path = svg.selectAll(".line")
            .data([smoothedData]);

        path.enter().append("path")
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "#00ff00") // Green color for line
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
    }, 1000); // Delay line drawing by 1000ms to match the dot transition duration
}

// Shuffle points and redraw chart every few seconds
function updateAndAnimate() {
    data = generateRandomDataWithEdges(); // Generate new random positions for each point including edge points
    drawChart();
    setTimeout(updateAndAnimate, 3000); // Loop the animation
}

// Initial call to start the chart and animation loop
updateAndAnimate();
</script>

---
layout: post
mathjax: true
comments: true
title: Fuel Dispatching - Finding the best time to schedule mining haul trucks to fuel 
date: 2023-06-25
# keywords: "Jalpc,Jekyll,gh-pages,website,blog,easy"
categories: [projects]
tags: [Python, Machine Learning, Optimization, Mining]
# icon: icon-html
---

<div style='text-align:center'><em>"Know how to solve every problem that has been solved." - R. Feynman (1988)</em></div>
<br>
<br>
<head>
<style>
.gunimage {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
}
.half {
  width:50%;
  float: left;
}
#images {
  text-align: center;
  width: 100%;
}
div.section_header {
  font-size: x-large;
  color: rgb(30,144,255);
}
</style>
</head>

``Programming Language: Python``
[[Link App]](https://luisflarota-650finalthesis-front-3vvewc.streamlit.app/){:target="blank"}

---
layout: post
mathjax: true
comments: true
title: Machine Learning and Optimization Techniques Applied to Haulage Trucks Fueling in Surface Mining Operations
date: 2023-09-06
categories: [projects]
tags: [Mining Engineering, Machine Learning, Optimization]
author: Luis Fernando Larota Machacca
advisor: Robert Hall, PhD
institution: South Dakota School of Mines & Technology
---

# Content

[1. Problem statement](#s2) <br>
[2. Literature Review](#s3) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[2.1. Machine learning predicting fuel consumption review](#s4) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[2.2. Fuel dispatching review](#s5) <br>
[3. Methodology](#s6) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[3.1. Data Collection](#s7) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[3.2. Machine Learning](#s8) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[3.3. Optimization](#s9) <br>
[4. Results](#s10) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[4.1. Machine Learning](#s11) <br>
&nbsp;&nbsp;&nbsp;&nbsp;[4.2. Optimization](#s12) <br>
[5. Future work](#s14) <br>
[6. Code source](#s15) <br>

---

<h2 id="s2">1. Problem statement</h2>
Mining Engineers, and this is my kindly opinion, have learned about solving the Ultimate Pit Limit Problems by easy examples, i.e., Lerchs-Grossman 2D Algorithm. However, that is not what we see when running an open-pit mining operation. Software programs have solved most of the current problems, including this, and some mining engineers become users rather than doers. That being said, I decided to code the solution to the ultimate pit limit problem by applying the Pseudoflow algorithm (Hochbaum, 2008 [^1^]).

Given a 3D block model, how do we find the economic envelope/volume that contains the maximum value and fits within our operational constraints? i.e., maximum slope angles?

---

<h2 id="s3">2. Literature Review</h2>

---

<h3 id="s4">2.1. Machine learning predicting fuel consumption review</h3>
| Author | Algorithm | Features | Metric | Perf. |
| --- | --- | --- | --- | --- |
| 1. Dindarloo and S. (2015) | ANN | Payload, Cycle status | MAPE | 10% |
| 2. Dindarloo and S. (2016) | PLSR | Cycle status | MAPE | 6% |
| 3. Wang et al. (2021) | XGBoost | Distance, Time, Uphill distance | MAPE | 8.8% |
| **4. Soofastaei (2022)** | **ANN** | **Payload, Resistance, Speed** | **R^2** | **90%** |

[^1^]: [Source](https://hochbaum.ieor.berkeley.edu/html/pub/Hochbaum-OR.pdf)

---

<h3 id="s5">2.2. Fuel dispatching review</h3>
| Approach | Features | Lacking |
| --- | --- | --- |
| 1. Caceres and Well (2017) | Automated fuel dispatching, better filling volumes, lower queues and person-hours | - Math formulation |
| 2. Modular Mining Systems (2019) | Set minimum fuel level, assign manually | - Trial and error approaches; - Needs customization; - No benefits and consequences. |
| 3. Leonida (2022) | Maximizes fuel utilization, minimizes trips to fuel locations | - Math formulation; - Multi-objective function; - No proven results |

---

<h2 id="s6">3. Methodology</h2>

---

<h3 id="s7">3.1. Data Collection</h3>
- Data Retrieved from FMS
- MF is the match factor

---

<h3 id="s8">3.2. Machine Learning</h3>
- Features & Labels:
  - Feature: EFH (m), truck model, payload (tons)
  - Label: Fuel consumed (L)
- Machine learning algorithms: 6 supervised ML algorithms
- Tuning: Grid search, cross-validation
- Selection: Accuracy (R-squared), simplicity (tuning time)
- Coding Environment: Python, Scikit-learn, Tensorflow

---

<h3 id="s9">3.3. Optimization</h3>
- Optimization model: Binary integer programming model
- Objective Functions: Maximize match factor
- Decision variables: If truck h is sent to fuel at time t
- Constraints:
  - <20% fuel ratio trucks refueled
  - Trucks avoid simultaneous refueling
  - Trucks fueling only once
  - 15-minute refueling window
  - 0% minimum fuel level ensured
- Coding Environment: Python & Gurobi

---

<h2 id="s10">4. Results</h2>

---

<h3 id="s11">4.1. Machine Learning</h3>
| Algorithm | R^2 (Test) | Training Time | Tuning Time |
| --- | --- | --- | --- |
| Multi-Linear Regression (Base Model) | 75% | 126ms | 0s |
| Support Vector Regression (SVR) | 75% | 31ms | 5m 21s |
| Decision Tree Regression | 55% | 107ms | 5m 25s |
| Gradient Boosting Regression | 66% | 139ms | 3m 29s |
| Random Forest Regression | 64% | 109ms | 1m 07s |
| **Artificial Neural Network** | **90%** | **65ms** | **21hr 17min** |

---

<h3 id="s12">4.2. Optimization</h3>
- First Formulation (Fuel time window):
  - (1) Infeasible model, (2) impractical to adjust truck-shovel allocations.
- Adjustment First Formulation:
  - (1) Penalty for overlapping fueling, (2) non-linearity issue, and (3) variables and constraints = more time
- Second Formulation (No fuel time window):
  - (1) Feasible (+optimal) model, (2) Match factor improvement (avg.): 1 point, and (3) arrival difference (avg.): 10-minute difference

---

<h2 id="s10">5. Future work</h2>


1. Investigating the impact of different variables;
2. Extending the sample size;
3. Implementation;
4. Mobile stations in the optimization model;
5. Model a complete shift with the truck-shovel allocation engine.


<h2 id="s10">6. Code Source</h2>
<div id="images">
  <div class="half">
  <a href="https://github.com/luisflarota/Fuel-dispatching" target="_blank">
    <img class="gunimage" alt="idk" src="../../../../static/assets/img/blog/github-icon.png?raw=true">
    <p>GitHub</p>
  </a>
  </div>
  
</div>
<div style="clear: both;"></div>

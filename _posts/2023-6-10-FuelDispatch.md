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

--
# Fuel Dispatching

## Machine Learning and Optimization Techniques Applied to Haulage Trucks Fueling in Surface Mining Operations

### Luis Fernando Larota Machacca
### Master's defense - MS in Mining Engineering
### Advisor: Robert Hall, PhD
### South Dakota School of Mines & Technology
### September 6, 2023

---

# Outline

- Introduction
- Research Problem & Hypothesis
- Literature Review
- Methodology
- Results
- Future Work
- Acknowledgments

---

# Introduction

*Source: Hustrulid, W. A., Kuchta, M., and Martin, R. K. (2013). Open pit mine planning and design, two volume set & CD-ROM pack. CRC Press.*

---

# Research Problem & Hypothesis

- 1. Machine learning - fuel consumption
- 2. Optimization model - dispatching

---

# Literature Review

## Machine learning predicting fuel consumption review

| Author | Algorithm | Features | Metric | Perf. |
| --- | --- | --- | --- | --- |
| 1. Dindarloo and S. (2015) | ANN | Payload, Cycle status | MAPE | 10% |
| 2. Dindarloo and S. (2016) | PLSR | Cycle status | MAPE | 6% |
| 3. Wang et al. (2021) | XGBoost | Distance, Time, Uphill distance | MAPE | 8.8% |
| **4. Soofastaei (2022)** | **ANN** | **Payload, Resistance, Speed** | **R^2** | **90%** |

*Sources in footnotes.*

---

# Literature Review

## Fuel dispatching review

| Approach | Features | Lacking |
| --- | --- | --- |
| 1. Caceres and Well (2017) | Automated fuel dispatching, better filling volumes, lower queues and person-hours | - Math formulation |
| 2. Modular Mining Systems (2019) | Set minimum fuel level, assign manually | - Trial and error approaches; - Needs customization; - No benefits and consequences. |
| 3. Leonida (2022) | Maximizes fuel utilization, minimizes trips to fuel locations | - Math formulation; - Multi-objective function; - No proven results |

*Sources in footnotes.*

---

# Methodology

## Data Collection

- Data Retrieved from FMS
- MF is the match factor

---

# Methodology - Machine Learning

- Features & Labels:
  - Feature: EFH (m), truck model, payload (tons)
  - Label: Fuel consumed (L)
- Machine learning algorithms: 6 supervised ML algorithms
- Tuning: Grid search, cross-validation
- Selection: Accuracy (R-squared), simplicity (tuning time)
- Coding Environment: Python, Scikit-learn, Tensorflow

---

# Methodology - Optimization

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

# Results

## Machine Learning

| Algorithm | R^2 (Test) | Training Time | Tuning Time |
| --- | --- | --- | --- |
| Multi-Linear Regression (Base Model) | 75% | 126ms | 0s |
| Support Vector Regression (SVR) | 75% | 31ms | 5m 21s |
| Decision Tree Regression | 55% | 107ms | 5m 25s |
| Gradient Boosting Regression | 66% | 139ms | 3m 29s |
| Random Forest Regression | 64% | 109ms | 1m 07s |
| **Artificial Neural Network** | **90%** | **65ms** | **21hr 17min** |

---

# Results

## Optimization

- First Formulation (Fuel time window):
  - (1) Infeasible model, (2) impractical to adjust truck-shovel allocations.
- Adjustment First Formulation:
  - (1) Penalty for overlapping fueling, (2) non-linearity issue, and (3) variables and constraints = more time
- Second Formulation (No fuel time window):
  - (1) Feasible (+optimal) model, (2) Match factor improvement (avg.): 1 point, and (3) arrival difference (avg.): 10-minute difference

---


# Results - Summary

- ✔️ Machine learning:
  - ANN: 90% accuracy
  - More reliable than radio-call
- ✔️ Optimization model:
  - Math formulation
  - Integral objective function
  - <1 sec. to run for a fleet of 57 trucks

---

# Future work

- Investigating the impact of different variables
- Extending the sample size
- Implementation
- Mobile stations in the optimization model
- Model a complete shift with the truck-shovel allocation engine

---

# Acknowledgments

- Dr. Hall
- Dr. Brickey
- Dr. Kumar

---

# Thank You!

Questions?

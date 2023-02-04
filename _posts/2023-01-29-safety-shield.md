---
title: "Safety shield for human-robot collaboration"
categories: 
  - safe-rl
values:
    layout: single
    author_profile: true
    read_time: true
    comments: true
    share: true
    related: true
classes: wide
header:
  teaser: "/assets/img/hri.png"
---
In recent years, researchers have made great progress in solving complex manipulation tasks using deep reinforcement learning (RL). RL has been used to control robotic arms, play table tennis, and even stack boxes. However, a significant challenge in using RL in human working environments is to guarantee the safety of surrounding humans, who have unpredictable movement and many degrees of freedom.

To address this challenge, we propose a new concept called a "safety shield" for RL. Our safety shield concept is based on speed and separation monitoring (SSM), which guarantees human safety at all times. The safety shield combines a low-frequency RL agent with a high-frequency formal verification, ensuring that the robot stops before any collision with a human could occur.

Our safety shield is the first of its kind, providing provable safety for continuous action spaces in high-dimensional state-spaces and unpredictable dynamic environments. It can be applied to a variety of manipulation tasks and is highly effective in quickly reacting to highly dynamic human motion.

In conclusion, our safety shield concept provides a solution to the challenge of guaranteeing human safety in human-robot collaboration environments. It combines the benefits of RL, such as the ability to make long-term decisions, with the peace of mind of provable safety.
For more information, see our two ICRA'22 publications and associated presentation videos:
 - Provably Safe Deep Reinforcement Learning for Robotic Manipulation in Human Environments [[IEEExplore](https://ieeexplore.ieee.org/document/9811698)] [[Arxiv](https://arxiv.org/abs/2205.06311)]
 - SaRA: A Tool for Safe Human-Robot Coexistence and Collaboration through Reachability Analysis [[IEEExplore](https://ieeexplore.ieee.org/document/9811952)]

{% include video id="ldvWMJVBLa0" provider="youtube" %}
{% include video id="p9jfqhiyxPY" provider="youtube" %}
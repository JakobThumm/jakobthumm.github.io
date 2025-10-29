---
title: "Safety shield for human-robot collaboration"
categories: 
  - safe-rl
values:
    layout: single
    author_profile: true
    read_time: false
    comments: false
    share: false
    related: false
classes: wide
header:
  teaser: "/assets/img/hri.png"
---
{% include video id="IUAeZGau28E" provider="youtube" %}
We cannot directly deploy embodied AI agents in human environments, as they may exhibit unforeseen and erratic behavior under OOD conditions.
We solve this problem with our SARA shield that provides formal safety verification for autonomous robots in human environments.

Our safety shield uses set-based reachability analysis to verify if a contact between the human and the robot is possible before we could stop the robot.
SARA shield comes in two modes: in the speed and separation monitoring (SSM), it guarantees that the robot is stopped before a collision could occur, and in the power and force limiting (PFL) mode, we guarantee pain-free contacts by limiting the kinetic energy of the robot before contact.
Our safety shield is the first of its kind, providing provable safety for continuous action spaces in high-dimensional state-spaces and unpredictable dynamic environments. It can be applied to a variety of manipulation tasks and is highly effective in quickly reacting to highly dynamic human motion.

Publications:
 - T-RO 2025: A General Safety Framework for Autonomous Manipulation in Human Environments [[Arxiv](https://arxiv.org/abs/2412.10180)]
 - ICRA 2022: Provably Safe Deep Reinforcement Learning for Robotic Manipulation in Human Environments [[IEEExplore](https://ieeexplore.ieee.org/document/9811698)] [[Arxiv](https://arxiv.org/abs/2205.06311)]
 - ICRA 2022: SaRA: A Tool for Safe Human-Robot Coexistence and Collaboration through Reachability Analysis [[IEEExplore](https://ieeexplore.ieee.org/document/9811952)]

{% include video id="h6Sn1aZDQe4" provider="youtube" %}
{% include video id="ldvWMJVBLa0" provider="youtube" %}
{% include video id="p9jfqhiyxPY" provider="youtube" %}
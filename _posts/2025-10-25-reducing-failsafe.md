---
title: "Reducing Safety Interventions in Provably Safe Reinforcement Learning"
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
---
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/dIvhyV5z8bM" frameborder="0" allowfullscreen></iframe></div>
In our previous work, we showed how a [safety shield](/posts/safety-shield/) can ensure the safety of RL agents in general robotic tasks.
When trained in simulation, the RL agent learns to evade the human to reach its goal.
Since a safety intervention slows down the robot, the agent learns a behavior that will have little interventions on average.
When we tested this behavior on the real robot, even small intrusions into the robots workspace led to strong safety interventions.
This indicates that the agent struggles to learn a reactive behavior that prevents failsafe interventions.

<img src="/assets/img/main_idea.png" alt="image-right" style="max-width:500px;width:100%;float:right;margin:0 0 1rem 2rem;"/>

To address this problem, we propose a two new methods to reduce the interventions of our safety shield, action replacement and projection.
At each RL step, we check if the selected action is likely to cause a safety intervention and alter the action if that is the case.
Both methods cannot fully prevent all safety interventions as this would result in a very restrictive robot behavior.
However, our experiments show that the action projection method reduces the number of interventions to almost zero in two different robotic domains.
The safety reduction does not come with any loss of reward performance.

Our real-world evaluations on a six degree-of-freedom manipulator showed strong improvements in the behavior of the safe RL agent when using our proposed projection method, as you can see in the video on top.

For more a detailed description of our proposed methods, see our pre-print:
 - IROS 2023: Reducing Safety Interventions in Provably Safe Reinforcement Learning [[IEEExplore](https://ieeexplore.ieee.org/document/10342464), [Arxiv](https://arxiv.org/abs/2303.03339)]
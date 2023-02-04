---
title: "Human-robot-gym"
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
  teaser: "/assets/img/handover_small.png"
---
The field of collaborative robotics is rapidly growing and has the potential to change the way we live our day-to-day lives. From easing the work of factory workers, construction workers, and people with disabilities, to improving household tasks, the possibilities are endless. However, in order to achieve this, robots must be able to work in collaboration with humans in a dynamic and flexible way.

Reinforcement learning (RL) has been showing great promise in solving challenging manipulation tasks on robots, and recent advancements in safe RL have made it feasible to apply deep learning-based controllers in safety-critical environments. To promote the development of safe and improved RL agents, we are introducing a new benchmark suite called human-robot-gym. This platform is designed to train and evaluate RL algorithms in environments where humans exhibit diverse and complex behaviors. The RL agents will learn to complete various tasks of varying difficulty levels, including reaching, pick-and-place, robot-human handover, object inspection, drilling, tossing a can, and collaborative lifting.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/hrgym.png){: width="600" .align-center }

To guarantee a natural human behavior, we will record a large set of custom human animations for each task using a high-precision motion capture system. Additionally, to jump-start the development of safe collaborative RL methods, human-robot-gym comes pre-implemented with our [safety-shield]({% link _posts/2023-01-29-safety-shield.md %}), which guarantees human safety using reachability analysis.

We are confident that human-robot-gym will encourage the development of new algorithms for human-preference learning, collaborative RL, and safe RL in human environments. Contact me for an early release verison of human-robot-gym, as the official release is planned for summer 2023.

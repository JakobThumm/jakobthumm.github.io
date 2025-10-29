---
title: "Provably Safe RL"
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
  teaser: "/assets/img/provably_safe_rl_structure.png"
---
![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/provably_safe_rl_structure.png){: width="800" .align-center }

We have to guarantee the safety of AI agents in deployment as they can show dangerous behavior in unseen situations.
As reinforcement learning (RL) agents learn by exploring the world, they are especially susceptible to returning unsafe actions.
In this line of work, we investigate how to best incorporate formal safety guarantees in the training of RL agents.

We catogerize provably safe RL by the way the actions are altered, namely action replacement, action projection, and action masking.
Throughout all tasks, incorporating provable safety guarantees in the RL training significantly improves the performance of the agent. 
We find that action replacement is an easy to apply and effective method for simple environments.
In more complex environments, our new continuous action masking approach performs the best.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/provably_safe_rl_results.png){: width="600" .align-center }

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/action_masking_results.png){: width="800" .align-center }

Publications:
 - NeurIPS 2024: Excluding the irrelevant: Focusing reinforcement learning through continuous action masking [[OpenReview](https://proceedings.neurips.cc/paper_files/paper/2024/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)]
 - TMLR 2023: Provably safe reinforcement learning: Conceptual analysis, survey, and benchmarking [[OpenReview](https://openreview.net/pdf?id=mcN0ezbnzO)]
---
title: "Jakob Thumm"
layout: single
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/img/desert_1.png
  caption: "Mojave Desert, California"
excerpt: "Teaching robots to safely work with humans."
classes: wide
---
I'm a postdoctoral scholar at Stanford University in the [Autonomous Systems Lab](https://stanfordasl.github.io/) under supervision of [Marco Pavone](https://profiles.stanford.edu/marco-pavone).
Prior to joining Stanford, I earned my Ph.D. in Computer Engineering from the Technical University of Munich, where I was supervised by [Matthias Althoff](https://www.ce.cit.tum.de/en/cps/members/prof-dr-ing-matthias-althoff/).

My research enables robots to work together with humans in a safe, efficient, and enjoyable manner. 
These robots will support human workers in sectors such as manufacturing, health care, and geriatric care to fulfill tedious, strenuous, and dangerous tasks.
Realizing this potential requires deploying autonomous robots in environments traditionally designed for humans, which poses critical challenges:

 - **Embodied AI**: How can we teach robots to perform complex tasks with and around humans?
 - **Safe AI**: How can we certifiably verify the safety of autonomous agents?
 - **Personalized AI**: How can we rapidly adapt autonomous behavior to best support individual users?

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/general_overview_figure.png){: width="900" .align-center }

To answer these questions, I develop methods that combine the rigor of formal techniques, such as set-based reachability analysis, with the flexibility of learning-based approaches for creating generalized robot policies.
Concretely, I developed a [safety shield for provably safe collaboration]({% link _posts/2023-01-29-safety-shield.md %}), enabling close contact and high-performance interaction.
In the area of safe reinforcement learning (RL), I formulated the [theoretical framework for integrating formal safety guarantees into RL training]({% link _posts/2025-10-28-provably-safe-rl.md %}), showing that safety guarantees can substantially improve the policy performance.
Furthermore, I introduced a [method for preference alignment from a single user instruction]({% link _posts/2025-10-29-text2interaction.md %}), enabling a personalized robot behavior without extensive user feedback.
Across these works, my methods have been successfully deployed on multiple robot platforms in international collaborations with academic and industrial partners.
My vision is to deploy autonomous robots to support humans in everyday tasks including industrial applications, household, and geriatric care.


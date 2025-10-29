---
title: "Text2Interaction"
categories: 
  - personalized-ai
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
| ![Baseline]({{ site.url }}{{ site.baseurl }}/assets/img/B1_JakobBaseline1.gif) | ![Text2Interaction]({{ site.url }}{{ site.baseurl }}/assets/img/E2_JakobHandleUpwards2.gif) |
|:--:|:--:|
| **Baseline** | **Text2Interaction** |

Different users have varying preferences. This naturally applies to robotics as well!
Adjusting robot behavior to human preferences can require intensive human feedback, which prevents a quick adaptation to new users and changing circumstances. 

To integrate new user preferences in a zero-shot manner, we propose [Text2Interaction](https://sites.google.com/view/text2interaction).
We use foundation models to generate task plans, motion preferences as Python code, and parameters of a safe controller that align with the user preferences.
By maximizing the combined probability of task completion and user satisfaction, we can reliably find plans that fulfill both requirements. 
In our real-world user study, we found that 83% of users think that it integrates their preferences into the robot’s plan, and 94% prefer Text2Interaction over the baseline. 

Publications:
 - CoRL 2024: Text2Interaction: Establishing Safe and Preferable Human-Robot Interaction [[Website](https://sites.google.com/view/text2interaction), [OpenReview](https://openreview.net/forum?id=s0VNSnPeoA), [Arxiv](https://arxiv.org/abs/2408.06105), [Github](https://github.com/JakobThumm/text2interaction)]

 {% include video id="LNfVw9ZtAtI" provider="youtube" %}
---
title: "Including User Preferences in Embodied AI"
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
---
| <img src="/assets/img/B1_JakobBaseline1.gif" alt="Baseline" style="max-width:100%;width:100%;display:block;margin:2rem auto;"/> | <img src="/assets/img/E2_JakobHandleUpwards2.gif" alt="Text2Interaction" style="max-width:100%;width:100%;display:block;margin:2rem auto;"/> |
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

 <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/LNfVw9ZtAtI" frameborder="0" allowfullscreen></iframe></div>
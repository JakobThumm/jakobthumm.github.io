---
title: "Research Vision: Personalized AI"
categories:
  - research
---

## Motivation

The acceptance of autonomous robots increases significantly when user biases, preferences, and ideas are taken into account by personalized robots. Recent approaches that aim to incorporate user preferences into the robot's plan require a large number of user queries to build a dataset of desired behavior, which is a time-intensive process. Instead, future robots should adapt to user preferences from single instructions, build a mental model of user preferences over time, and react to subtle social cues.

## Prior Work

In my recent work, I propose the Text2Interaction framework to integrate user preferences into task and motion planning, as well as robot control, from a single language instruction. To achieve this, I formalize the problem of preference alignment as maximizing the combined probability of satisfying the preferences of the user and solving the task. I then search for the optimal sequence of pre-defined adaptable skills to perform the task in a preferred manner. This theoretical formulation led to more preferable robot plans without sacrificing task success rate, and users found it engaging to interact with our robot. Furthermore, I designed our recent safety shield for close contact interactions to be fully adaptable to personal safety and comfort preferences.

## Research Vision

To align learning-based models with user preferences, my research group will develop methods that enable rapid adaptation of robot behavior to new users and situations, facilitate diverse communication, and establish continuous personalization.

To achieve preference alignment of foundation models for robotics, I will explore preference-clustering techniques in the embedding space and few-shot learning approaches for vision-language-action models. For more intuitive, inclusive, and natural human-robot communication, I will investigate how insights from human-to-human collaboration can be transferred to robots, enabling them to recognize and respond to subtle social cues such as gestures and facial expressions. I will further study how tasks can be fairly distributed between a fleet of robots and human workers to maximize efficiency and minimize mental and physical strain.

## Path to Deployment

I will evaluate the developed methods through real-world user studies, which have provided me with valuable insights in the past. In this context, I am organizing a study that involves visitors of the Stanford Robotics Center to observe how robots adapt to diverse users in real settings. Insights from these studies will guide the implementation of preference alignment techniques in everyday assistive scenarios.

Over time, I aim to apply these methods to create highly personalized and socially responsive robots that become trusted companions and caregivers, supporting people throughout all stages of life. By continuously studying the user acceptance and satisfaction of our robots, I aim to ensure that autonomous systems remain genuinely beneficial to the people they serve.

---
title: "Research Vision: Embodied AI"
categories:
  - research
---

## Motivation

For robots to be effective partners in human environments, they must autonomously perform challenging manipulation tasks such as retrieving, sorting, assembling, and handing over objects. Recently, vision-language-action (VLA) models have demonstrated strong manipulation performance in structured settings but still struggle to adapt to dynamic human motion and generalize across diverse tasks. Current approaches to improving generalization rely on repeatedly patching policy failures through new human demonstrations — a costly and unsustainable strategy. Moreover, existing methods often overlook the impact of strict safety constraints on the training efficiency of autonomous policies.

## Prior Work

My prior work focuses on enabling AI policies to learn effectively in human environments. Specifically, I developed a benchmark for autonomous human-robot collaboration that exposes policies to the specific challenges of interacting safely with a human partner. Our recent work showcases that diffusion-based policies can learn adaptable skills for human-robot collaboration, such as dynamic handovers, collaborative sorting, or human feeding. Throughout my research on provably safe reinforcement learning, I demonstrated that integrating safety guarantees into RL training can significantly improve performance, increasing the success rate of agents in human environments by 50–80%.

## Research Vision

My future research group will develop theoretical methods to enhance policy performance and generalization in safety-critical, dynamic, and collaborative settings involving human interaction.

Concretely, to achieve a more structured approach for policy generalization, I will develop explainable AI methods to determine which input features cause a model to underperform in out-of-distribution situations. Building on these explanations, I aim to automatically generate training data that reflects diverse human behaviors and leverage transfer from human collaboration data.

To steer data collection toward personalized policies that minimize physical and mental burden in shared tasks, I will build on my previous work in learning-based human-robot collaboration. Finally, I will develop provably safe RL methods that guide policy training toward high performance in safety-critical environments.

## Path to Deployment

These developments will significantly enhance data coverage and enable the initial deployment of policies on robots working alongside humans. I am currently collaborating with the start-up scaledrive.ai on a robot for inspection tasks in construction environments and with the Stanford Robotics Center on a demonstrator for sorting tasks in production lines typical of small and medium enterprises.

In the longer term, large-scale deployment of these systems will create a rapidly growing stream of real-world data, paving the way for truly generalized robot policies. My long-term vision is to deploy autonomous robot fleets in hospitals and geriatric care facilities to reduce the mental and physical workload of human staff and assist with activities of daily living, including hygiene, feeding, dressing, and mobility support.

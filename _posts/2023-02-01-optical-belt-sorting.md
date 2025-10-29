---
title: "Optical Belt Sorting"
categories: 
  - study-projects
values:
    layout: single
    author_profile: true
    read_time: false
    comments: false
    share: false
    related: false
classes: wide
header:
  teaser: "/assets/img/optical_partical_tracking.png"
---
Optical sorters are a game-changer in various industrial sectors like civil engineering, recycling, and agriculture. Unlike other sorters, optical sorters can sort based on visual properties alone, meaning almost any material type can be sorted without damage from water or heat. The standard layout of an optical sorter includes a transport unit (usually a conveyor belt), a line scan camera, and a separation mechanism. The line scan camera detects and classifies the particles, and the separation mechanism then separates the unwanted particles with short bursts of high-pressure air.

![image-right]({{ site.url }}{{ site.baseurl }}/assets/img/optical_belt_sorter.png){: width="430" .align-right }

But what if we told you that this setup can be improved? In our previous research, we replaced the line scan camera with an area scan camera and implemented a predictive tracking approach. By tracking the particles with a Kalman filter, we were able to derive motion information and make separation predictions based on linear motion models. However, we found that this approach had its limitations - manual fine-tuning was required, and it didn't always work for particles with nonlinear motion behavior.

Enter our latest development: a mixture of experts (ME) concept. This innovative solution takes the best of both worlds - it combines the accuracy of neural networks (NNs) and the interpretability of physical motion models. We present two new NN experts for precise particle-specific predictions - a multilayer perceptron (MLP) and a long short-term memory (LSTM) - which we trained specifically for each particle type. However, NNs can lack generalization in new scenarios. So, our ME approach uses a gating network to weigh the predictions of different experts and produce a weighted sum of their predictions. This approach is unique because it combines physical motion models with pre-trained NNs, leading to a high level of accuracy and generalization.

Our ME approach overcomes the limitations of previous methods. It increases sorting accuracy for a given particle type, it combines motion models and NNs to achieve high accuracy, and it leads to high accuracy in new, previously untrained cases. With its combination of high accuracy, interpretability, and validity, our ME approach is the first of its kind and opens up new possibilities for optical sorting technology.
For more information, see our Transactions on Industrial Informatics journal article:
 - Mixture of Experts of Neural Networks and Kalman Filters for Optical Belt Sorting [[IEEExplore](https://ieeexplore.ieee.org/document/9543590)] [[PDF](https://isas.iar.kit.edu/pdf/TII21_Thumm.pdf)]
---
title: "Effective Bibliography Management with Zotero"
categories: 
  - other
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

# Motivation
Throughout my Ph.D. I built a highly flexible, automated bibliography management pipeline.
I was driven by three factors:
 1. I love automating things. I would rather spend 5 hours automating a manual task than spend one hour doing repetitive work.
 2. I'm interested in way too many different research directions, so I needed a way to structure papers of many different fields. My goal: be able to find that one cool paper after 3 years of reading it.
 3. My PI was obsessed with high quality bibliographies in papers and it kind of caught on with me.

I thought having some form of bibliography management was standard, but a short poll revealed that quite a few people don't use a bibliography management tool yet:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/survey.png){: width="700" .align-center }

With my favorite answer being "I use google chrome":

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/chrome.png){: width="900" .align-center }

Therefore, I want to give you an overview of how I structure my bibliography management in `Zotero`.
For each component that I use, I will try to give my reasoning of how it makes my life easier and you can decide for yourself if this component is worthwhile for you. 
All components of my setup are independent of each other, so pick your poison!

Note: I'm working in Linux Ubuntu, but most of these elements should run on Mac or Windows as well.

# Setup Overview
My general setup consists of the following elements:
 - [Zotero](https://www.zotero.org/download/): the core bibliography management software. Here you save and categorize your papers and later export them to a .bib file.
 - [Zotero Connector](https://www.zotero.org/download/connectors): save papers directly from the website to Zotero.
 - [Better BibTex For Zotero](https://retorque.re/zotero-better-bibtex/): unify your citation keys and improve the file export.
 - [ZotMoov](https://github.com/wileyyugioh/zotmoov?tab=readme-ov-file): Automatically organize your pdf files on your computer in the same folder structure as your Zotero library and rename the files.
 - [Bibliography Cleaner](https://gitlab.lrz.de/tum-cps/bibliography-cleaner): Clean your exported .bib file to make your bibliography look cleaner in your paper.
The usage of the entire system is best explained in an example workflow.

# Example Usage of the Entire Setup
## Create a Folder Structure
Let's start by opening `Zotero` and creating a new collection by right-clicking on `My Library` -> `New Collection`. I called it "Example".
Now we can create ourselves a folder structure within that collection. 
For this, I right-click on the new collection, e.g., "Example", and select `New Subcollection`. 

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/create_folder_structure.png){: width="950" .align-center }

Proceed with creating an initial structure for your work.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/select_folder.png){: width="400" .align-center }

## Add Papers to Zotero
If we want to add papers, we first need to make sure we find the correct version.

### Find the Correct Version of the Paper
We start with our typical paper search in google scholar. Let's say, we found the following paper:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/scholar_paper_explain.png){: width="800" .align-center }

This paper was already published at the NeurIPS conference, but google scholar still links to the Arxiv version. 
A common mistake is simply to cite the Arxiv version. This is very frowned upon by the reviewers and might negatively impact your chance of publication!

Therefore, we instead click on `All (some number) Verions` and select the website of the original publisher. This is most often quite easy to figure out, e.g., IEEExplore, Nature, Science, etc. In the case of the big AI conferences, we will look for the openreview link.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/scholar_multiple_versions.png){: width="600" .align-center }

This will bring us to the publisher website, in our example:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/openreview_page.png){: width="800" .align-center }

### Add the Paper to Zotero
There are two alternative ways to add this work to Zotero 1. Manually, and 2. Automatically with `Zotero Connector`.

#### 1. Manually Adding Papers
On the publisher website, search for `Download Citation` or `Bibtex` to download the `reference.bib` file. Also, download the PDF file.
In `Zotero` select the sub-collection you would like to save this paper in. Then, go to `File` -> `Import` and import the downloaded bibtex file. 
You can right-click on the new item and `Add Attachment` -> `File` to add the downloaded PDF.

This process is of course way too manual for me. Let's look at how to automate this.

#### 2. Automatically using Zotero Connector
Open `Zotero` and select the sub-collection you would like to save this paper in, e.g.:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/select_folder.png){: width="400" .align-center }

Now, go to your browser window with the publisher website open and click on the `Zotero Connector` extension. The paper reference and PDF will be automatically downloaded and added to your `Zotero`.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/save_to_zotero.png){: width="400" .align-center }

### Inspect your Paper in Zotero
You can now see all the properties of this reference in the right panel of `Zotero` if you click on this paper.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/paper1.png){: width="950" .align-center }

You can view the PDF by double clicking on the little red PDF symbol in `Zotero`. `Zotero` actually has an amazing PDF viewer with multiple highlight colors and other features built-in. Therefore, I mostly read my papers in here.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/view_pdf_in_zotero.png){: width="950" .align-center }

### Fix Mistakes in Zotero
Sometimes, the downloaded reference is incorrect. 
In this example, a NeurIPS paper (which is a conference) was labelled as a journal article. We can easily correct any wrong entries in the right panel.

Change from journal:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/change_from_journal.png){: width="700" .align-center }

to conference:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/change_to_conference.png){: width="700" .align-center }

## Export your Papers to Bibtex
To cite your papers in Latex, you will need a `.bib` file that includes all your references.
To create this file, right-click on your collection, e.g., `Example`, and select `Export Collection`.
After accepting the default export configurations, you will get a `.bib` file like this:

```
@inproceedings{bonnaire2025why,
  title = {Why Diffusion Models Don't Memorize: The Role of Implicit Dynamical Regularization in Training},
  shorttitle = {Why Diffusion Models Don't Memorize},
  booktitle = {The Thirty-Ninth Annual Conference on Neural Information Processing Systems},
  author = {Bonnaire, Tony and Urfin, Rapha{\"e}l and Biroli, Giulio and Mezard, Marc},
  year = 2025,
  month = oct,
  url = {https://openreview.net/forum?id=BSZqpqgqM0},
  urldate = {2026-03-11},
}

@inproceedings{NEURIPS2022_5e6cec2a,
  title = {Diffusion Models as Plug-and-Play Priors},
  booktitle = {Advances in Neural Information Processing Systems},
  author = {Graikos, Alexandros and Malkin, Nikolay and Jojic, Nebojsa and Samaras, Dimitris},
  year = 2022,
  month = dec,
  volume = {35},
  pages = {14715--14728},
  url = {https://proceedings.neurips.cc/paper_files/paper/2022/hash/5e6cec2a9520708381fe520246018e8b-Abstract-Conference.html},
  urldate = {2026-03-11},
}
```

Note that the automatic citation keys `NEURIPS2022_5e6cec2a` and `bonnaire2025why` do not follow a universal pattern as they are given by the publisher.
To fix this, we will use the [Better BibTex](https://retorque.re/zotero-better-bibtex/) extension for `Zotero`.

### Setting up Better BibTex
 1. Follow the installation instructions on the [Better BibTex Website](https://retorque.re/zotero-better-bibtex/).
 2. Change your desired citation key style by going in `Zotero` in the top bar to `Edit` -> `Settings` -> `Better BibTex` and customize your citation key. I am using `auth.lower + "_" + year + "_" + shorttitle(2, 2)`, which would give me `graikos_2022_DiffusionModels` and `bonnaire_2025_WhyDiffusion` instead of the previous `NEURIPS2022_5e6cec2a` and `bonnaire2025why`.
 3. Export your library again and enjoy your unified citation keys. 

**Note**: some venues add their citation key to `Extras` field of the bibtex. This will override Better BibTex 😡. To fix that, you have to delete the extras field in the right panel of Zotero for these papers.

## Clean up Your Messy Bib File
Let's use the exported bib file, e.g., `bib_manager_example.bib`, in a dummy `.tex` document:
```
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{cite}

\begin{document}

\title{Bibliography Test}
\author{Jakob Thumm}
\maketitle

\section{Introduction}

We cite a couple of papers \cite{bonnaire_2025_WhyDiffusion, graikos_2022_DiffusionModels, gyevnar_2025_AISafety}.

\bibliographystyle{plain}
\bibliography{bib_manager_example}

\end{document}
```

This will result in a good bibliography, but there are a couple of things that can be improved. 

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/unclean_bibliography.png){: width="950" .align-center }

Common points for improvements are:
 - Too much information: 
    - place of the conference
    - names of editors
    - month of publication
    - year stated multiple times
 - Inconsistent conference proceeding titles. Conferences change the name of their proceeding in the bibtex almost yearly. Additionally, the proceeding title often includes unnecessary information like the number of the conference.
 - Zotero removes the capitalization from titles as it is often wrong. We need to re-capitalize common terms like "AI". 

To fix these points, we wrote an automatic [Bibliography Cleaner](https://gitlab.lrz.de/tum-cps/bibliography-cleaner)! 

After installing, we can simply run the cleaner with:
```
python bibliography_cleaner/run.py \
   -in [PATH_TO_FILE]/bib_manager_example.bib -out [PATH_TO_FILE]/bib_manager_example_cleaned.bib\
   -c bibliography_cleaner/bib_configs/default.yml --overwrite\
   --proceedings_abbreviations bibliography_cleaner/bib_configs/proceedings.yml\
   --forbidden_characters bibliography_cleaner/bib_configs/special_tex_characters.yml\
   --special_letters bibliography_cleaner/bib_configs/special_letters.yml\
   --capitalization bibliography_cleaner/bib_configs/capitalization.yml
```

The outcome is a clean and consistent bibliography that all reviewers will love.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/clean_bibliography.png){: width="950" .align-center }

## Find your PDF Files 

After some extensive research, you might want to share PDF files with students or colleagues.
By default, Zotero saves all PDF files in one folder without any structure.
Additionally, the PDFs downloaded from the publisher sites do not follow any naming convention, so you will have to figure out which paper `LGAFI2026_396.pdf` is. 

[ZotMoov](https://github.com/wileyyugioh/zotmoov?tab=readme-ov-file) improves that by automatically recreating the folder structure that you have in Zotero in your file system and renames the papers in a meaningful way.
The outcome is something like this:

![image-center]({{ site.url }}{{ site.baseurl }}/assets/img/bib_manage/pdfs_in_folder.png){: width="950" .align-center }
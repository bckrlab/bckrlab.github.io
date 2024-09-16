---
layout: student_thesis
title: Distributed Parallel Subgroup Discovery
type: Bachelor & Master
description: "How are the most exceptional parts of my dataset characterized?"
thumbnail: /assets/img/theses/population_subgroups.png
importance: 1
category: open
source:
---

> "How are the most exceptional parts of my dataset characterized?"
> 
> Find out how to answer this question efficiently through parallelization in this thesis!

Answering the question "How are the most exceptional parts of my dataset characterized?" is essentially the aim of subgroup discovery. To answer that, subgroup descriptions are generated with increasing detail. On patient data a subgroup may be "age < 30", which refers to all patients which are not 30 years old or older. This may be concretized to "age < 30 AND sex = female" or any other available attribute instead of "sex" and any other available value for that attribute. This step of adding an attribute restriction to a subgroup is called a refinement and it is often applied 100.000 times and upwards in a typical subgroup discovery task. As you might see, one subgroup can result in multiple subgroups which are in turn each refined into even more subgroups down the line. So why not start new threads/processes for each refinement of a subgroup and spread out the search over multiple machines? As simple as it may sound, there are multiple technical challenges to overcome here. For example, many refinement steps can be skipped in practice. To find out which steps can be skipped would require a synchronization procedure between the threads/processes of the subgroup discovery. Tackle this and more challenges and learn about state-of-the art parallelization methods through this thesis!

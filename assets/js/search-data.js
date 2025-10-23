// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "Our team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-showcases",
              title: "Showcases",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/showcases/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/for-students/teaching/";
              },
            },{id: "dropdown-jobs",
              title: "Jobs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/for-students/jobs/";
              },
            },{id: "dropdown-theses",
              title: "Theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/for-students/theses/";
              },
            },{id: "nav-data-science-club",
          title: "Data Science Club",
          description: "University of Rostock",
          section: "Navigation",
          handler: () => {
            window.location.href = "/datascienceclub/";
          },
        },{id: "nav-join-us",
          title: "Join Us!",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join-us/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "jobs-crc-mia-ai-for-understanding-maternal-immune-activation",
          title: 'CRC MIA - AI for Understanding Maternal Immune Activation',
          description: "Postdoc, Deadline: September 14th",
          section: "Jobs",handler: () => {
              window.location.href = "/join-us/jobs/crc-mia/";
            },},{id: "jobs-nexcell-ai-for-optimizing-end-to-end-cell-processing-in-clinical-cell-therapy",
          title: 'NEXCELL - AI for Optimizing End‑To‑End Cell Processing in Clinical Cell Therapy',
          description: "2 Postdoc and 2 PhD positions, Deadline: August 31th",
          section: "Jobs",handler: () => {
              window.location.href = "/join-us/jobs/nexcell/";
            },},{id: "jobs-your-own-idea",
          title: 'Your own idea',
          description: "Come talk to us!",
          section: "Jobs",handler: () => {
              window.location.href = "/join-us/jobs/your-project/";
            },},{id: "news-martin-becker-starts-as-jun-professor-at-the-university-of-rostock-germany-heading-the-chair-of-intelligent-data-analytics",
          title: '🏁 Martin Becker starts as Jun.-Professor at the University of Rostock, Germany, heading...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-up-tp-four-phd-students-or-postdocs-and-at-least-two-student-assistants-to-work-on-amazing-projects",
          title: '🧑‍🤝‍🧑 Come join us! We are looking for up tp four PhD students...',
          description: "",
          section: "News",},{id: "news-️-session-at-the-summer-school-artificial-intelligence-in-medicine-on-leveraging-background-knowledge-for-understanding-and-modeling-complex-systems",
          title: '🗣️ Session at the Summer School Artificial Intelligence in Medicine on Leveraging background...',
          description: "",
          section: "News",},{id: "news-️-talk-at-the-ai-for-life-workshop-in-greifswald-on-leveraging-background-knowledge-for-understanding-and-modeling-complex-systems-and-the-themis-project",
          title: '🗣️ Talk at the AI for Life Workshop in Greifswald on Leveraging background...',
          description: "",
          section: "News",},{id: "news-️-talk-at-the-workshop-for-healthtechmedicine-medizin-trifft-technik-on-maschinelles-lernen-zum-verstehen-und-modellieren-komplexer-biomedizinischer-systeme-and-the-themis-project",
          title: '🗣️ Talk at the Workshop for HealthTechMedicine - Medizin trifft Technik on Maschinelles...',
          description: "",
          section: "News",},{id: "news-we-just-published-early-prediction-and-longitudinal-modeling-of-preeclampsia-from-multiomics-in-patterns-together-with-ivana-maric-and-nima-aghaeepour",
          title: '📚 We just published Early prediction and longitudinal modeling of preeclampsia from multiomics...',
          description: "",
          section: "News",},{id: "news-we-just-published-our-paper-in-silico-generation-of-high-dimensional-immune-response-data-in-patients-using-a-deep-neural-network-in-cytometry-part-a-together-with-ramin-fallahzadeh-and-nima-aghaeepour",
          title: '📚 We just published our paper In‐Silico Generation of High‐Dimensional Immune Response Data...',
          description: "",
          section: "News",},{id: "news-ever-wondered-about-the-connection-between-stress-pregnancy-and-the-immune-system-in-our-new-paper-we-work-on-revealing-the-impact-of-lifestyle-stressors-on-the-risk-of-adverse-pregnancy-outcomes-with-multitask-machine-learning-in-frontiers-in-pediatrics-together-with-jennifer-dai-alan-l-chang-and-nima-aghaeepour",
          title: '📚 Ever wondered about the connection between stress, pregnancy, and the immune system?...',
          description: "",
          section: "News",},{id: "news-published-our-book-chapter-on-machine-learning-techniques-for-surgeons-together-with-jeff-choi-and-nima-aghaeepour",
          title: '📚 Published our book chapter on machine learning techniques for surgeons together with...',
          description: "",
          section: "News",},{id: "news-️-invited-talk-at-the-university-of-passau-on-leveraging-background-knowledge-for-understanding-and-modeling-complex-systems-in-the-context-of-the-brown-bag-seminar-on-recent-developments-in-data-science",
          title: '🗣️ Invited talk at the University of Passau on Leveraging Background Knowledge for...',
          description: "",
          section: "News",},{id: "news-️-invited-talk-at-the-comprehensive-cancer-center-mecklenburg-vorpommern-on-machine-learning-for-understanding-and-modeling-complex-biomedical-systems",
          title: '🗣️ Invited talk at the Comprehensive Cancer Center, Mecklenburg-Vorpommern on Machine Learning for...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-up-tp-four-phd-students-and-or-postdocs-and-at-least-two-student-assistants-to-work-on-amazing-projects",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for up tp four PhD students...',
          description: "",
          section: "News",},{id: "news-need-to-build-large-correlation-networks-but-it-s-taking-too-much-time-memory-read-our-new-paper-on-large-scale-correlation-network-construction-for-unraveling-the-coordination-of-complex-biological-systems-in-nature-computational-science-together-with-camilo-espinosa-huda-nassar-and-nima-aghaeepour",
          title: '📚 Need to build large correlation networks but it’s taking too much time/memory?...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-phd-students-work-on-amazing-projects",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for PhD students work on amazing...',
          description: "",
          section: "News",},{id: "news-read-our-new-paper-on-multiomic-signals-associated-with-maternal-epidemiological-factors-contributing-to-preterm-birth-in-low-and-middle-income-countries-in-science-advances-leady-by-camilo-espinosa-and-nima-aghaeepour",
          title: '📚 Read our new paper on Multiomic signals associated with maternal epidemiological factors...',
          description: "",
          section: "News",},{id: "news-️-invited-talk-at-the-eu-funded-digital-innovation-center-on-chatgpt-llms-and-a-breeze-of-ai-in-the-context-of-the-snack-it-seminar-series",
          title: '🗣️ Invited talk at the EU funded 🇪🇺 Digital Innovation Center on ChatGPT,...',
          description: "",
          section: "News",},{id: "news-checkout-our-newest-version-of-pysubgroup-a-python-package-that-enables-subgroup-discovery-and-exceptional-model-mining-in-python",
          title: '💻 Checkout our newest version of pysubgroup, a Python package that enables subgroup...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-phd-students-work-on-amazing-projects-the-current-application-deadline-is-august-31st-2023",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for PhD students work on amazing...',
          description: "",
          section: "News",},{id: "news-bjarne-hiller-joined-our-lab-as-a-phd-student-to-work-as-part-of-our-research-group-themis-welcome-bjarne-off-to-some-fun-research",
          title: '🙌 Bjarne Hiller joined our lab as a PhD student to work as...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-a-postdoc-or-phd-students-work-on-amazing-projects-and-developing-their-own-ideas-the-current-application-deadline-is-october-31th-2023-note-that-due-to-state-regulation-this-particular-position-requires-you-to-be-proficient-at-speaking-german",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for a Postdoc or PhD students...',
          description: "",
          section: "News",},{id: "news-amin-mirzaei-joined-our-lab-all-the-way-from-iran-as-a-phd-student-to-work-as-part-of-our-research-group-themis-welcome-amin-research-here-we-come",
          title: '🙌 Amin Mirzaei joined our lab all the way from Iran 🇮🇷 as...',
          description: "",
          section: "News",},{id: "news-️-invited-talk-at-the-multipark-retreat-2023-in-lund-sweden-on-machine-learning-for-modeling-and-understanding-complex-biomedical-systems-in-the-context-of-the-strategic-research-area-sra-multidisciplinary-research-focused-on-parkinson-s-disease",
          title: '🗣️ Invited talk at the MultiPark Retreat 2023 in Lund, Sweden 🇸🇪 on...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-just-hired-our-third-group-member-and-we-are-looking-for-two-more-we-have-two-open-postdoc-or-phd-positions-to-work-on-amazing-projects-and-develop-their-own-ideas-the-current-application-deadline-is-january-31st-2023",
          title: '🧑‍🤝‍🧑: Come join us! We just hired our third group member and we...',
          description: "",
          section: "News",},{id: "news-do-you-want-to-check-whether-you-hypothesis-about-how-researchers-collaborate-more-for-european-or-us-researchers-check-out-our-new-paper-on-comparing-hypotheses-across-behavioral-networks-together-with-tobias-koopmann-florian-lemmerich-and-andreas-hotho",
          title: '📚 Do you want to check whether you hypothesis about how researchers collaborate...',
          description: "",
          section: "News",},{id: "news-a-warm-welcome-to-our-new-phd-student-kutalmış-coşkun-from-turkey",
          title: 'A warm welcome to our new PhD student Kutalmış Coşkun from Turkey!',
          description: "",
          section: "News",},{id: "news-are-you-looking-for-an-exciting-ph-d-position-at-the-intersection-of-data-science-and-leadership-development-at-large-organizations-then-work-with-the-founder-team-of-jenewein-on-novel-impactful-data-science-methods-while-getting-your-ph-d-as-an-external-student-at-my-lab-for-intelligent-data-analytics-we-are-looking-forward-to-your-application",
          title: 'Are you looking for an exciting Ph.D. position at the intersection of data...',
          description: "",
          section: "News",},{id: "news-have-a-look-at-our-book-chapter-on-computational-approaches-for-connecting-maternal-stress-to-preterm-birth-in-clinics-in-perinatology-together-with-ina-stelzer-yuqi-tan-and-kristin-thiele",
          title: '📚 Have a look at our book chapter on Computational Approaches for Connecting...',
          description: "",
          section: "News",},{id: "news-after-finishing-his-master-s-thesis-on-subgroup-discovery-tom-siegl-is-joining-our-continuously-growing-crew-of-phd-students-welcome-to-the-team",
          title: 'After finishing his master’s thesis on subgroup discovery, Tom Siegl is joining our...',
          description: "",
          section: "News",},{id: "news-is-it-possible-to-perform-end-to-end-computational-analysis-on-multiplexed-images-with-minimal-programming-experience-yes-it-is-check-out-our-preprint-on-spacec-a-streamlined-interactive-python-workflow-for-multiplexed-image-processing-and-analysis-developed-by-yuqi-tan-tim-kempchen-and-team-and-mentored-garry-nolan",
          title: '📚 Is it possible to perform end-to-end computational analysis on multiplexed images with...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-a-postdoc-to-work-on-themis-and-develop-their-own-research-agenda-the-current-application-deadline-is-september-17-2024",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for a postdoc to work on...',
          description: "",
          section: "News",},{id: "news-kdd-24-excellence-in-reviewing-award-we-are-honored-to-have-just-received-a-certificate-for-excellence-in-reviewing-at-the-kdd-24",
          title: '🏆 KDD’24 Excellence in Reviewing Award! We are honored to have just received...',
          description: "",
          section: "News",},{id: "news-kutalmış-coşkun-proposes-evolving-markov-chains-emc-for-unsupervised-mode-discovery-and-recognition-from-data-streams-make-sure-to-checkout-the-showcase-page-or-the-pre-print-on-arxiv",
          title: '🔗 Kutalmış Coşkun proposes Evolving Markov Chains (EMC) for Unsupervised Mode Discovery and...',
          description: "",
          section: "News",},{id: "news-️-bjarne-hiller-gave-a-talk-on-evaluating-the-fidelity-of-explanations-for-convolutional-neural-networks-in-alzheimer-s-disease-detection-at-the-german-conference-on-medical-image-computing-in-regensburg",
          title: '🗣️ Bjarne Hiller gave a talk on Evaluating the Fidelity of Explanations for...',
          description: "",
          section: "News",},{id: "news-we-are-joining-hessian-ai-and-moving-our-lab-to-marburg-university-thank-you-to-the-university-of-rostock-and-all-the-great-people-there-for-an-amazing-time-and-their-unwavering-support-we-will-stay-in-touch",
          title: '🏁 We are joining Hessian.AI and moving our lab to Marburg University! Thank...',
          description: "",
          section: "News",},{id: "news-want-to-find-out-whether-your-model-has-a-performance-gap-on-subgroups-you-do-not-know-of-check-out-our-preprint-on-subroc-auc-based-discovery-of-exceptional-subgroup-performance-for-binary-classifiers",
          title: '📚 Want to find out whether your model has a performance gap on...',
          description: "",
          section: "News",},{id: "news-ai-for-the-molecular-mapping-of-alzheimer-s-disease-international-jpnd-project-funded-we-are-excited-to-start-our-new-international-project-sparc-ad-together-with-oxana-klementieva-lund-university-sweden-darcy-wagner-mcgill-university-canada-and-aleksandra-szczepankiewicz-poznan-university-poland",
          title: '🏁 AI for the Molecular Mapping of Alzheimer’s Disease: International JPND Project Funded!...',
          description: "",
          section: "News",},{id: "news-does-the-incorporation-of-background-knowledge-always-improve-the-performance-of-graph-neural-networks-learn-more-in-informed-but-not-always-improved-challenging-the-benefit-of-background-knowledge-in-gnns-our-submission-to-biokdd-2025",
          title: '📚 Does the incorporation of Background Knowledge always improve the performance of Graph...',
          description: "",
          section: "News",},{id: "news-️-presenting-at-biokdd-at-kdd-2025-today-we-are-reporting-on-the-challenges-of-integrating-background-knowledge-in-gnns-based-on-out-paper-informed-but-not-always-improved-challenging-the-benefit-of-background-knowledge-in-gnns",
          title: '🗣️ Presenting at BioKDD at KDD 2025 today! We are reporting on the...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-postdocs-and-phd-students-work-on-the-nexcell-project-on-ai-for-personalized-cell-and-gene-therapy-the-application-deadline-is-august-31st-2025",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for Postdocs and PhD students work...',
          description: "",
          section: "News",},{id: "news-come-join-us-we-are-looking-for-a-postdoc-senior-phd-student-to-work-in-the-context-of-the-crc-mia-on-ai-for-understanding-maternal-immune-activation-during-pregnancy-the-application-deadline-is-september-14h-2025",
          title: '🧑‍🤝‍🧑: Come join us! We are looking for a Postdoc (senior PhD student)...',
          description: "",
          section: "News",},{id: "news-launch-of-the-future-research-alliance-nexcell-we-are-excited-to-pioneer-ai-digital-twins-for-next-gen-cell-and-gene-therapy-in-a-large-scale-collaborative-project-together-with-miltenyi-biotec-rowemed-ag-and-researcher-from-rostock-university-haiml-umr-ag-junghans-additional-information-rostock-university-news-press-release-mv",
          title: '🏁 Launch of the Future Research Alliance NEXCELL: We are excited to pioneer...',
          description: "",
          section: "News",},{id: "people-ahmed-alkishki",
          title: 'Ahmed Alkishki',
          description: "Student assistant",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/ahmed-alkishki/";
            },},{id: "people-ali-tarakzi",
          title: 'Ali Tarakzi',
          description: "Master student",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/ali-tarakzai/";
            },},{id: "people-brutenis-gliwa",
          title: 'Brutenis Gliwa',
          description: "Master student, Data Science Club organizer",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/brutenis-gliwa/";
            },},{id: "people-emil-michels",
          title: 'Emil Michels',
          description: "Master student",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/emil-michels/";
            },},{id: "people-harshal-talsania",
          title: 'Harshal Talsania',
          description: "Master student",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/harshal-talsania/";
            },},{id: "people-hendrik-tackenberg",
          title: 'Hendrik Tackenberg',
          description: "Student assistant",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/hendrik-tackenberg/";
            },},{id: "people-julia-koch",
          title: 'Julia Koch',
          description: "Master student, research intern",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/julia-koch/";
            },},{id: "people-tom-krüger",
          title: 'Tom Krüger',
          description: "Master student",
          section: "People",handler: () => {
              window.location.href = "/people/alumni/tom-krueger/";
            },},{id: "people-konstantin-frunzek",
          title: 'Konstantin Frunzek',
          description: "Student assistant",
          section: "People",handler: () => {
              window.location.href = "/people/students/konstantin-frunzek/";
            },},{id: "people-amin-mirzaei",
          title: 'Amin Mirzaei',
          description: "Research assistant and PhD student",
          section: "People",handler: () => {
              window.location.href = "/people/team/amin-mirzaei/";
            },},{id: "people-bjarne-hiller",
          title: 'Bjarne Hiller',
          description: "Research assistant and PhD student, Data Science Club organizer",
          section: "People",handler: () => {
              window.location.href = "/people/team/bjarne-hiller/";
            },},{id: "people-julia-prahl",
          title: 'Julia Prahl',
          description: "Admin",
          section: "People",handler: () => {
              window.location.href = "/people/team/julia-prahl/";
            },},{id: "people-kutalmış-coşkun",
          title: 'Kutalmış Coşkun',
          description: "Research assistant and PhD student",
          section: "People",handler: () => {
              window.location.href = "/people/team/kutalmis-coskun/";
            },},{id: "people-martin-becker",
          title: 'Martin Becker',
          description: "Professor, PI",
          section: "People",handler: () => {
              window.location.href = "/people/team/martin-becker/";
            },},{id: "people-nadja-schlungbaum",
          title: 'Nadja Schlungbaum',
          description: "Systems Engineer",
          section: "People",handler: () => {
              window.location.href = "/people/team/nadescha-schlungbaum/";
            },},{id: "people-peter-eschholz",
          title: 'Peter Eschholz',
          description: "System Engineer",
          section: "People",handler: () => {
              window.location.href = "/people/team/peter-eschholz/";
            },},{id: "people-tom-siegl",
          title: 'Tom Siegl',
          description: "Research assistant and PhD student",
          section: "People",handler: () => {
              window.location.href = "/people/team/tom-siegl/";
            },},{id: "projects-deepcell",
          title: 'DeepCell',
          description: "Geometric Deep Learning for Single Cell Analysis for CyTOF data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022_deepcell/";
            },},{id: "projects-themis",
          title: 'THEMIS',
          description: "Leveraging Background Knowledge for Understanding and Modeling Complex Systems (BMBF Junior Research Group)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022_themis/";
            },},{id: "projects-multi-omics-fingerprint",
          title: 'Multi-Omics Fingerprint',
          description: "Latent-Representations of Multi-Omics Data to Derive a Biological Fingerprint",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_fingerprint/";
            },},{id: "projects-thrombosis-in-cancer-patients",
          title: 'Thrombosis in Cancer Patients',
          description: "Machine Learning Based Identification of Immune-Related Biomarkers for Thrombosis Risk Assessment in Cancer Patients",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_push/";
            },},{id: "projects-vibe",
          title: 'ViBe',
          description: "Behavior Monitoring in Virtual Reality for Profiling Cognitive Decline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_vibe/";
            },},{id: "projects-deepcell",
          title: 'DeepCell',
          description: "A VR Knowledge Board powered by AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023_vr-knowledge-board/";
            },},{id: "projects-crc-mia",
          title: 'CRC MIA',
          description: "AI for Understanding Maternal Immune Activation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_crc-mia/";
            },},{id: "projects-nexcell",
          title: 'NEXCELL',
          description: "AI for Tracking and Optimizing End‑To‑End Cell Processing for Clinical Cell Therapy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_nexcell/";
            },},{id: "projects-jpnd-sparc-ad",
          title: 'JPND: SPARC-AD',
          description: "Spectroscopic Profiling for Alzheimer&#39;s Recognition and Characterization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_sparc-ad/";
            },},{id: "showcases-evolving-markov-chains-emcs",
          title: 'Evolving Markov Chains (EMCs)',
          description: "Evolving Markov Chains",
          section: "Showcases",handler: () => {
              window.location.href = "/p/emc/";
            },},{id: "showcases-evaluating-the-fidelity-of-explanations-for-convolutional-neural-networks-in-alzheimer-39-s-disease-detection",
          title: 'Evaluating the Fidelity of Explanations for Convolutional Neural Networks in Alzheimer&amp;#39;s Disease Detection...',
          description: "XAI for Alzheimer&#39;s Disease detection",
          section: "Showcases",handler: () => {
              window.location.href = "/p/ad-fidelity/";
            },},{id: "showcases-cytodatagen",
          title: 'cytodatagen',
          description: "A Python package for generating synthetic flow cytometry data",
          section: "Showcases",handler: () => {
              window.location.href = "/p/cytodatagen/";
            },},{id: "showcases-kill-gnn",
          title: 'Kill-GNN',
          description: "Informed, but Not Always Improved: Challenging the Benefit of Background Knowledge in GNNs",
          section: "Showcases",handler: () => {
              window.location.href = "/p/kill-gnn/";
            },},{id: "showcases-subroc-auc-based-discovery-of-exceptional-subgroup-performance-for-binary-classifiers",
          title: 'SubROC: AUC-Based Discovery of Exceptional Subgroup Performance for Binary Classifiers',
          description: "subgroup-level model performance evaluation",
          section: "Showcases",handler: () => {
              window.location.href = "/p/subroc/";
            },},{id: "student_jobs-vibe-behavior-monitoring-in-virtual-reality-for-profiling-cognitive-decline",
          title: 'ViBE: Behavior monitoring in virtual reality for profiling cognitive decline',
          description: "Develop a VR framework for capturing sensor data using a Meta Quest Pro and soon an Apple Vision Pro.",
          section: "Student_jobs",handler: () => {
              window.location.href = "/for-students/jobs/2023_vibe/";
            },},{id: "student_jobs-sc-gene-expression-develop-ml-pipeline",
          title: 'SC gene expression: Develop ML pipeline',
          description: "preprocessing the single-cell gene expression data and applying machine learning methods to it.",
          section: "Student_jobs",handler: () => {
              window.location.href = "/for-students/jobs/2024_single_cell/";
            },},{id: "student_jobs-your-own-idea",
          title: 'Your own idea',
          description: "Come talk to us!",
          section: "Student_jobs",handler: () => {
              window.location.href = "/for-students/jobs/2042_other/";
            },},{id: "student_theses-deepcell",
          title: 'DeepCell',
          description: "Geometric deep learning for single cell analysis for CyTOF data",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2022_deepcell/";
            },},{id: "student_theses-explainable-transformers",
          title: 'eXplAInable Transformers',
          description: "Investigate how attention maps can be interpreted",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2023_explainable-transformers/";
            },},{id: "student_theses-background-knowledge-in-llms",
          title: 'Background Knowledge in LLMs',
          description: "Extract knowledge from Large Language Models and utilize it for other ML tasks",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2023_llm-bgk/";
            },},{id: "student_theses-multiomics-autoencoder",
          title: 'Multiomics Autoencoder',
          description: "Create a fingerprint of multimodal, highdimensional medical data",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2023_multiomics-autoencoder/";
            },},{id: "student_theses-subgroup-discovery-in-medical-data",
          title: 'Subgroup Discovery in Medical Data',
          description: "Find interesting subpopulations in medical data and extract new insights for diagnosis and treatment",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2023_subgroup-discovery/";
            },},{id: "student_theses-virtual-library",
          title: 'Virtual Library',
          description: "Virtual Reality-based citation management via spatial mnemonics",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2023_vr-library/";
            },},{id: "student_theses-distributed-parallel-subgroup-discovery",
          title: 'Distributed Parallel Subgroup Discovery',
          description: "How are the most exceptional parts of my dataset characterized?",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2024_parallel_subgroup_discovery/";
            },},{id: "student_theses-your-own-idea",
          title: 'Your own idea',
          description: "Come talk to us!",
          section: "Student_theses",handler: () => {
              window.location.href = "/for-students/theses/2042_other/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/mgbckr.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%74%69%6E.%62%65%63%6B%65%72@%75%6E%69-%6D%61%72%62%75%72%67.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bckrlab", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4296-3481", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=n99pDOAAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/mgbckr", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

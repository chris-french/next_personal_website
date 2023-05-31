const resumeData = {
  name: 'Christopher F. French, Ph.D.',
  summary:
    'An accomplished Data Engineer with specialized expertise in Cloud Computing (AWS) and Big Data technologies (Spark, Glue). I bring a blend of back-end and front-end development skills, primarily utilizing Python and Node.',
  expertise: [
    'Data Engineering',
    'Full Stack Developer',
    'Cloud & Automation',
    'Machine Learning',
    'Technical Writing',
  ],
  projects:
    'In addition to my professional pursuits, I engage in game development using Unreal Engine 5 and Godot. One recent project is a small game engine written in C++ for the Vulkan API.',
  languages: ['Python', 'C', 'C++', 'Node/TypeScript', '.NET/C#'],
  technologies: [
    'Cloud (AWS)',
    'ETL (Airflow, Pandas/NumPy, Glue/Spark)',
    'Docker/Linux',
    'SQL',
    'RESTful Microservices and APIs',
    'Markdown, Git, CMake/SCons, Unreal Engine 5, Visual Studio, OpenAPI',
    'Front-end development (Static site generation, React, JS/HTML/CSS)',
  ],
  experience: [
    {
      position: 'Machine Learning Engineer I',
      company: 'Spring Venture Group',
      location: 'Kansas City, MO',
      date: 'Feb 2022 - Mar 2023',
      description:
        'Leveraged AWS for the development of microservices with FastAPI/Flask. Utilized AWS services including Batch, ECS, Airflow, RDS (MySQL), Redis, Redshift (Postgres), Lambdas, and AWS CDK to create analytics pipelines and lead ingestion. Instrumented and logged data using Splunk and Datadog; Worked collaboratively with data scientists to integrate business logic with ML models.',
    },
    {
      position: 'Data Engineer II',
      company: 'Spring Venture Group',
      location: 'Kansas City, MO',
      date: 'Sep 2020 - Feb 2022',
      description:
        'Crafted ETL jobs in Python using AWS Batch, PySpark, and Airflow. Authored and optimized SQL queries, interfacing with AWS RDS and Redshift databases. Programmed AWS Glue jobs and created Glue tables for querying in Athena.',
    },
    {
      position: 'GIS Analyst',
      company: 'AmeriCorps Vista',
      location: 'Kansas City, KS',
      date: 'May 2020 - Sep 2020',
      description:
        'Authored GIS ETL tasks in Python using ArcGIS Pro and geopandas/PostGIS.',
    },
    {
      position: 'Product Engineer, Technical Writer',
      company: 'Esri',
      location: 'Portland, OR',
      date: 'Jan 2019 - Jan 2020',
      description:
        'Planned and wrote developer documentation for a new REST API-based PaaS. Developed documentation automation tools in Node, wrote developer guides and tutorials.',
    },
    {
      position: 'Technical Writer, Programmer',
      company: 'Microsoft (via Pactera)',
      location: 'Bellevue, WA',
      date: 'Jun 2018 - Dec 2018',
      description:
        'Migrated documentation from MSDN to Microsoft Docs using Markdown and OpenAPI specs. Authored code samples in C# and HTML/JS, maintained the Bing Maps .NET SDK Toolkit.',
    },
    {
      position: 'Data Analyst and Programmer',
      company: 'Pactera',
      location: 'Redmond, WA',
      date: 'Mar 2017 - Dec 2018',
      description:
        'Developed analytics, billing, and judge quality control tools in Python and .NET (C#/WPF).',
    },
    {
      position: 'Tutor',
      company: 'Huntington Learning Center',
      location: 'Bellevue, WA',
      date: 'Apr 2017 - Nov 2017',
      description:
        'Tutored students for the ACT and SAT, as well as AP Computer Science and Calculus.',
    },
    {
      position: 'Contributing Editor',
      company: 'Gumstix, Inc.',
      location: 'Vancouver, BC',
      date: 'Jan 2016 - Aug 2016',
      description:
        'Authored content using WordPress, JS, Bootstrap, and HTML/CSS.',
    },
  ],
  education: [
    {
      degree: 'PhD, Philosophy',
      institution: 'University of British Columbia',
      date: '2008 - 2015',
      location: 'Vancouver, British Columbia',
      notes:
        'Dissertation on the foundations and history of science, especially Inductive Logic and Bayesian Decision Theory.',
    },
    {
      degree: 'B.A., Philosophy (Minor: Computer Science)',
      institution: 'Kansas State University',
      date: '2003 - 2008',
      notes: '3.5 GPA',
      location: 'Manhattan, Kansas',
    },
    {
      institution: 'Derby High School',
      date: '1999 - 2003',
      location: 'Derby, Kansas',
    },
  ],
};

module.exports = resumeData;

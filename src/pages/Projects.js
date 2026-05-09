function Projects() {

  const projects = [

    {
      number: "01",
      title: "Flood Prediction using TFT",
      desc:
        "Built a hybrid CNN + Temporal Fusion Transformer model using satellite imagery and real-time weather data to predict flood risks dynamically with map visualization.",
      tags: [
        "Python",
        "CNN",
        "TFT",
        "Flask",
        "Leaflet.js",
        "Deep Learning"
      ]
    },

    {
      number: "02",
      title: "Water Quality Detection",
      desc:
        "Developed an AI/ML system to predict water drinkability using chemical parameters and Random Forest classification with interactive visualization dashboards.",
      tags: [
        "Machine Learning",
        "Random Forest",
        "Flask",
        "Plotly",
        "Matplotlib"
      ]
    },

    {
      number: "03",
      title: "Human Activity Recognition",
      desc:
        "Designed a CNN-based deep learning model to classify activities such as Sitting, Walking, Clapping, and Standing using video frame extraction techniques.",
      tags: [
        "CNN",
        "Deep Learning",
        "OpenCV",
        "Python",
        "Computer Vision"
      ]
    },

    {
      number: "04",
      title: "Online Dairy Service",
      desc:
        "Created a Django-based dairy ordering platform with authentication, inventory management, order processing, and role-based admin dashboards.",
      tags: [
        "Django",
        "Python",
        "Authentication",
        "SQL",
        "Web Application"
      ]
    }

  ];

  return (

    <section id="projects">

      <div className="section-label">
        作品 ・ PROJECTS
      </div>

      <h2 className="section-title">
        Featured Work
      </h2>

      <div className="section-line"></div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-ai">
              AI
            </div>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-title">
              {project.title}
            </div>

            <div className="project-desc">
              {project.desc}
            </div>

            <div className="project-tags">

              {project.tags.map((tag, i) => (

                <span key={i}>
                  {tag}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
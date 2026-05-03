export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
          <span className="font-semibold">Depayan Debnath</span>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20">

        {/* IMAGE */}
        <div className="w-72 h-72 overflow-hidden border-4 border-gray-700">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Depayan Debnath</h1>

          <h2 className="mt-4 text-lg text-gray-400">
            Full Stack Developer | Real-time Systems | ML Enthusiast
          </h2>

          <p className="mt-4 text-gray-400">
            I build scalable web applications using Spring Boot, Next.js and AWS,
            with experience in real-time systems and machine learning solutions.
          </p>

          {/* ROUND BUTTONS */}
          <div className="mt-10 flex gap-6 flex-wrap">

            <a
              href="#projects"
              className="w-24 h-24 flex items-center justify-center rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="w-24 h-24 flex items-center justify-center rounded-full bg-teal-400 text-black font-semibold hover:scale-105 transition"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 flex items-center justify-center rounded-full bg-green-400 text-black font-semibold hover:scale-105 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS (YOUR EXACT STRUCTURE) */}
      <section id="projects" className="px-10 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="space-y-10">

          {/* ATS */}
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-bold">
              ATS Resume Evaluation System
            </h3>

            <p className="mt-2 text-gray-400">
              Developed a full-stack ATS-based resume evaluation platform using Next.js and Python,
              automating candidate screening via keyword extraction and relevance scoring.
            </p>

            <p className="mt-2 text-gray-400">
              Engineered backend services using Next.js API routes and implemented resume parsing logic
              for structured data analysis.
            </p>

            <p className="mt-2 text-gray-400">
              Deployed scalable application on AWS cloud infrastructure, ensuring high availability and performance.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Next.js, Node.js, Python, MongoDB, AWS
            </p>

            <div className="mt-2 flex gap-4">
              <a href="https://ats-next-nine.vercel.app" className="text-blue-400">
                Live
              </a>
              <a href="https://github.com/Depayan2003/ATS-Next" className="text-green-400">
                GitHub
              </a>
            </div>
          </div>

          {/* XSOCIAL */}
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-bold">
              XSocial – Real-Time Chat Application
            </h3>

            <p className="mt-2 text-gray-400">
              Built a real-time chat application using Spring Boot and WebSocket (STOMP),
              enabling low-latency bidirectional communication.
            </p>

            <p className="mt-2 text-gray-400">
              Designed and optimized MySQL database schema for efficient user, message,
              and conversation management.
            </p>

            <p className="mt-2 text-gray-400">
              Deployed backend services on AWS EC2 and configured AWS RDS for scalable data storage.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Spring Boot, React.js, WebSocket, MySQL, AWS
            </p>

            <div className="mt-2 flex gap-4">
              <a href="https://xsocial-frontend.vercel.app" className="text-blue-400">
                Live
              </a>
              <a href="https://github.com/Depayan2003/XSocial-backend" className="text-green-400">
                GitHub
              </a>
            </div>
          </div>

          {/* MALARIA */}
          {/* <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-bold">
              Malaria Prediction System
            </h3>

            <p className="mt-2 text-gray-400">
              Developed a Convolutional Neural Network (CNN) using TensorFlow for malaria cell image classification.
            </p>

            <p className="mt-2 text-gray-400">
              Performed image preprocessing, normalization, and dataset augmentation.
            </p>

            <p className="mt-2 text-gray-400">
              Built a Streamlit-based web application for real-time image prediction.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Python, TensorFlow, CNN, Streamlit
            </p>

            <div className="mt-2">
              <a href="https://github.com/Depayan2003" className="text-green-400">
                GitHub
              </a>
            </div>
          </div> */}

          {/* PRICE */}
          {/* <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-bold">
              Car & Laptop Price Prediction
            </h3>

            <p className="mt-2 text-gray-400">
              Developed regression models using TensorFlow neural networks and classical ML approaches.
            </p>

            <p className="mt-2 text-gray-400">
              Performed hyperparameter tuning and loss function optimization.
            </p>

            <p className="mt-2 text-gray-400">
              Built a Streamlit web application for interactive prediction and deployed on AWS.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Python, TensorFlow, Scikit-learn, Streamlit, AWS
            </p>

            <div className="mt-2">
              <a href="https://github.com/Depayan2003" className="text-green-400">
                GitHub
              </a>
            </div>
          </div> */}

          {/* IPL */}
          {/* <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-bold">
              IPL Performance Prediction Model
            </h3>

            <p className="mt-2 text-gray-400">
              Built machine learning models to predict player performance and economy metrics
              using historical IPL data.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Python, XGBoost, Pandas, Scikit-learn
            </p>

            <div className="mt-2">
              <a href="https://github.com/Depayan2003" className="text-green-400">
                GitHub
              </a>
            </div>
          </div> */}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-12 border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-400">Email: debnathdepayan0@gmail.com</p>
        <p className="text-gray-400">GitHub: github.com/Depayan2003</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/depayan-debnath</p>
      </section>

    </main>
  );
}
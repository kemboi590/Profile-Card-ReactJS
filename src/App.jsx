import "./App.css";

import ProfileCard from "./components/Profile/ProfileCard";
import PlaceHolder from "./components/placeHolder/PlaceHolder";

function App() {
  return (
    <>
      <h2 className="title"> Profiles</h2>
      <ProfileCard
        name="John Doe"
        age="25"
        bio="I am a web developer with 5 years of experience. I specialize in front-end development using React and have worked on various projects, including e-commerce websites and interactive web applications. I am passionate about creating user-friendly and visually appealing interfaces. In my free time, I enjoy exploring new technologies and contributing to open-source projects."
      />

      {/* 5 more profile cards with other careers like cloud computing, AI etc */}
      <ProfileCard
        name="Jane Doe"
        age="30"
        bio="I am a cloud computing specialist with 8 years of experience. I have worked on various cloud platforms, including AWS, Azure, and Google Cloud. I specialize in designing and implementing scalable and secure cloud solutions for businesses. I am passionate about helping organizations leverage cloud technologies to drive innovation and growth."
      />

      <ProfileCard
        name="Alice Smith"
        age="28"
        bio="I am a data scientist with 6 years of experience. I have expertise in machine learning, data analysis, and statistical modeling. I have worked on projects in various industries, including healthcare, finance, and e-commerce. I am passionate about using data to drive business decisions and solve complex problems."
      />

      <ProfileCard
        name="Bob Johnson"
        age="35"
        bio="I am a cybersecurity expert with 10 years of experience. I specialize in network security, threat detection, and incident response. I have worked with organizations of all sizes to secure their systems and data from cyber threats. I am passionate about staying ahead of emerging threats and helping businesses protect their assets."
      />

      <ProfileCard
        name="Sarah Brown"
        age="32"
        bio="I am an artificial intelligence researcher with 7 years of experience. I have expertise in machine learning, natural language processing, and computer vision. I have worked on cutting-edge AI projects, including autonomous vehicles and chatbots. I am passionate about pushing the boundaries of AI technology and creating intelligent systems that can learn and adapt."
      />
    </>
  );
}

export default App;

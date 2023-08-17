import "./App.css";
import { useEffect } from "react";
import faceIO from '@faceio/fiojs';

function App() {

  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioad5e3");
}, []);

const handleSignIn = async () => {
  try {
    let response = await faceio.enroll({
      locale: "auto",
      payload: {
        
      },
    });

    console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
  } catch (error) {
    console.log(error);
  }
};

const handleLogIn = async () => {
  try {
    let response = await faceio.authenticate({
      locale: "auto",
    });

    console.log(` Unique Facial ID: ${response.facialId}
        PayLoad: ${response.payload}
        `);
        window.location.replace('https://sm103sc.dev.local/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1')
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section>
  );
}

export default App;
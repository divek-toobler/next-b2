import axios from "axios";


const graphDataUrl = "https://simpleanalytics.com/simpleanalytics.com.json?version=4&fields=histogram";


const getGraphData = async () => {
  const response = await fetch(graphDataUrl);
  const jsonData = await response.json();
  setUserData(jsonData);
};

export default function Contact({jsonData}) {

  console.log(jsonData)

    return (
      <div>
          
      </div>
    )
  }
  
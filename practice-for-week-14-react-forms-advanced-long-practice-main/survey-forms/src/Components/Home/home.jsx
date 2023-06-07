import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
<div className="layout">
<div className="logo-heading">

      <div className="logo-img">
      <img src='_assets/logo.png'/>
      </div>

      <div className="headings">

        <div>
            <h1>Survey Tool</h1>
        </div>
        <div>
            <h2> Home </h2>
        </div>

      </div>
    </div>

    <div>
         <ul className="button-links">

             <li>
                <Link to="/sample-survey">  
                 <button>Sample Survey</button>
                 </Link>
             </li>

            <li>
                <button>Sensory Preferences</button>
            </li>

            <li>
                <button>Report</button>
            </li>

            <li>
                <button>Home</button>
            </li>
                </ul>
    </div>

    <div>
            <p> a/A is doing some exciting research and would love your contribution. Please Select a Survey!

            </p>
        </div>

</div>

 </>
    )
}

export default Home;
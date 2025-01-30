import { useState  } from "react";
import Card from "./csrd";

function Hero() {
  const [data, setChange] = useState([]); 
  const [inputVal, setChangeInput] = useState(""); 
  const fetchData = async (query) => {
    try {
      const api = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      const response = await api.json();
      setChange(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  
  const handleSearch = () => {
    if (inputVal.trim() === "") {
      return;
    }
   
    ;
  };
  const handleSearch2 = () => {
    fetchData(inputVal);
  };
  console.log("hii")
  return (
    <div className="hero">
      <div className="heroPadding">
        <div className="heroHeader">
          <input
            type="text"
            placeholder="Search for a show"
            value={inputVal}
            onChange={(e) => setChangeInput(e.target.value) }
            onKeyDown={handleSearch2} 
          />
          <button onClick={handleSearch}>Search</button>

          <button
            onClick={() => {
              const top = data
                .filter((val) => Math.floor(val.show.rating?.average) >= 8)
                .sort((a, b) => b.show.rating.average - a.show.rating.average);

              setChange(top);
            }}
          >
            Top 5 Shows
          </button>
        </div>

        <div className="cardForHero">
          {data.map((val) => (
            <Card
              key={val.show.name}
              resName={val.show.name}
              rating={val.show.rating?.average || "N/A"}
              jobRole={val.show.genres.join(", ") || "No genres"}
              imagee={
                val.show.image?.medium ||
                "https://via.placeholder.com/150"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

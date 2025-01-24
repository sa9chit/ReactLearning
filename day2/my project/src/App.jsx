import "./App.css";

function Card(prop) {
  return (
    <div className="card">
      <img src={prop.image} alt="Thumbnail" />
      <div className="cardData">
        <span className="name">{prop.rating}</span>
        <span className="rating">{prop.jobRole}</span>
        <span className="detail">{prop.resName}</span>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Alice Johnson",
    rating: "4.8",
    jobRole: "Software Engineer",
    experience: "5 years",
    image:
      "https://i.ytimg.com/an_webp/tLh9T51zvpQ/mqdefault_6s.webp?du=3000&sqp=CKyOy7wG&rs=AOn4CLA6eRxQRgs0fIuqgtSdHMl-gIggWQ",
  },
  {
    name: "Bob Smith",
    rating: "4.2",
    jobRole: "Data Scientist",
    experience: "3 years",
    image:
      "https://i.ytimg.com/an_webp/dHlDAhARLxo/mqdefault_6s.webp?du=3000&sqp=CIr0yrwG&rs=AOn4CLAKXgRD9Fxss5gXjQOzD7GqrQiOdQ",
  },
  {
    name: "Charlie Brown",
    rating: "4.6",
    jobRole: "Product Manager",
    experience: "6 years",
    image:
      "https://i.ytimg.com/an_webp/9zUfVXifoPE/mqdefault_6s.webp?du=3000&sqp=CIXRyrwG&rs=AOn4CLB3Lgu19hZmAKPpjzffmAcTxCx1pw",
  },
  {
    name: "Dana Lee",
    rating: "4.7",
    jobRole: "UI/UX Designer",
    experience: "4 years",
    image:
      "https://i.ytimg.com/an_webp/WXqOc-oor-E/mqdefault_6s.webp?du=3000&sqp=CK2Ky7wG&rs=AOn4CLAzkjLadVL_3JfQwsgcmAtWuBkj-g",
  },
  {
    name: "Edward Clark",
    rating: "4.3",
    jobRole: "DevOps Engineer",
    experience: "2 years",
    image:
      "https://i.ytimg.com/an_webp/5NWdfv5P5d4/mqdefault_6s.webp?du=3000&sqp=CKyUy7wG&rs=AOn4CLD0_4TbkWW46uotg3TtNvX0r3FZgQ",
  },
  {
    name: "Fiona Green",
    rating: "5.0",
    jobRole: "Backend Developer",
    experience: "7 years",
    image:
      "https://i.ytimg.com/an_webp/H86iO0mtsDI/mqdefault_6s.webp?du=3000&sqp=CIjyyrwG&rs=AOn4CLDMLnAwhyX3uxlY9y0fwyvRsvs-oQ",
  },
  {
    name: "George Harris",
    rating: "4.1",
    jobRole: "Frontend Developer",
    experience: "3 years",
    image:
      "https://i.ytimg.com/an_webp/vUYnRGotTbo/mqdefault_6s.webp?du=3000&sqp=COijy7wG&rs=AOn4CLBjruIBurwd5hxnDPD_RZ2f696eIw",
  },
  {
    name: "Hannah Moore",
    rating: "4.4",
    jobRole: "Business Analyst",
    experience: "4 years",
    image:
      "https://i.ytimg.com/an_webp/24S3sZfCxLQ/mqdefault_6s.webp?du=3000&sqp=CKSky7wG&rs=AOn4CLCytAZ9RixO24c-_7Ij8gMpI0V1WQ",
  },
];
function Hero() {
  return (
    <div className="hero">
      <div className="heroPadding">
        <div className="heroHeader">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="cardForHero">
          {data.map((val) => (
            <Card
              key={val.name} // Adding a key for each Card
              resName={val.name}
              rating={val.rating}
              jobRole={val.jobRole}
              image={val.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img
        src="https://imgs.search.brave.com/_O1XWeRwmD73lqc5p9CPPk2XQCJyt-eLIkIB7Xsr7_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzQzLzgwLzkx/LzM2MF9GXzExNDM4/MDkxNTFfUGdPM29B/Nm53a09VdzlMdWJZ/d0U3dFFVZlEwbXds/QjkuanBn"
        alt="Logo"
      />
      <div className="rightHead">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
}

export { App };

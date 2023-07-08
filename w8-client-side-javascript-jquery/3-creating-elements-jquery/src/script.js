const rockets = [
  {
    name: "Falcon 1",
    engines: "1",
    launch_date: "2006-03-24",
    emoji: "🦅",
  },
  {
    name: "Falcon 9",
    engines: "27",
    launch_date: "2010-06-04",
    emoji: "🚀",
  },
  {
    name: "Falcon Heavy",
    engines: "27",
    launch_date: "2018-02-06",
    emoji: "👩🏼‍🚀",
  },
  {
    name: "Starship",
    engines: "6",
    launch_date: "2021-12-01",
    emoji: "👾",
  },
];

// ✅ Step1: Loop through the elements
// ✅ Step2: Access the properties inside each object
// ✅ Step3: Create the individual element
// Step4: append to the page

$(document).ready(function () {
  const createRocketElement = (rocket) => {
    const rocketElement = `<article>
      <header>
        <h2>${rocket.emoji} ${rocket.name}</h2>
      </header>
      <div class="content">
        <ul>
          <li><span>Engines(s): ${rocket.engines}  </span></li>
          <li>Launch Date: ${rocket.launch_date}</li>
        </ul>
      </div>
      <footer>Space X Rocket <em>${rocket.name}</em> was launched on ${rocket.launch_date} and was equipped with ${rocket.engines} Engine(s)</footer>
    </article>`;
    return rocketElement;
  };

  const renderRockets = (rocketsArr) => {
    for (const rocket of rocketsArr) {
      const rocketElement = createRocketElement(rocket);
      $("#rockets-container").append(rocketElement);
    }
  };

  renderRockets(rockets);
});

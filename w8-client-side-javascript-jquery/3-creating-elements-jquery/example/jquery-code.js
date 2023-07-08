const createRocketElement = (rocket) => {
  const newRocketElement = $("<article>");
  const header = $("<header>");
  header.append(
    $(
      <h2>
        ${rocket.emoji} - ${rocket.name}
      </h2>
    )
  );
  newRocketElement.append(header);
  const content = $("<div>", { class: "content" });
  const ul = $("<ul>");
  ul.append(
    $(
      <li>
        <span>Engines(s): </span> ${rocket.engines}
      </li>
    )
  );
  ul.append(
    $(
      <li>
        <span>Launch Date: </span> ${rocket.launch_date}
      </li>
    )
  );
  content.append(ul);
  newRocketElement.append(content);
  const footer = $("<footer>");
  footer.append(
    `Space X Rocket <em>${rocket.name}</em> was launched on ${rocket.launch_date} and was equipped with ${rocket.engines} Engine(s)`
  );
  newRocketElement.append(footer);
  return newRocketElement;
};

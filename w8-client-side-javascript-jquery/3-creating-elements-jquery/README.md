# Generation of Rocket Articles

## Instructions

- Article elements need to be created dynamically using the rockets array in rocketsData.js

- A hard-coded example of the article tag can be found in article.html

```html
<article>
  <header>
    <h2> 🦅 Falcon 1</h2>
  </header>
  <div class="content">
    <ul>
      <li><span>Engines(s): </span>1</li>
      <li><span>Launch Date: </span>2006-03-24</li>
    </ul>
  </div>
  <footer>Space X Rocket <em>Falcon 1</em> was launched on 2006-03-24 and was equipped with 1 Engine(s)</footer>
</article>
```

- For each object in the rockets array, a full article element needs to be created and append to the section element with the rockets-container class in index.html

## Documentation

- [jQuery addClass method](https://api.jquery.com/text/)
- [jQuery text method](https://api.jquery.com/text/)
- [jQuery HTML method](https://api.jquery.com/html/)
- [jQuery attribute method](https://api.jquery.com/attr/)
- [jQuery each method](https://api.jquery.com/each/)
- [jQuery append method](https://api.jquery.com/append/)
- [jQuery appendTo method](https://api.jquery.com/appendto/)

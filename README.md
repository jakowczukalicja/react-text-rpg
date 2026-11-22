# Text based RPG

A text-based RPG engine for the browser, built with **React**. The whole story lives in one JSON file (`src/data/story.json`), so you can write a new story without changing any code.

In the included story, you arrive in a small seaside village with one dream: to open your own tea house. The grand opening is tomorrow at noon.

## Features

- Scenes with choices that lead to different parts of the story (including a side quest)
- Random actions with a chance of success
- Luck levels chosen at the start, which change the chance of every random action
- Multiple endings
- Status panel with location, luck, steps and a restart button
- Optional scene images

## How to run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Story format

```json
{
  "title": "My Story",
  "start": "first_scene",
  "luckLevels": {
    "lucky": { "label": "Lucky", "bonus": 0.2 }
  },
  "scenes": {
    "first_scene": {
      "text": "You stand at a crossroads.",
      "location": "Crossroads",
      "image": "/images/crossroads.png",
      "choices": [
        { "text": "Go left", "goto": "left_path" },
        { "text": "Jump over the river", "chance": 0.6, "success": "other_side", "failure": "in_the_water" }
      ]
    }
  }
}
```

- A choice with `goto` always leads to the same scene.
- A choice with `chance` rolls the dice: the final chance is `chance` + the luck `bonus`, limited to 5–95%.
- A scene with an empty `choices` list is an ending.
- `location` and `image` are optional.

## Credits

Scene images in the example story are screenshots from **Stardew Valley** used for non-commercial educational purposes

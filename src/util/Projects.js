import Project from "./Project";
import SpotifyMTVPreview from "../assets/images/SpotifyMTV/preview.gif";
import DoozyPreview from "../assets/images/Doozy/preview.gif";
import PathfindingVisualizerPreview from "../assets/images/PathfindingVisualizer/preview.gif";
import ComicReliefPreview from "../assets/images/ComicRelief/preview.gif";
import SpotifyPlaylistMinifierPreview from "../assets/images/SpotifyPlaylistMinifier/preview.png";
import CDynamicMemoryAllocatorPreview from "../assets/images/CDynamicMemAllocator/preview.png";

export const PROJECTS = [
  new Project(
    "Spotify MTV",
    "A platform that matches Spotify songs to music videos.",
    SpotifyMTVPreview,
    "Typescript, React, Express.js, MongoDB, Node.js, Bootstrap, HTML/CSS",
    ["One of my friends really enjoys watching music videos, and he expressed how he wanted all of the music videos for his Spotify music in an easy place. I figured this would be a great opportunity to learn Typescript with React, so I decided to implement it for him. I also exercised my design skills by styling the website to look just like the Spotify desktop application."],
    [
      "Takes information from a user's Spotify profile (e.g. top tracks, top artists, playlists) and creates a mapping of each song to a music video from the Youtube Data API.",
      "CSS styling serves to mirror that of Spotify's desktop application to create a seamless user experience.",
      "UI design also takes cues from the Youtube web application to make the front-end as approachable as possible.",
    ],
    [
      "No way to query the Youtube Data API for official music videos by artists, so I developed a search algorithm that matches keywords to the song title and channel names to a list of accepted channels depending on the song's artists or labels.",
      "Loading a single view requires hundreds of (oftentimes duplicate) Youtube Data API calls, so once I find the mapping from a song to a music video, I store this mapping in the database. I only call the Youtube Data API for mappings that don't already exist in the database.",
    ],
    [{ url: "https://github.com/jasperhuangg/spotify-mtv/", type: "Github" }]
  ),
  new Project(
    "Doozy Task Manager",
    "A smart task manager with numerous user-thinking features.",
    DoozyPreview,
    "Javascript, React, Express.js, MongoDB, Node.js, Bootstrap, HTML/CSS",
    ["This was my first React project. I didn't want it to be a simple todolist app, so I modeled it after one of my favorite task manager applications. I implemented many of its features to solidify my understanding of React."],
    [
      "A fully-featured task manager app inspired by TickTick.",
      "Developed algorithm that translates natural language into due dates and priorities to streamline the process of adding todo items.",
      "Optimized real-time server performance and scalability by minimizing calls to MongoDB.",
      "Improved user experience by implementing other features, including Google OAuth, smart lists and notifications.",
    ],
    [
      "Due to the sheer amount of data that the user can update at any given moment (updating task titles, priorities, descriptions, due dates, etc.), it's easy for MongoDB to get overloaded with update calls across multiple users. To solve this, I keep a stack of updates on the server that is used by the front-end, and push the entire stack onto MongoDB once it reaches a certain size.",
      "The text-to-date parser handles many different edge cases as to what the user could type. Picking and storing keywords in item titles was quite difficult, especially since it needed to happen while the user was typing.",
    ],
    [
      {
        url: "https://github.com/jasperhuangg/mern-task-manager/",
        type: "Github",
      },
    ]
  ),
  new Project(
    "Pathfinding Visualizer",
    "An educational tool to help with learning pathfinding algorithms.",
    PathfindingVisualizerPreview,
    "Javascript, HTML/CSS, jQuery, Bootstrap",
    ["I remember I had tons of trouble understanding and appreciating Pathfinding Algorithms when I was learning them in my intro CS classes. None of the visualizers were that enjoyable to use. This aims to solve that problem by providing visualizations that are visually appealing and easy to understand"],
    [
      "Developed user-friendly UI providing visualizations of Greedy BFS, Dijkstra’s Algorithm, A* Search, and Bidirectional A* using Javascript and CSS animations.",
      "Click and drag mechanic allows placing walls and weights to alter how the algorithms pick the shortest path between start and finish nodes.",
      "Ability to choose different simulation speeds allows viewing of each algorithm’s execution in more/less detail.",
      "Pick between different color themes of your choosing for algorithm execution.",
    ],

    [
      "Abstracting the grid and implementing the algorithms was relatively straightforward, but figuring out how to assign CSS animations based on each stage of the algorithm's execution required some careful thought and planning.",
      "Figuring out how to minimize lag from CSS animations required some tinkering.",
    ],
    [
      {
        url: "https://github.com/jasperhuangg/pathfinding-visualizer",
        type: "Github",
      },
      {
        url: "https://jasperhuangg.github.io/pathfinding-visualizer",
        type: "Demo",
      },
    ]
  ),
  new Project(
    "Comic Relief",
    "A multiplayer web game for telling stories and staying connected.",
    ComicReliefPreview,
    "Javascript, Express.js, Node.js, Socket.io, jQuery, HTML/CSS, Bootstrap, Heroku",
    ["Having already learned how to code up a basic Express server that supported GET/POST/PUT/etc. operations, I wanted to learn how to code up a more complex server. I also just finished a game design class at school, and I had been playing online 'io' style games during quarantine with my friends. I decided the board game I designed as the final project for the game design class would be ideal to turn into a multiplayer web game."],
    [
      "The online version of a group project for a board game design class at USC.",
      "Single-paged web app developed with Javascript, the WebSocket API, jQuery, Node.js, Express.js, and HTML/ CSS.",
      "Developed Express Node.js game server that creates and assigns concurrent game rooms and processes in- game events and logic through WebSockets.",
      "Configured game server to adapt to user disconnection events that would otherwise break gameplay.",
    ],
    [
      "It was my first time working with Socket.io, and figuring out how to configure the game server to gracefully handle disconnection events required some planning.",
      "I had to think deeply about how best to design the game to match the original experience of the physical board game as closely as possible. This required inquiring about how game dynamics and styling would affect user experience.",
    ],
    [
      {
        url: "https://github.com/jasperhuangg/comic-relief",
        type: "Github",
      },
      {
        url: "https://comic-relief-game.herokuapp.com/",
        type: "Demo",
      },
    ]
  ),
  new Project(
    "Spotify Playlist Minifier",
    "A tool that ranks and filters out songs in Spotify playlists.",
    SpotifyPlaylistMinifierPreview,
    "Javascript, Express.js, Node.js, jQuery, HTML/CSS, Bootstrap",
    [],
    [
      "Developed ranking algorithm for playlist songs integrating listening metrics from the Spotify Web API.",
      "Implemented Express Node.js server that authenticates user login requests via Spotify OAuth and uploads the user’s listening metrics to a MongoDB database.",
      "Designed and developed single-paged user-interface with Javascript and HTML/CSS allowing users to manage playlists and access minified playlists.",
    ],
    [
      "In order to watch the user's listening behavior, I call the Spotify Web API every 10-15 seconds. In order to prevent MongoDB from getting swamped with updates, I keep a listening queue for each user. When the user changes songs, everything on the queue gets popped off and is used in calculating a score for the song that was just listened to by the user.",
      "It was my first time coding up something that used an Express server, so figuring out how routes and middleware worked and keeping the entire server organized was a challenge I had to tackle.",
    ],
    [
      {
        url: "https://comic-relief-game.herokuapp.com/",
        type: "Demo",
      },
    ]
  ),
  new Project(
    "C Dynamic Memory Allocator",
    "A dynamic memory allocator supporting malloc, realloc, and free.",
    CDynamicMemoryAllocatorPreview,
    "C, Heap Management",
    [],
    [
      "A class project for a C dynamic memory allocator that implements allocating, reallocating, and freeing memory on the heap.",
      "Optimized for speed and space usage, comparable in both categories to the C library functions.",
      "Gracefully handles out of memory errors.",
    ],
    [
      "In order to optimize the program for speed and space usage, I had to test out numerous different techniques for how memory blocks were assigned on the heap. Some combinations of techniques would clash with one another, so getting it up to standard required many hours of tinkering and thought.",
      "Figuring out how to debug the program posed a challenge, as the program simply crashes with segmentation faults and out of memory exceptions, and doesn't provide much useful information when it does. In the end, I wrote a print function that shows me the topmost levels of the heap, and used GDB to dive into exactly what was happening to each block of memory.",
    ],
    []
  ),
]

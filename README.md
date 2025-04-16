<h1> 🏗️ Nirmaan - Smart Infrastructure Design Assistant </h1>
<p>Nirmaan is a modern, responsive, and AI-powered infrastructure planning tool that uses satellite imagery and AI models to help users decide the best usage of land. This project is built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Mapbox GL</strong>, and includes mock AI interactions for simulation purposes.</p>


<h2>🚀 Features</h2>

* 🔗 Fixed header with smooth-scroll navigation
* 🌐 Section-based page highlighting ("Home", "About", "Work", "Contact")
* 🗺️ Interactive Mapbox map to select land locations
* 📤 Mock AI simulation with image generation
* 🖼️ Rectangle selection on image for zone-specific AI prompts
* ⏳ Smooth progress bar to simulate loading
* ✅ Login & Signup with basic validation
* 📱 Fully responsive using Tailwind CSS
* 🎨 Styled using a custom color palette


<h2> 📁 Project Structure </h2>

``` plaintext
nirmaan-website/
│
├── public/
│   └── placeholder.jpg               # Placeholder image for mock AI output
│
├── src/
│   ├── assets/                       # Images, logos, avatars
│   ├── components/                   # Reusable UI elements (Header, Footer, ProgressBar, etc.)
│   ├── pages/                        # Home.jsx, CreateProject.jsx, Login.jsx, Signup.jsx
│   ├── styles/                       # Tailwind config or additional custom styles
│   └── App.jsx                       # Main routing file
│
├── .env                              # Contains Mapbox API token
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

<h2> 📦 Dependencies </h2>
<p>Install the following dependencies:</p>

``` powershell
npm install react-router-dom react-scroll mapbox-gl
npm install -D tailwindcss@3 postcss autoprefixer
```

<p>Then initialize Tailwind CSS:</p>

``` powershell
npx tailwindcss init -p
            OR
npx tailwindcss init
```

<p>Update <code>tailwind.config.js</code> like this:</p>

``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#20BF55',
        grayish: '#757575',
        light: '#FBFBFF',
        sky: '#01BAEF',
        navy: '#0B4F6C',
        'light-blue': '#F0F8FF',
        secondary: '#333333'
      },
    },
  },
  plugins: [],
}
```

<h2>🔐 Environment Variables</h2>

<p>Create a <code>.env</code> file in the root directory and add your Mapbox token:</p>

``` ini
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```
<p>Make sure to restart the dev server after setting this.</p>

<h2>⚙️ Getting Started</h2>

<h3><strong>Step 1: Clone the Repository</strong></h3>

``` bash
git clone https://github.com/your-username/nirmaan-website.git
cd nirmaan-website
```

<h3><strong>Step 2: Install Dependencies</strong></h3>

``` bash
npm install
```

<h3><strong>Step 3: Run the Dev Server</strong></h3>

``` bash
npm start
```
<p>Open <code>http://localhost:5173</code> in your browser to view the app.</p>

<h2>👥 Contributors</h2>

* Aniket — Frontend Developer, Project Lead
* Team Member 1 — Sania S Kotharkar, [Email](sania.kotharkar@gmail.com), [GitHub](https://github.com/Sania-2520), LinkedIn
* Team Member 2 — Rahul Pai, email, [GitHub](https://github.com/RahulGPi), LinkedIn

<h2> 📝 License </h2>
<p>This project is licensed for educational and demo purposes only. For commercial use, please contact the author.</p>
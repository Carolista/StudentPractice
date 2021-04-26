const entries = [
    // RESOURCE DOCUMENTS
    {
        title: "Get the Most Out of Slack",
        section: "Make A Strong Start",
        category: "Resources",
        description: "Learn more (faster) and get support from your mentors and peers. Bonus: How to post formatted code!",
        links: [
            { linkType: "Document", name: "Google Doc", link: "https://docs.google.com/document/d/1vAPrAvyzg_5iBGQ1ESDwRzJ5oNJezOg7F_bEYGBOkAM/edit?usp=sharing" }
        ],
        tech: [],
        requirements: [],
        note: "",
        releaseDate: "2021-04-03",
        difficulty: "",
        image: "how-to.png",
        isPending: false      
    },

    // EXAMPLES & EXERCISES - REPLIT BASED
    {
        title: "Can I Get Some Input?",
        section: "Examples &amp; Exercises by Topic",
        category: "Data &amp; Variables",
        description: "Import readline-sync & get user input.",
        links: [
            { linkType: "Starter Code", name: "Start Coding", link: "https://repl.it/@CarolineRose/GettingInput-StarterCode" },
            { linkType: "Solution", name: "Check Solution", link: "https://repl.it/@CarolineRose/GettingInput" }
        ],
        tech: ["JavaScript"],
        requirements: ["Replit Account"],
        note: "",
        releaseDate: "2021-03-11",
        difficulty: "Easy",
        image: "data-variables-input.png",
        isPending: false      
    },
    {
        title: "Template Literals",
        section: "Examples &amp; Exercises by Topic",
        category: "Strings &amp; Arrays",
        description: "The most natural way to integrate strings and variables, using back ticks and a special placeholder syntax.",
        links: [
            { linkType: "Examples", name: "View Examples", link: "https://repl.it/@CarolineRose/Literally" }
        ],
        tech: ["JavaScript"],
        note: "",
        releaseDate: "2020-10-09",
        difficulty: "Easy",
        image: "strings-arrays-template-literals.png",
        isPending: false      
    },

    // EXAMPLES & EXERCISES - GITHUB BASED
    {
        title: "Form Basics: Weekly Planner",
        section: "Examples &amp; Exercises by Topic",
        category: "",
        description: "Form validation and adding HTML to a page in the DOM",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://carolista.github.io/LC-Form-Basics/" },
            { linkType: "Repository", name: "GitHub", link: "https://github.com/Carolista/LC-Form-Basics" }
            
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        note: "This one does not have starter code, but you are encouraged to FORK your own copy and then clone it down to your local machine for exploration and experimentation!",
        releaseDate: "2020-10-24",
        difficulty: "Moderate",
        image: "this-week.png",
        isPending: false      
    },

    // GA PREP
    {
        title: "Physician Directory",
        section: "Graded Assignment Prep",
        category: "Assignment 2: Scrabble Scorer",
        description: "Learn how to put together a program with multiple functions for the console and prepare for Graded Assignment 2: Scrabble Scorer",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://replit.com/@CarolineRose/PhysicianDirectory?v=1" },
            { linkType: "Document", name: "Google Doc", link: "https://tinyurl.com/xt5ux8h6" },
            { linkType: "Starter Code", name: "Start Coding", link: "https://replit.com/@CarolineRose/PhysicianDirectory-StarterCode#index.js" },
            { linkType: "Solution", name: "Check Solution", link: "https://replit.com/@CarolineRose/PhysicianDirectory#index.js" },
            { linkType: "Video", name: "Watch Video", link: "https://youtu.be/tbLMj7h9Ghk" }
        ],
        tech: ["JavaScript"],
        note: "",
        releaseDate: "2020-04-10",
        difficulty: "Moderate",
        image: "physician-directory.png",
        isPending: false      
    },

    // PERSONAL PROJECTS
    {
        title: "Kaleidoscope",
        section: "Personal Projects",
        category: "The DOM",
        description: "Relax and create colorful, mirrored designs",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://carolista.github.io/LC-DOM-Kaleidoscope/" },
            { linkType: "Repository", name: "GitHub", link: "https://github.com/Carolista/LC-DOM-Kaleidoscope" }
            
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        note: "Feel free to FORK your own copy and then clone it down to your local machine for exploration and experimentation!",
        releaseDate: "2020-10-18",
        difficulty: "Challenging",
        image: "kaleidoscope.png",
        isPending: false      
    }
];

// // One link
// function Link(props) {
//     return (
//         <span className="link"><a href={props.item.link}>{props.item.name} &nbsp; </a></span>
//     )
// }

// // All links in a row
// function linkList(props) {
//     return (
//         <div>
//             {entries.links.map((item) => <Link key={item.name} item={item} />)}
//         </div>
//     )
// }

// // Gather all entries with index numbers into objects as children
// function IndexedEntries(props) {
//     let entryList = [];
//     for (let i=0; i < entries.length; i++) {
//         entryList.push(props.children(i, entries));
//     }
//     return <div>{entryList}</div>
// }

// // Create display of all entries with index as keys
// function Entries(props) {
//     return (
//         <IndexedEntries>
//             {(i, entries) => <div key={i}>{entries[i]}</div>}
//         </IndexedEntries>
//     )
// }

class Entry extends React.Component {

    state = {
        title: entries[0].title,
        description: entries[0].description,
        image: entries[0].image,
        link: entries[0].links[0]
    }

    getRandomEntry = () => {
        let randomIndex = Math.floor(Math.random() * entries.length);
        // console.log(randomIndex);
        this.setState({
            title: entries[randomIndex].title,
            description: entries[randomIndex].description,
            image: entries[randomIndex].image,
            link: entries[randomIndex].links[0]
        });
    }

    // getAll = () => {

    // }
    
    render() {
        return (
            <div id="main-entry">
                <button onClick={this.getRandomEntry}>Surprise Me</button>
                <div id="entry-area">
                    <div className="entry">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.description}</p>
                        <img src={"/images/" + this.state.image} />
                        <p><a href={this.state.link.link}>{this.state.link.name}</a></p>
                    </div>
                </div>
                
            </div>      
        )
    }

}

ReactDOM.render(<Entry />, document.getElementById('results-area'));
const entries = [
    // RESOURCE DOCUMENTS
    {
        id: 0,
        title: "Get the Most out of Slack",
        section: "Make A Strong Start",
        category: "Resources",
        description: "Learn more (faster) and get support from your mentors and peers. Bonus: How to post formatted code!",
        links: [
            { linkType: "Document", name: "Read Google Doc", link: "https://docs.google.com/document/d/1vAPrAvyzg_5iBGQ1ESDwRzJ5oNJezOg7F_bEYGBOkAM/edit?usp=sharing" }
        ],
        tech: [],
        requirements: [],
        note: "",
        releaseDate: "2021-04-03",
        difficulty: "n/a",
        image: "slack.png",
        isPending: false      
    },

    // EXAMPLES & EXERCISES - REPLIT BASED
    {
        id: 1,
        title: "Can I Get Some Input?",
        section: "Examples & Exercises by Topic",
        category: "Data & Variables",
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
        id: 2,
        title: "Template Literals",
        section: "Examples & Exercises by Topic",
        category: "Strings & Arrays",
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
        id: 3,
        title: "Form Basics: Weekly Planner",
        section: "Examples & Exercises by Topic",
        category: "The DOM",
        description: "Form validation and adding HTML to a page in the DOM",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://carolista.github.io/LC-Form-Basics/" },
            { linkType: "Repository", name: "Fork from GitHub", link: "https://github.com/Carolista/LC-Form-Basics" }
            
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
        id: 4,
        title: "Physician Directory",
        section: "Graded Assignment Prep",
        category: "Assignment 2: Scrabble Scorer",
        description: "Learn how to put together a program with multiple functions for the console and prepare for Graded Assignment 2: Scrabble Scorer",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://replit.com/@CarolineRose/PhysicianDirectory?v=1" },
            { linkType: "Document", name: "Read Google Doc", link: "https://tinyurl.com/xt5ux8h6" },
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
        id: 6,
        title: "Kaleidoscope",
        section: "Personal Projects",
        category: "The DOM",
        description: "Relax and create colorful, mirrored designs",
        links: [
            { linkType: "Demo", name: "Try Demo", link: "https://carolista.github.io/LC-DOM-Kaleidoscope/" },
            { linkType: "Repository", name: "Fork from GitHub", link: "https://github.com/Carolista/LC-DOM-Kaleidoscope" }
            
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        note: "Feel free to FORK your own copy and then clone it down to your local machine for exploration and experimentation!",
        releaseDate: "2020-10-18",
        difficulty: "Challenging",
        image: "kaleidoscope.png",
        isPending: false      
    }
];

/** HANDLE LIST OF LINKS FOR EACH ENTRY */

// One link
function Link(props) {
    return (
        <p className="link"><a href={props.item.link} target="_blank">{props.item.name}</a></p>
    )
}

// All links in a list
function LinkList(props) {
    let subheader = "Links";
    if (props.links.length === 1) {
        subheader = "Link";
    }
    return (
        <div className="link-list">
            <h4>{subheader}</h4>
            {props.links.map((item) => <Link key={item.name} item={item} />)}
        </div>
    )
}

let startIndex = 5;

class Entry extends React.Component {

    

    state = {
        title: entries[startIndex].title,
        description: entries[startIndex].description,
        image: entries[startIndex].image,
        links: entries[startIndex].links,
        section: entries[startIndex].section,
        category: entries[startIndex].category,
        releaseDate: entries[startIndex].releaseDate,
        difficulty: entries[startIndex].difficulty
    }

    getRandomEntry = () => {
        let randomIndex = Math.floor(Math.random() * entries.length);
        // console.log(randomIndex);
        this.setState({
            title: entries[randomIndex].title,
            description: entries[randomIndex].description,
            image: entries[randomIndex].image,
            links: entries[randomIndex].links,
            section: entries[randomIndex].section,
            category: entries[randomIndex].category,
            releaseDate: entries[randomIndex].releaseDate,
            difficulty: entries[randomIndex].difficulty
        });
    }
    
    render() {
        return (
            <div id="main-entry">
                {/* Button is temporary */}
                <button onClick={this.getRandomEntry}>Surprise Me</button>
                <div id="entry-area">
                    <div className="entry">
                        <div className="columns">
                            <div className="left-col">
                                <h3>{this.state.title}</h3>
                                <p>{this.state.description}</p>
                                <img src={"/images/" + this.state.image} />
                            </div>
                            <div className="right-col">
                                <LinkList links={this.state.links}/>
                                <h4 className="info-subheader">Release Date</h4>
                                <p className="info">{this.state.releaseDate}</p>
                                <h4 className="info-subheader">Difficulty</h4>
                                <p className="info">{this.state.difficulty}</p>
                            </div>
                            
                        </div>
                        <div className="small-info">
                            <span>{this.state.section}</span> &nbsp;&#124;&nbsp; 
                            <span>{this.state.category}</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>      
        )
    }

}

ReactDOM.render(<Entry />, document.getElementById('results-area'));

// Below is no longer necessary because my data now has an id property for each entry
// I will handle lists of entries later when I implement search & filter features   

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



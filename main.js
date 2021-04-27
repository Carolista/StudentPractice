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
        difficulty: "",
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
        id: 5,
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

// Pull strings from certain properties for select options in form fields
let sectionOptions = [];
let categoryOptions = [];
let techOptions = [];
let actionOptions = [];
let difficultyOptions = [];
for (let i=0; i < entries.length; i++) {
    let entry = entries[i];
    if (!sectionOptions.includes(entry.section)) {
        sectionOptions.push(entry.section);
    }
    if (!categoryOptions.includes(entry.category)) {
        categoryOptions.push(entry.category);
    }
    for (let j=0; j < entry.tech.length; j++) {
        if (!techOptions.includes(entry.tech[j])) {
            techOptions.push(entry.tech[j]);
        }
    }  
    for (let k=0; k < entry.links.length; k++) {
        if (!actionOptions.includes(entry.links[k].name)) {
            actionOptions.push(entry.links[k].name);
        }
    } 
    if (!difficultyOptions.includes(entry.difficulty) && entry.difficulty !== '') {
        difficultyOptions.push(entry.difficulty);
    }
}


/** NEW TAG **/
// Will only show if entry was released less than 40 days ago
function New(props) {
    return (
        <span className="new"> NEW!</span>
    )
}


/** LIST OF LINKS FOR EACH ENTRY */
// One link
function Link(props) {
    return (
        <p className="link"><a href={props.links.link} target="_blank">{props.links.name}</a></p>
    )
}
// All links in a list
function LinkList(props) {
    return (
        <div className="link-list">
            <h4>{(props.links.length === 1) ? "Link" : "Links"}</h4>
            {props.links.map((obj) => <Link key={obj.name} links={obj} />)}
        </div>
    )
}


/** LIST OF TECH FOR EACH ENTRY */
// One tech
function Tech(props) {
    return (
        <p className="tech">{props.techName}</p>
    )
}
// All techs in a list
function TechList(props) {
    return (
        <div className="link-list">
            <h4 className="tech-subheader">Tech</h4>
            {props.tech.map((str) => <Tech key={str} techName={str} />)}
        </div>
    )
}


/** DIFFICULTY RATING **/
// Will not show if n/a
function Difficulty(props) {
    return (
        <div>
            <h4 className="info-subheader">Difficulty</h4>
            <p className="info">{props.difficulty}</p>
        </div>
    )
}


/*** ONE ENTRY CARD ***/
function Entry(props) {
    
        let diff = (new Date() - new Date(props.entry.releaseDate))/(1000*60*60*24) < 40;

        return (
            <div className="entry">
                <div>
                    <h3>{props.entry.title}{ diff ? <New /> : null }</h3>
                    <p>{props.entry.description}</p>
                </div>
                <div className="columns">
                    <div className="left-col">
                        <img src={"./images/" + props.entry.image} />
                        <p className="note">{props.entry.note}</p>
                    </div>
                    <div className="right-col">
                        <LinkList links={props.entry.links} />
                        {(props.entry.tech.length > 0) ? <TechList tech={props.entry.tech} /> : null }
                        <h4 className="info-subheader">Release Date</h4>
                        <p className="info">{props.entry.releaseDate}</p>
                        {(props.entry.difficulty !== "") ? <Difficulty difficulty={props.entry.difficulty} /> : null }
                    </div>
                </div>
                
                <div className="small-info">
                    <span>{props.entry.section}</span> &nbsp;&#124;&nbsp; 
                    <span>{props.entry.category}</span>
                </div>
            </div>  
        )
}


/**** MULTIPLE ENTRIES ****/
class EntriesDisplayed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-entry">
                {this.props.currentEntries.map((entry) => <Entry key={entry.id} entry={entry} />)}
            </div>
        )
    }
}



// TODO: Display a list of recently visited links, e.g. Document for How to Make the Most of Slack, or Starter Code for Next-Level Loops

// TODO: Implement form to take keywords and offer dropdowns for section, category, tech, available action (from links)?, difficulty... also maybe view newest only, view coming soon, etc... maybe a reset button?

// TODO: Rearrange to make taller than wide and use masonry layout

// FIXME: Images aren't loading fast enough on GitHub deployment

// FIXME: Make note disappear if empty

// FIXME: keyword field is not working

/** CURRENT RESULTS COUNT **/
// Will not show if n/a
function ResultsFound(props) {
    if (props.length === entries.length) {
        return (
            <div>
                <p>Displaying all records.</p>
            </div>
        )
    } else if (props.length > 0) {
        let plural = (props.length === 1 ? "" : "s");
        return (
            <div>
                <p>{`${props.length} record${plural} found.`}</p>
            </div>
        )
    }  else {
        return (
            <div>
                <p>No records found. Please change your search criteria and submit again.</p>
            </div>
        )
    }
}


/**** FORM ****/

class FilterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentEntries: entries,
            keywordsValue: '',
            sectionValue: '',
            categoryValue: '',
            techValue: '',
            actionValue: '',
            difficultyValue: ''
        };
}

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    rebuildCurrentEntries() {
        let filteredEntries = [];
        for (let i=0; i < entries.length; i++) {
            if ((entries[i].section === this.state.sectionValue || this.state.sectionValue === '')
                && (entries[i].category === this.state.categoryValue || this.state.categoryValue === '')
                && (entries[i].tech.includes(this.state.techValue) || this.state.techValue === '')
                // && (entries[i].action === this.state.actionValue || this.state.actionValue === '')
                && (entries[i].difficulty === this.state.difficultyValue || this.state.difficultyValue === '')
                && (entries[i].title.includes(this.state.keywordsValue) || entries[i].description.includes(this.state.keywordsValue))) {
                filteredEntries.push(entries[i]);  
            }
        }
        return filteredEntries;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            currentEntries: this.rebuildCurrentEntries()
        });
    }

    clearForm = (event) => {
        event.preventDefault();
        this.setState({
            currentEntries: entries,
            keywordsValue: '',
            sectionValue: '',
            categoryValue: '',
            techValue: '',
            actionValue: '',
            difficultyValue: ''
        })
    }

    render() {
        return (
            <div>
                <form id="filter-form" onSubmit={this.handleSubmit}>
                    <div className="fields">                  
                        {/* <TextInput label={"Search by Keyword: "}
                                    name="keywordsValue"
                                    value={this.state.keywordsValue}
                                    onChange={this.handleInputChange} /> */}
                        <SelectInput label={"Section: "}
                                    name="sectionValue"
                                    value={this.state.sectionValue} 
                                    options={this.props.sectionOptions}
                                    handleInputChange={this.handleInputChange} />
                        <SelectInput label={"Category: "}
                                    name="categoryValue"
                                    value={this.state.categoryValue} 
                                    options={this.props.categoryOptions}
                                    handleInputChange={this.handleInputChange} />
                        <SelectInput label={"Tech: "}
                                    name="techValue"
                                    value={this.state.techValue} 
                                    options={this.props.techOptions}
                                    handleInputChange={this.handleInputChange} />
                        {/* <SelectInput label={"Action: "}
                                    name="actionValue"
                                    value={this.state.actionValue} 
                                    options={this.props.actionOptions}
                                    handleInputChange={this.handleInputChange} /> */}
                        <SelectInput label={"Difficulty: "}
                                    name="difficultyValue"
                                    value={this.state.difficultyValue} 
                                    options={this.props.difficultyOptions}
                                    handleInputChange={this.handleInputChange} />
                    </div>
                    <button id="submit" type="submit">Submit</button>
                    <button onClick={this.clearForm}>Reset</button>
                </form>
                <ResultsFound length={this.state.currentEntries.length} />
                <EntriesDisplayed currentEntries={this.state.currentEntries} />
            </div>       
        );
    }
}

FilterForm.defaultProps = {
    sectionOptions: sectionOptions,
    categoryOptions: categoryOptions,
    techOptions: techOptions,
    actionOptions: actionOptions,
    difficultyOptions: difficultyOptions
}

/*** FIELDS & VALIDATION ***/

// need a function to build dropdown lists from all entries and set defaultProps

/** TEXT INPUT **/

class TextInput extends React.Component {

    constructor(props) {
        super(props);
    }

    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div className="input-field">
                <label className="label">
                    {this.props.label}
                </label>
                <input className="input" type="text"
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.handleInputChange} />
            </div>
        );
    }
}

/** SELECT INPUT **/

class SelectInput extends React.Component {

    constructor(props) {
        super(props);
    }

    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div className="input-field">
                <label className="label">
                    {this.props.label}
                </label>
                <select className="input"
                        value={this.props.value}
                        name={this.props.name}
                        onChange={this.handleInputChange}>
                    <option key="default" value=""></option>
                    {
                        this.props.options.map(
                            (option) => <option key={option} value={option}>{option}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

// Give images time to load
setTimeout( function() {
    ReactDOM.render(<FilterForm />, document.getElementById('results-area'));
} , 200)




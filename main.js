/**************************************/
/**** STUDENT PRACTICE & RESOURCES ****/
/**************************************/

// TODO: perhaps organize results under section headers and categories like they are on Google docs - only present if relevant

// TODO: maybe implement alternate modes for viewing in rows with less info and with smaller cards - or better yet, a toggle to have the card initially displayed collapsed but then slide open to full size

// TODO: Display a list of recently visited links, e.g. Document for How to Make the Most of Slack, or Starter Code for Next-Level Loops - maybe?

// TODO: Consider multi-select for category and tech

// TODO: Perhaps have results update onChange instead of using a submit button (but keep clear/reset button) - how would that work with multi-select?

// TODO: Reduce sizes of everything; Rearrange card to allow for responsive display

// TODO: Modernize style & implement google fonts and icons

// FIXME: Images aren't loading fast enough on GitHub deployment - resize even smaller

// FIXME: Make note disappear if empty

// FIXME: keyword field for form search is not working - also needs to handle spaces and partial matches

// Get data for all entries
let entries = [];
let sectionOptions = [];
let categoryOptions = [];
let techOptions = [];
let difficultyOptions = [];

function getEntryData() {
    let newEntry;
    fetch('./data/entries.json')
        .then(response => response.json())
        .then(data => {
            
            data.forEach(obj => {
                newEntry = {
                    id: obj.id,
                    title: obj.title,
                    section: obj.section,
                    category: obj.category,
                    description: obj.description,
                    links: obj.links.map((link) => ({linkType: link.linkType, name: link.name, link: link.link})),
                    tech: obj.tech,
                    requirements: obj.requirements,
                    note: obj.note,
                    releaseDate: obj.releaseDate,
                    difficulty: obj.difficulty,
                    image: obj.image,
                    isPending: obj.isPending
                };
                entries.push(newEntry);
                if (!sectionOptions.includes(obj.section)) {
                    sectionOptions.push(obj.section);
                }
                if (!categoryOptions.includes(obj.category)) {
                    categoryOptions.push(obj.category);
                }
                for (let j=0; j < obj.tech.length; j++) {
                    if (!techOptions.includes(obj.tech[j])) {
                        techOptions.push(obj.tech[j]);
                    }
                }  
                if (!difficultyOptions.includes(obj.difficulty) && obj.difficulty !== '') {
                    difficultyOptions.push(obj.difficulty);
                }
            });
        });
}

// TODO: Get this in a lifecycle hook
getEntryData();


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

/** UP ARROW **/
function UpArrow() {
    return (
        <div>
            <div className="up"></div>
        </div>
        
    )
}

/** DOWN ARROW **/
function DownArrow() {
    return (
        <div className="down"></div>
    )
}

/*** ONE ENTRY DETAILED CARD ***/
class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        // Simplify
        let entry = this.props.entry;

        let diff = (new Date() - new Date(entry.releaseDate))/(1000*60*60*24) < 40;

        let viewMode = {};

        if (this.state.collapsed) {
            viewMode.display = "none";
        } 

        return (

            <div className="entry">
                <div className="arrow-container" onClick={this.toggleCollapse}>
                    {this.state.collapsed ? <DownArrow /> : <UpArrow />}
                </div>
                <div>
                    <h3>{entry.title}{ diff ? <New /> : null }</h3>
                    <p>{entry.description}</p>
                </div>
                <div style={viewMode}>
                    <div className="columns">
                        <div className="left-col">
                            <img src={"./images/" + entry.image} />
                            <p className="note">{entry.note}</p>
                        </div>
                        <div className="right-col">
                            <LinkList links={entry.links} />
                            {(entry.tech.length > 0) ? <TechList tech={entry.tech} /> : null }
                            <h4 className="info-subheader">Release Date</h4>
                            <p className="info">{entry.releaseDate}</p>
                            {(entry.difficulty !== "") ? <Difficulty difficulty={entry.difficulty} /> : null }
                        </div>
                    </div>
                    <div className="small-info">
                        <span>{entry.section}</span> &nbsp;&#124;&nbsp; 
                        <span>{entry.category}</span>
                    </div>
                </div>            
            </div>  
        )
    }
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


/** CURRENT RESULTS COUNT **/
function ResultsFound(props) {
    if (props.length === entries.length) {
        return (
            <div>
                <p>{`Displaying all ${props.length} records.`}</p>
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
            difficultyValue: ''
        };
}

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    rebuildCurrentEntries() {
        let current = this.state;
        let filteredEntries = entries.filter(entry => (
            (entry.section === current.sectionValue || current.sectionValue === '')
            && (entry.category === current.categoryValue || current.categoryValue === '')
            && (entry.tech.includes(current.techValue) || current.techValue === '')
            && (entry.difficulty === current.difficultyValue || current.difficultyValue === ''))
        );       
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
    difficultyOptions: difficultyOptions
}


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

// Give data and images time to load, then render
setTimeout( function() {
    ReactDOM.render(<FilterForm />, document.getElementById('results-area'));
} , 100)




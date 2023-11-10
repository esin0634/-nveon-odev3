import React, { Component } from "react";
import tutorialService from "../services/tutorial.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.getTutorials();
    console.log("componentdidmount call");
  }

  getTutorials() {
    tutorialService
      .getAll()
      .then((tutorialListesi) => {
        this.setState({
          tutorials: tutorialListesi.data.splice(0, 5),
        });
      })
      .catch((hata) => {
        console.log("hata oluştu: " + hata);
      });
  }

  AktifTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  handleSearchChange = (e) => {
    const searchTitle = e.target.value;
    this.setState({ searchTitle });

    // Filter the list based on the input value and update the state
    this.filterTutorials(searchTitle);
  };

  filterTutorials(searchTitle) {
    const { tutorials } = this.state;
    if (searchTitle) {
      const filteredTutorials = tutorials.filter((tutorial) =>
        tutorial.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      this.setState({
        tutorials: filteredTutorials,
      });
    } else {
      // If the search input is empty, get all tutorials again
      this.getTutorials();
    }
  }

  render() {
    const { tutorials, currentIndex, searchTitle } = this.state;

    return (
      <div>
        <div className="list row">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Başlığa göre ara"
            aria-label="Search"
            value={searchTitle}
            onChange={this.handleSearchChange}
          />
          <br />
          <div className="col-md-8">
            <p>{searchTitle}</p>
            <ul className="list-group">
              {tutorials &&
                tutorials.map((tutorial, index) => (
                  <li
                    className={"list-group-item " + (index === currentIndex ? "active" : "")}
                    key={index}
                    onClick={() => this.AktifTutorial(tutorial, index)}
                  >
                    {tutorial.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

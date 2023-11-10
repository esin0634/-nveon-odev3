import React, {Component} from "react";
import {Link} from "react-router-dom"

import tutorialService from "../services/tutorial.service";

export default class TutorialsList extends Component{

    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.findByTitle = this.findByTitle.bind(this)
        this.state = {
            tutorials:[],
            currentIndex : -1,
            currentTutorial : null,
            searchTitle : ""
        }
    }

    componentDidMount(){
        this.getTutorials()
        console.log("componentdidmount call")
    }

    getTutorials(){
        tutorialService.getAll()
        .then(tutorialListesi => {
            // console.log(tutorialListesi)
            this.setState({
                tutorials : tutorialListesi.data.splice(0,5)
            });
        })
        .catch(hata => {
            console.log("hata oluştu : " + hata)
        });
    }

    AktifTutorial(tutorial,index){
        this.setState({
            currentTutorial: tutorial,
            currentIndex : index
        })
    }

    findByTitle(){
        tutorialService.findByTitle(this.state.searchTitle)
        .then(queryTitleData => {
            console.log(queryTitleData.data)
            this.setState({
                tutorials : queryTitleData.data
            })
        })
        .catch(error => {"hata oluştu : " + error})
    }

    onChangeTitle(e){
        const title = e.target.value
        console.log(title)
        this.setState({
            searchTitle : title
        })
    }  
    refreshPage = () => {
    window.location.reload(); 
  };


    render(){
        const {tutorials} = this.state;
        const {currentIndex} = this.state;

        return(
            <div>
                <div className="list row">
                    <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); this.findByTitle(); }}>
                        <input className="form-control me-2" type="text" placeholder="Başlığa göre ara" aria-label="Search" onChange={this.onChangeTitle}/>
                        <button className="btn btn-outline-success" type="submit" onClick={this.findByTitle}>Ara</button>
                        <button className="btn btn-outline-secondary" onClick={this.refreshPage}>Aramayı Sıfırla</button>
                    </form>
                    <br/>
                    <div className="col-md-8 ">
                    <ul className="list-group">
                        {tutorials && tutorials.map((tutorial,index) => {
                            return(
                                <li className={"list-group-item " + (index === currentIndex ? "active" : "")} key={index} onClick={( ) => this.AktifTutorial(tutorial,index)} >
                                    {tutorial.title} 
                                    {/* - {tutorial.completed} */}
                                </li>
                            )
                        })}
                    </ul>
                    </div>

                </div>
            </div>
        )
    }
 
}

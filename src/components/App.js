import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Carousel from './Carousel';

import picture1 from '../img/img1.jpg'
import picture2 from '../img/img4.jpg'
import picture3 from '../img/img2.jpg'
import picture4 from '../img/img3.jpg'
import picture5 from '../img/img5.jpg'


class App extends Component {
  state = {
    people: [
      {
        name: 'Friedrich Schönborn',
        source: 'Harry Potter (2001-2011)',
        picture: picture1,
        review: '\"I grew up with Harry Potter. The series has stuck with me ever since I first was exposed. It is a part of my cultural outlook and identity to a certain degree. The books and movies are something special to me. I can analyze them and critique them, I can know and point out their flaws and maybe hate parts of them, but I love them nonetheless. I love Harry Potter with all its stumbling and errors. Not equally, but totally. I love the movies just the same.\"',
        number: 1
      },      
      {
        name: 'Nicole Schmidt',
        source: 'Stardust (2007)',
        picture: picture2,
        review: '\"I saw this movie twice in the theatres with friends and with my family. I watched it with my parents (who are very old-fashioned) and never once felt uncomfortable. This is a bit more violent than The Princess Bride but I think just as classic with a great mix of action, romance, and clean comedy. Awesome movie, don\'t rent it, just buy it.\"',
        number: 2
      },      
      {
        name: 'Todd Long',
        source: 'Lord of the Rings (2003-2006)',
        picture: picture3,
        review: '\"My mother can\'t understand why I love this trilogy so much, because she absolutely hates it and can\'t stand it. I loved every single bit of it, the magic, the creatures, the fantasy, the whole world that Tolkien created in these pages. I love it so much I\'ve done presentations about it at school, talked about it for hours on end with friends… and it definitely is the best book I have ever read! The book is a whole lot better than the film because you can imagine it however you like. Even so, it\'s the best!\"',
        number: 3
      },      
      {
        name: 'Gerald Hart',
        source: 'Merlin (1998)',
        picture: picture4,
        review: '\"Having studied the Arthurian legend and its evolution over time, I am surprised I did not see this movie until recently. One of the more interesting points about telling the legend of King Arthur is reconciling all the differences in the legend. Being a 900 year old story, there are many different sources one could use to tell the tale. "Merlin" seems to draw from them all, and successfully weaves various stories together into a working tale.\"',
        number: 4
      },      
      {
        name: 'Sharlene Pearson',
        source: 'The Sword in the Stone (1963)',
        picture: picture5,
        review: '\"This very nice Disney Classic was based on the children\'s novel by TH White. This was not yet that very well-known, heavy novel titled "the Once and Future King" that so many later movies were based upon, but the lighthearted earlier version. Many agreed that the later novel has disfigured the first, so that we may be thankful for the Disney version! Though it does not quite follow the book (this is hardly possible, at times) it is a very good version as animated movies go. Not tedious, though of an age where children were meant to learn something from a movie...A collectors item!\"',
        number: 5
      },      
      {
        name: 'Friedrich Schönborn',
        source: 'The Sword in the Stone (1963)',
        picture: picture1,
        review: '\"I grew up with Harry Potter. The series has stuck with me ever since I first was exposed. It is a part of my cultural outlook and identity to a certain degree. The books and movies are something special to me. I can analyze them and critique them, I can know and point out their flaws and maybe hate parts of them, but I love them nonetheless. I love Harry Potter with all its stumbling and errors. Not equally, but totally. I love the movies just the same.\"',
        number: 1
      },      
    ],
    selectedPerson: {
      name: 'Nicole Schmidt',
      source: 'Startdust (2007)',
      picture: picture2,
      review: '\"I saw this movie twice in the theatres with friends and with my family. I watched it with my parents (who are very old-fashioned) and never once felt uncomfortable. This is a bit more violent than The Princess Bride but I think just as classic with a great mix of action, romance, and clean comedy. Awesome movie, don\'t rent it, just buy it.\"',
      number: 5
    },
  }

  handleSelect = (selected) => {
    var num = this.state.people.indexOf(selected)-1;
    var persons = [];
    for(let i=0; i<this.state.people.length; i++) {
      persons[i] = {...this.state.people[i]}
    }
    persons.shift();  
    for (let i = 0; i < num; i++){
      persons.push({...persons[i]})
    }
    persons = persons.slice(num);
    persons.unshift({...persons[persons.length-1]});
    this.setState({selectedPerson: selected, people: persons})
  }

  render() {
    return (
      <div className="App">
        <Header selected = {this.state.selectedPerson} number= {this.state.people.length-1}/>
        <Carousel people = {this.state.people} selected = {this.state.selectedPerson} select = {this.handleSelect}/>
      </div>
    );
  }
}

export default App;

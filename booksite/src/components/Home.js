import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import { NavLink } from 'react-router-dom';

class Home extends Component {

	state = {
    books: []
	}

componentDidMount(){
    fetch('http://localhost:8080/library/books')
    .then(res => res.json())
    .then((data) => {
        this.setState({ books: data })
    })
    .catch(console.log)
}

  render() {
    return (   
		<div className="listContainer">
            <Accordion allowZeroExpanded="true">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <button><h4>Book List</h4></button>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {this.state.books.map((booklist) => (
                            <div key={booklist.id}>
                                    <div className="panel-body"><NavLink to={"/book?id=" + booklist.id}>{booklist.title}</NavLink></div>
                                    <div className="panel-footer">{booklist.author}</div>
                            </div>
                        ))}
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <button><h4>Movie List</h4></button>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Kids, we're gonna have to eat this cake by ourselves, Uncle Joey didn't make parole again. I think it would be nice, if you all dropped him a line. I have to tell you about the future. Working. C'mon. Oh, I've been so worried about you 
                        ever since you ran off the other night. Are you okay? I'm sorry I have to go. Isn't he a dream boat? Now, Biff, um, can I assume that your insurance is gonna pay for the damage? I have to tell you about the future. Why that's me, look at 
                        me, I'm an old man. Please note that Einstein's clock is in complete synchronization with my control watch. But I can't go to the dance, I'll miss my favorite television program, Science Fiction Theater. Hey, not too early I sleep in on 
                        Saturday. Oh, McFly, your shoe's untied. Don't be so gullible, McFly. You got the place fixed up nice, McFly. I have you're car towed all the way to your house and all you've got for me is light beer. What are you looking at, butthead. Say 
                        hi to your mom for me. Hey boy, are you alright? Say, why do you let those boys push you around like that? Hey beat it, spook, this don't concern you. Um, yeah, I'm on my way.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>




		</div>
    );
  }
}
 
export default Home;

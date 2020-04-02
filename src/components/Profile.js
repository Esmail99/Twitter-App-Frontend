import React from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            tweets: [],
            editedTweetContent: ''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/${this.props.userInfo.username}`)
        .then(res => res.json())
        .then(tweets => {
            if(tweets.length){
                tweets = tweets.map((tweet,index) => {
                    return(
                        <article className="w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns" key={index}>
                            <div className="tc">
                                <img 
                                    // onClick={() => this.onEditClick(tweet._id)}
                                    onClick={() => this.openPopupbox(tweet._id,tweet.content)}
                                    id={`editBtn${tweet._id}`}
                                    src={require('./edit.png')}
                                    className="h2 w2 dib pointer dim fl" 
                                    title="Photo of a kitty staring at you" 
                                    alt="edit" 
                                />
                                <PopupboxContainer />
                                <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h2 w2 dib pointer dim" title="Photo of a kitty staring at you" alt="avatar" />
                                <img 
                                    onClick={() => this.onDeleteClick(tweet._id)}
                                    id={`deleteBtn${tweet._id}`}
                                    src={require('./delete.webp')} 
                                    className="br-100 h2 w2 dib pointer dim fr" 
                                    title="Photo of a kitty staring at you" 
                                    alt="delete" 
                                />
                                <h1 className="f4 pointer dim">{tweet.username}</h1>
                            </div>
                            <p className="lh-copy measure center f3 black-70">{tweet.content}</p>
                            <div className='tl'>
                                <img 
                                    src={require("./likes.jpg")}
                                    className='w2 ma0 pa0'
                                    alt="likes" 
                                />
                                <span id={`likeCounter${tweet._id}`} className='f3'>{tweet.likes}</span> 
                                <hr className='pa0 ma0' />
                            </div>
                            {
                                tweet.comments = tweet.comments.map((comment,index) => {
                                    return(
                                        <div className='bg-black-20 br3 tl ph3 pa2 pb0 w-80 ml4' key={index}>
                                            <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h2 w2 dib pointer fl mr2" title="Photo of a kitty staring at you" alt="avatar" />
                                            <h5 className='pb0 mb3 mt2 pointer hover-black-70 dark-blue dib'>{comment.owner}</h5>
                                            <p className='pt0 mb3 mt0 ml4 f4'>{comment.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    )
                })
            } else {
                    tweets = <h2>You dont have any tweets yet, {this.props.userInfo.username}</h2>
            }
            this.setState({tweets: tweets})
        })
    }

    openPopupbox(tweetId,tweetContent) {
        const content = (
            <div>
                <input 
                    onChange={this.onEditChange}
                    type="text" 
                    name="editTweet" 
                    placeholder={`${tweetContent}`} 
                />
                <input 
                    className="f6 f6-l button-reset pv3 tc bn bg-animate bg-blue grow white pointer w-50 w-20-m w-20-l br4-ns outline-0 mt2" 
                    type="button" 
                    value="Change" 
                />
            </div>
        )
        PopupboxManager.open({ content })
    }

    onEditChange = (event) => {
        this.setState({editedTweetContent: event.target.value})
        console.log(this.state.editedTweetContent)
    }

    onEditClick = (tweetId) => {
        // fetch(`http://localhost:5000/tweet/updating/${tweetId}`,{
        //     method: 'put',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         content: this.state.editedTweetContent
        //     })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(console.log)
    }

    onDeleteClick = (tweetId) => {
        fetch(`http://localhost:5000/tweet/deleting/${tweetId}`,{
            method: 'delete'
        })
        .then(response => response.json())
        .then(data => {
            this.componentDidMount();
        })
        .catch(console.log)
    }

    render(){
        return(
            <div className="tc f3 mh4">
                <section className="mw7 center avenir">
                    {/* <button onClick={this.openPopupbox} className='f1'>Click me</button> */}
                    {/* <PopupboxContainer /> */}
                    {this.state.tweets}
                </section>
            </div>
        );
    }
}

export default Profile;








// import React, { Component } from 'react';
// import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
// import "react-popupbox/dist/react-popupbox.css"

// export default class Example extends Component {
//     openPopupbox() {
//     const content = (
//         <div>
//         <p className="quotes">Work like you don't need the money.</p>
//         <p className="quotes">Dance like no one is watching.</p>
//         <p className="quotes">And love like you've never been hurt.</p>
//         <span className="quotes-from">― Mark Twain</span>
//         </div>
//     )
//     PopupboxManager.open({ content })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.openPopupbox} className='f1'>Click me</button>
//                 <PopupboxContainer />
//             </div>
//         )
//     }
// }
import React from 'react';

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            tweets: [],
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
                                    onClick={() => this.onDeleteClick(tweet._id)}
                                    id={`deleteBtn${tweet._id}`}
                                    src={require('./delete.webp')} 
                                    className="br-100 h2 w2 dib pointer dim fr" 
                                    title="Photo of a kitty staring at you" 
                                    alt="avatar" 
                                />
                                <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h2 w2 dib pointer dim" title="Photo of a kitty staring at you" alt="avatar" />
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
                    {this.state.tweets}
                </section>
            </div>
        );
    }
}

export default Navigation;
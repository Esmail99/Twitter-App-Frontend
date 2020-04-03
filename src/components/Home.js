import React from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tweets: [],
            newTweetContent: '',
            liked: {},
            comment: ''
        }
    }
    
    componentDidMount() {
        fetch("https://cryptic-reef-80535.herokuapp.com/home")
        .then(res => res.json())
        .then(tweets => {
            tweets = tweets.map((tweet,index) => {
                let alreadyLiked = false;
                tweet.likedBy.forEach(likedBy => {
                    if(likedBy === this.props.userInfo.username)
                        return alreadyLiked = true
                })
                this.setState(Object.assign(this.state.liked,{ [tweet._id]: alreadyLiked }));
                return(
                    <article className="w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns" key={index}>
                        <div className="tc">
                            <img 
                                onClick={() => this.showProfile(tweet.username)}
                                src={require("./images/avatar.jpg")} 
                                className="br-100 h2 w2 dib pointer dim" 
                                title="Photo of a kitty staring at you" alt="avatar" 
                            />
                            <h1 
                                onClick={() => this.showProfile(tweet.username)}
                                className="f4 pointer dim">{tweet.username}
                            </h1>
                            <PopupboxContainer />
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                        <p className="lh-copy measure center f3 black-70">{tweet.content}</p>
                        <div className='tl mb2'>
                            <img 
                                src={require("./images/likes.jpg")}
                                className='w2 ma0 pa0'
                                alt="likes" 
                            />
                            <span id={`likeCounter${tweet._id}`} className='f3'>{tweet.likes}</span> 
                            <hr className='pa0 ma0 bn' />
                            <button onClick={() => this.handleLikes(tweet._id)} className='dim pointer w-50 bn outline-0'>
                                <img
                                    id={`likeBtn${tweet._id}`} 
                                    src={require("./images/like.webp")}
                                    className= {this.state.liked[tweet._id] ? 'w2 br-100 grow pointer dim bg-light-blue' : 'w2 br-100 grow pointer dim'}
                                    alt="like"
                                />
                            </button>
                            <button onClick={() => this.showCommentBlock(tweet._id)} id='likeBtn' className='dim pointer w-50 bn outline-0'>
                                <img 
                                    src={require("./images/comment.png")}
                                    className='w2 br-100 grow pointer dim'
                                    alt="comment" 
                                />
                            </button>
                        </div>

                        {/* Adding comments */}
                        <div>
                            <div className="bg-white mw6 center pa2 br4-ns ba b--white dn" id={`commentBlock${tweet._id}`}>
                                <fieldset className="cf bn ma0 pa0">
                                <div className="cf">
                                    <img src={require("./images/avatar.jpg")} className="fl br-100 h2 w2 dib pointer dim mt1 mr2" title="Photo of a kitty staring at you" alt="avatar" />
                                    <textarea 
                                        onChange = {this.onCommentChange}
                                        className="f3 input-reset bn fl black-80 bg-white pt2 lh-solid w-60 w-60-m w-60-l br2-ns outline-0" 
                                        placeholder="Write a comment.." 
                                        type="text" 
                                        name="tweet" 
                                        id="comment" 
                                        style={{resize: 'none'}} 
                                    />
                                    <input 
                                        onClick={() => this.onCommentClick(tweet._id)}
                                        className="f6 f5-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-30 w-20-m w-20-l br4-ns outline-0" 
                                        type="submit" 
                                        value="Comment" 
                                    />
                                </div>
                                </fieldset>
                            </div>
                        </div> 

                        {
                            tweet.comments = tweet.comments.map((comment,index) => {
                                return(
                                    <div className='bg-black-20 br3 tl ph3 pa2 pb0 w-80 ml4' key={index}>
                                        <img 
                                            onClick={() => this.showProfile(comment.owner)}
                                            src={require("./images/avatar.jpg")} 
                                            className="br-100 h2 w2 dib pointer fl mr2" 
                                            title="Photo of a kitty staring at you" 
                                            alt="avatar" 
                                        />
                                        <h5 
                                            onClick={() => this.showProfile(comment.owner)}
                                            className='pb0 mb3 mt2 pointer hover-black-70 dark-blue dib'>
                                            {comment.owner}
                                        </h5>
                                        <p className='pt0 mb3 mt0 ml4 f4'>{comment.content}</p>
                                    </div>
                                )
                            })
                        }
                    </article>
                )
            })
            this.setState({tweets: tweets})
        })
    }

    onTextareaChange = (event) => {
        this.setState({newTweetContent: event.target.value})
    }

    clearInput = () => {
        document.getElementById('textarea').value = ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        fetch(`https://cryptic-reef-80535.herokuapp.com/tweet/posting/${this.props.userInfo.username}`,{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              content: this.state.newTweetContent
            })
        })
        .then(response => response.json())
        .then(tweet => {
            if(tweet._id) {
                this.setState({newTweetContent: ''})
                this.clearInput();
                this.componentDidMount();
            } else if(tweet==='please signin first!'){
                this.props.changeRoute('signin')
            } 
        })
        .catch(err => console.log(err))
    }

    handleLikes = (tweetId) => {
        if(this.props.isSignedin){
            if(!this.state.liked[tweetId]) {
                document.getElementById(`likeCounter${tweetId}`).innerHTML=Number(document.getElementById(`likeCounter${tweetId}`).innerHTML)+1;
                this.setState(Object.assign(this.state.liked,{ [tweetId]: true }));
                document.getElementById(`likeBtn${tweetId}`).classList.add('bg-light-blue')
                fetch(`https://cryptic-reef-80535.herokuapp.com/tweet/likes/${tweetId}/${this.props.userInfo.username}`,{
                    method: 'put'
                })
                .then(response => response.json())
                .then(data => console.log(data))
            } else {
                document.getElementById(`likeCounter${tweetId}`).innerHTML=Number(document.getElementById(`likeCounter${tweetId}`).innerHTML)-1;
                this.setState(Object.assign(this.state.liked,{ [tweetId]: false }));
                document.getElementById(`likeBtn${tweetId}`).classList.remove('bg-light-blue')
                fetch(`https://cryptic-reef-80535.herokuapp.com/tweet/dislikes/${tweetId}/${this.props.userInfo.username}`,{
                    method: 'put'
                })
                .then(response => response.json())
                .then(data => console.log(data))
            }
        } else {
            this.props.changeRoute('signin')
        }
    }

    showCommentBlock = (tweetId) => {
        document.getElementById(`commentBlock${tweetId}`).classList.toggle('dn')
    }

    onCommentChange = (event) => {
        this.setState({comment: event.target.value})
    }

    onCommentClick = (tweetId) => {
        if(this.props.isSignedin && this.state.comment.length){
            fetch(`https://cryptic-reef-80535.herokuapp.com/tweet/comment/${tweetId}`,{
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    owner: this.props.userInfo.username,
                    content: this.state.comment
                })
            }).then(response => response.json())
            .then(newComment => {
                this.componentDidMount()
                this.setState({comment: ''})
                document.getElementById('comment').value = ''
            })

        }else if(!this.props.isSignedin) {
            this.props.changeRoute('signin')
        }
    }

    isFollowing = (username) => {
        if(this.props.isSignedin){
            let followState = false
            this.props.userInfo.following.forEach(follower => {
                if(follower === username)
                    followState = true
            })
            return followState
        }
    }

    showProfile = (username) => {
        fetch(`https://cryptic-reef-80535.herokuapp.com/${username}`)
        .then(res => res.json())
        .then(tweets => {
            tweets = tweets.map((tweet,index) => {
                if(index <= 2)
                {
                    return(
                        <div className='bg-black-20 br3 tc w-100' key={index}>
                            <p className='f4 pa3'>{tweet.content}</p>
                        </div>
                    )
                }
                return(null)
            })

            const content = (
                <div>
                    <h4>{username}</h4>
                    <div>
                        <img src={require("./images/profile.jpg")} className="h4 w4 mt1 mr2" title="Photo of a kitty staring at you" alt="avatar" />
                    </div>
                    <button
                        id={`follow${username}`}
                        className='f6 link dim ba ph1 mb2 dib pointer bw1 b--black bg-white'
                        type='button'>
                        {
                            this.isFollowing(username) 
                            ? <p 
                                onClick={() => this.onFollowClick(username,'unfollow')}
                                className='red pv0'>
                                Following
                              </p> 
                            : <p 
                                onClick={() => this.onFollowClick(username,'follow')}
                                className='pv0'>
                                Follow
                              </p>
                        }
                    </button>
                    <p>Latest Tweets</p>
                    {tweets}
                </div>
            )
            PopupboxManager.open({ content })
        })
    }

    onFollowClick = (username,state) => {
        if(this.props.isSignedin){
            fetch(`https://cryptic-reef-80535.herokuapp.com/${state}/${this.props.userInfo.username}`,{
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username
                })
            }).then(response => response.json())
            .then(user => {
                this.props.loadUser(user)
                PopupboxManager.close()
            })
        } else {
            this.props.changeRoute('signin')
        }
    }
    
    render(){
        return(
            <div className="tc f3 mh4">
                <section className="mw7 center avenir">
                {
                    this.props.isSignedin 
                    ? <div className="pt2">
                        <form className="bg-white mw7 center pa2 br1-ns ba b--black-10" onSubmit={this.onFormSubmit}>
                            <fieldset className="cf bn ma0 pa0">
                            <div className="cf">
                                <img src={require("./images/avatar.jpg")} className="fl br-100 h2 w2 dib pointer dim mt1 mr2" title="Photo of a kitty staring at you" alt="avatar" />
                                <textarea 
                                    onChange = {this.onTextareaChange}
                                    className="f3 input-reset bn fl black-80 bg-white pt2 lh-solid w-80 w-80-m w-80-l br2-ns outline-0" 
                                    placeholder="Add a tweet .." 
                                    type="text" 
                                    name="tweet" 
                                    id="textarea" 
                                    style={{resize: 'none'}} 
                                    required
                                />
                                <input 
                                    className="f4 f3-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-50 w-20-m w-20-l br4-ns outline-0" 
                                    type="submit" 
                                    value="Tweet" 
                                />
                            </div>
                            </fieldset>
                        </form>
                     </div>
                    : null
                }
                    {this.state.tweets}
                </section>
            </div>
        );
    }
}

export default Home;
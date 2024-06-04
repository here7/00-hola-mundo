import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "hered7",
        name: "Dani Heredia",
        isFollowing: true
    },
    {
        userName: "pheralt",
        name: "Pablo Hernández",
        isFollowing: true
    },
    {
        userName: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: false
    }
]

export function App(){
    return (
        <section className='App'>
        {
            users.map(user => {
                const { userName, name, isFollowing } = user

                return(
                    <TwitterFollowCard 
                        key={userName}
                        userName = {userName}    
                        initialIsFollowing = {isFollowing}                 
                        >
                        {name}
                    </TwitterFollowCard> 
                )
            })
        }
        </section>
        /*<div className='App'>
            <TwitterFollowCard initialIsFollowing={true} userName="hered7">
                Dani Heredia
            </TwitterFollowCard>
            <TwitterFollowCard userName="pheralt">
                Pablo Hernández
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
        </div>*/    
        )
}
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return (
        <div className='App'>
            <TwitterFollowCard isFollowing userName="hered7">
                Dani Heredia
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="pheralt">
                Pablo Hernández
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
        </div>
    )
}
import './App.css'

export function App(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="kikobeats" src="https://unavatar.io/reddit/kikobeats" />
                <strong>Dani Heredia</strong>
                <span>@hered7</span>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
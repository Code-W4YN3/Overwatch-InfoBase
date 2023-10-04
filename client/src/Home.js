import video1 from './media/Home.mp4'

function Home(){
    return(
        <>
            <video src={video1} width="100%" height="100%" controls="controls" autoplay="true" />
            <div id="title">
                <img id="overwatch2" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltbcf2689c29fa39eb/622906a991f4232f0085d3cc/Masthead_Overwatch2_Logo.png?format=webply&quality=90" alt="overwatch2"/>
                <h2 id="season">Overwatch 2: Invasion <br/> AUGUST 10</h2>
            </div>
        </>
    )
}

export default Home
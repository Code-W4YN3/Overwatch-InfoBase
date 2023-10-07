import video1 from './media/Home.mp4'

function Home(){
    return(
        <>
            <video src={video1} width="100%" height="100%" controls="controls" autoplay="true" loop muted />
            <div id="title">
                <img id="overwatch2" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltbcf2689c29fa39eb/622906a991f4232f0085d3cc/Masthead_Overwatch2_Logo.png?format=webply&quality=90" alt="overwatch2"/>
                <h2 id="season">Overwatch 2: Invasion <br/> AUGUST 10</h2>
                <div id="platforms">
                    <a href='https://us.shop.battle.net/en-us/family/overwatch'><img alt="Download" style={{width: "260px", height: "260px", position: "absolute", top: "36%", left: "3%"}} className='platformIcons' src='https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-2cf9ec6cb734cd891db23493d08fdb73.png'/></a>
                    <a href='https://store.playstation.com/en-us/product/UP0002-PPSA07805_00-OWORIGINS0000000/'><img alt="Download" style={{width: "250px", height: "160px", position: "absolute", top: "44%", left: "22%"}} className='platformIcons' src='https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo.png'/></a>
                    <a href='https://www.nintendo.com/us/store/products/overwatch-2-switch/'><img alt="Download" style={{width: "160px", height: "160px", position: "absolute", top: "44%", left: "62%"}} className='platformIcons' src='https://icon-library.com/images/xbox-one-icon/xbox-one-icon-8.jpg'/></a>
                    <a href='https://www.xbox.com/en-US/games/overwatch-2'><img alt="Download" style={{width: "160px", height: "160px", position: "absolute", top: "44%", left: "44%"}} className='platformIcons' src='https://cdn-icons-png.flaticon.com/512/871/871377.png'/></a>
                    <a href='https://store.steampowered.com/app/2357570/Overwatch_2/'><img alt="Download" style={{width: "160px", height: "160px", position: "absolute", top: "44%", left: "80%"}} className='platformIcons' src='https://cdn0.iconfinder.com/data/icons/social-media-2104/24/social_media_social_media_logo_steam-512.png'/></a>

                </div>
            </div>
        </>
    )
}

export default Home
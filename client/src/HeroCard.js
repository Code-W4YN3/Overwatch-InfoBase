function HeroCard({ hero, onSelect, urlPath }){

    function handleClick(){
        onSelect(hero.id, hero.name)
    }

    if(hero.role_id === 1){
        return(
        <a href={urlPath}>
        <div className="heroCard" onClick={handleClick}>
            <img className="heroIcons" alt={hero.name} src={hero.icon} />
            <div className="heroCardDetails">
                <div className="heroNameBox">
                    <img className="roleIcons" alt={hero.name} src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/bltcb94e9203be4088a/dark_circle_tank.svg?format=webply&quality=90"/> 
                    <span className="heroName">{hero.name}</span>
                </div>
            </div>
        </div>
        </a>
        )
    }else if(hero.role_id === 2){
        return(
            <a href={urlPath}>
            <div className="heroCard" onClick={handleClick}>
                <img className="heroIcons" alt={hero.name} src={hero.icon} />
                <div className="heroCardDetails">
                    <div className="heroNameBox">
                        <img className="roleIcons" alt="icon" src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt052e8b02aef879b0/dark_circle_damage.svg?format=webply&quality=90"/> 
                        <span className="heroName">{hero.name}</span>
                    </div>
                </div>
            </div>
            </a>
            )
    }else{
        return(
            <a href={urlPath}>
            <div className="heroCard" onClick={handleClick}>
                <img className="heroIcons" alt={hero.name} src={hero.icon} />
                <div className="heroCardDetails">
                    <div className="heroNameBox">
                        <img className="roleIcons" alt="icon" src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt8cf279e9b3126ef8/dark_circle_support.svg?format=webply&quality=90"/> 
                        <span className="heroName">{hero.name}</span>
                    </div>
                </div>
            </div>
            </a>
            )
    }
  }
  
export default HeroCard;
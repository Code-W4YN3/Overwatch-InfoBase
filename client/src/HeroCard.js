function HeroCard({ hero }){
    if(hero.role_id == 1){
        return(
        <div className="heroCard">
            <img className="heroIcons" alt={hero.name} src={hero.icon} />
            <div className="heroCardDetails">
                <div className="heroNameBox">
                    <img className="roleIcons" src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/bltcb94e9203be4088a/dark_circle_tank.svg?format=webply&quality=90"/> 
                    <span className="heroName">{hero.name}</span>
                </div>
            </div>
        </div>
        )
    }else if(hero.role_id == 2){
        return(
            <div className="heroCard">
                <img className="heroIcons" alt={hero.name} src={hero.icon} />
                <div className="heroCardDetails">
                    <div className="heroNameBox">
                        <img className="roleIcons" src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt052e8b02aef879b0/dark_circle_damage.svg?format=webply&quality=90"/> 
                        <span className="heroName">{hero.name}</span>
                    </div>
                </div>
            </div>
            )
    }else{
        return(
            <div className="heroCard">
                <img className="heroIcons" alt={hero.name} src={hero.icon} />
                <div className="heroCardDetails">
                    <div className="heroNameBox">
                        <img className="roleIcons" src="https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt8cf279e9b3126ef8/dark_circle_support.svg?format=webply&quality=90"/> 
                        <span className="heroName">{hero.name}</span>
                    </div>
                </div>
            </div>
            )
    }
  }
  
export default HeroCard;
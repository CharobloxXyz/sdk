pub struct Player {

    pub wallet: String,
    pub health: u8,
    pub alive: bool

}

impl Player {

    pub fn new(wallet:String) -> Player {

        Player {

            wallet,
            health:100,
            alive:true

        }

    }

}

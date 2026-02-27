pub struct Match {

    pub id:u32,
    pub players:u8,
    pub active:bool

}

impl Match {

    pub fn new(id:u32) -> Match {

        Match {

            id,
            players:0,
            active:true

        }

    }

}

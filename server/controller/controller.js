

const tryOutData = [
    {
        id: 1,
        name: 'George',
        age: 50,
        college: 'WSU',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/440px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg',
        madeTeam: null
    }, 
    {
        id: 2,
        name: 'Abe',
        age: 47,
        college: 'None',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
        madeTeam: null
    },
    {
        id: 3,
        name: 'Benjamin Franklin',
        age: 58,
        college: 'PSU',
        image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NTIxNzUwNjAxODY4NTEx/benjamin-franklin_editedjpg.jpg',
        madeTeam: null
    },
    {
        id: 4,
        name: 'Hulk',
        age: 30,
        college: 'Marvel',
        image: 'https://images.news18.com/ibnlive/uploads/2017/01/hulk.jpg?impolicy=website&width=534&height=356',
        madeTeam: null
    },
    {
        id: 5,
        name: 'Devin Booker',
        age: 24,
        college: 'Duke',
        image: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200811073737/devin-booker-smile-wallpaper-66383-68648-hd-wallpapers.jpg',
        madeTeam: null
    },
    {
        id: 6,
        name: 'Charizard',
        age: 10,
        college: 'Saffron City',
        image: 'https://vignette.wikia.nocookie.net/sonic-pokemon-unipedia/images/4/42/6-1.png/revision/latest?cb=20131031034331',
        madeTeam: null
    },
    {
        id: 7,
        name: 'Willy Wonka',
        age: 36,
        college: 'Chocolate Factory',
        image: 'https://cdn.vox-cdn.com/thumbor/h6VwAstYKwBmx6Jq--cIwhIykWw=/0x0:1080x810/1820x1213/filters:focal(0x0:1080x810):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50583643/gene-wilder-willy-wonka.0.0.jpg',
        madeTeam: null
    },
    {
        id: 8,
        name: 'Big Bird',
        age: 18,
        college: 'Sesame Street',
        image: 'https://cdn.vox-cdn.com/thumbor/I0Kl_Nf0ZMKi1VueToDYS6tSlHw=/0x94:1494x1090/1820x1213/filters:focal(0x94:1494x1090):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/45686844/big_bird_half.0.0.jpg',
        madeTeam: null
    },
    {
        id: 9,
        name: 'Koolaid Man',
        age: 9,
        college: 'Oh Yaaa',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Kool-Aid_Man.png',
        madeTeam: null
    }, 
    {
        id: 10,
        name: 'The Grinch',
        age: 42,
        college: 'Whoville',
        image: 'https://cdn.vox-cdn.com/thumbor/Zy6h88J14S1Nxufykbs275yoVKM=/0x0:1920x1200/1820x1213/filters:focal(807x447:1113x753):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62249629/grinch1.0.jpg',
        madeTeam: null
    }     
];

let team = [];
let id = 0;

module.exports = {
    //method to display tryout data on cards
    displayTryOut: (req,res) => {
        res.status(200).send(tryOutData);
    },
    //displays players that made team below player cards
    displayTeam: (req,res) => {
        res.status(200).send(team);
    },
    //adds player to team array if they made team
    addToTeam: (req,res) => {
        //console.log(req.body.player);
        const newPlayer = req.body.player;
        //console.log(newPlayer.id)
        newPlayer.id = id;
        //console.log(newPlayer.id)
        id++;
        team.push(newPlayer);
        //console.log(team);
        res.status(200).send(team);
    },
    //deletes player from tryoutdata array if they are cut
    cutPlayer: (req,res) => {
        //console.log(req.params);
        const {id} = req.params;
        
        const index = tryOutData.findIndex(el => el.id === +id)
        tryOutData.splice(index,1);

        res.status(200).send(tryOutData);
    },
    editPlayer: (req,res) => {
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {name} = req.body;
        
        const player = team.find(el => el.id === +id)

        player.name=name;

        res.status(200).send(team)
    }

}
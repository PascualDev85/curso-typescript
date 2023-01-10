(() => {

    type Avenger = {
        nick: string,
        weapon: string
    }

    const ironman: Avenger = {
        nick: 'Ironman',
        weapon: 'Mark 50'
    }

    const thor: Avenger = {
        nick: 'Thor',
        weapon: 'Stormbreaker'
    }

    const capi: Avenger = {
        nick: 'Capitan America',
        weapon: 'Escudo'
    }

    const avengers: Avenger[] = [ironman, thor, capi];

    // for (let i = 0; i < avengers.length; i++) {
    //     console.log(avengers[i]);
    // }

    for (const avenger of avengers) {
        console.log(avenger);
    }

    // avengers.forEach(avenger => {
    //     console.log(avenger);
    // })





})()
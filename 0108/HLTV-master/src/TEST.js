var gosugamersMatch = require('gosugamers-match');

gosugamersMatch('excessively long gosugamers url', function(error, data) {
    if (error) {
        throw error;
    }

    console.log(data);
    // => {
    // =>   opponent1: 'Team LDLC',
    // =>   opponent2: 'fnatic',
    // =>   score1: 1,
    // =>   score2: 3,
    // =>   date: 1415548800
    // => }
});
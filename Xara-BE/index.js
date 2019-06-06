const groupBy = require('./utility').groupBy;
const getParentsFromGroupAndAddFirstChild = require('./utility').getParentsFromGroupAndAddFirstChild;
const fs = require('fs');
const dataPoints = require('./datapoints');

const main = (data) => {

    /*
    { '8':
    [ { start: 1526915703284, tier: '2467-359' },
        { start: 1526915703274, tier: '2467-359' } ],
    '13':
    [ { start: 1526915704059, tier: '2467-359-5619' },
        { start: 1526915704056, tier: '2467-359-5619' },
        { start: 1526915704333, tier: '2467-359-8650' },
        ... ],
    '17':
    ...
    */
    // grouped all objects by length of tier
    const tierMap = {};

    /*
        2':
        [ { start: 1526915707425,
            tier: '2467-359-963-6177',
            children: [Array] },
            { start: 1526915707793,
            tier: '2467-359-963-7209',
            children: [Array] } ],
    */

    // parents grouped by their tier value length
    const tierOrder = {};
    let maxTier = 0;

    for (let i = 0; i < data.length; i++) {
        const el = Object.assign({}, data[i]);
        const len = el.tier.length;
        if (!tierMap[len]) {
            tierMap[len] = [];
        }

        tierMap[len].push(el);
    }

    for (let prop in tierMap) {
        const tierWithSameLength = tierMap[prop];

        // group same tier so first child with later start can be assigned
        const group = groupBy(tierWithSameLength, 'tier');

        // assign child first child for each parent
        const parentsInTierWithFirstChild = getParentsFromGroupAndAddFirstChild(group);

        // grouping parents by their tier value length
        tierOrder[maxTier] = parentsInTierWithFirstChild;

        maxTier++;
    }

    // for each tier starting from the last one
    // try to assign it as child to a lower tier
    for (let i = maxTier - 1; i >= 0; i--) {

        const currTier = tierOrder[i];

        // for each lower tier starting from current - 1
        // try to assign children
        // if assigned child value becomes null so it's not assigned anymore
        for (let j = i - 1; j >= 0; j--) {
            const lowerTier = tierOrder[j];

            if (currTier && lowerTier) {
                for (let k = 0; k < lowerTier.length; k++) {
                    const ltk = lowerTier[k];
                    for (let x = 0; x < currTier.length; x++) {
                        let ctx = currTier[x];
                        if (ctx && ltk && ctx.tier != ltk.tier && ctx.tier.includes(ltk.tier)) {
                            ltk.children.push(ctx);
                            currTier[x] = null;
                        }
                    }
                }
            }
        }
    }

    return tierOrder[0];
}

const result = main(dataPoints);

fs.writeFile("result.txt", JSON.stringify(result, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The result was saved to result.txt!");
});

module.exports = {
    main
};
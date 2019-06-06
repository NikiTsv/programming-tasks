const groupBy = require('./utility').groupBy;
const getParentsFromGroupAndAddFirstChild = require('./utility').getParentsFromGroupAndAddFirstChild;

const main = (data) => {

    const tierMap = {};
    const tierOrder = {};
    let maxTier = 0;

    for (let i = 0; i < dataCopy.length; i++) {
        const el = Object.assign({}, dataCopy[i]);
        const len = el.tier.length;
        if (!tierMap[len]) {
            tierMap[len] = [];
        }

        tierMap[len].push(el);
    }

    //console.log('tiermap', tierMap);

    for (let prop in tierMap) {
        const tier = tierMap[prop];
        const group = groupBy(tier, 'tier');
        const parentsInTier = getParentsFromGroupAndAddFirstChild(group);

        tierOrder[maxTier] = parentsInTier;

        maxTier++;
    }

    //console.log('TO', tierOrder);

    //for each tier starting from 15
    for (let i = maxTier - 1; i >= 0; i--) {

        const currTier = tierOrder[i];

        //for each lower tier starting from 14
        for (let j = i - 1; j >= 0; j--) {
            const prevTier = tierOrder[j];

            if (currTier && prevTier) {
                for (let k = 0; k < prevTier.length; k++) {
                    const pt = prevTier[k];
                    for (let x = 0; x < currTier.length; x++) {
                        let ct = currTier[x];
                        if (ct && pt && ct.tier != pt.tier && ct.tier.includes(pt.tier)) {
                            pt.children.push(ct);
                            currTier[x] = null;
                        }
                    }
                }
            }
        }
    }

    return tierOrder[0];
}

module.exports = {
    main
};
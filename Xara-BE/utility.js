
module.exports = {
    groupBy: function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    },
    getParentsFromGroupAndAddFirstChild:  function (group) {
        const parents = [];

        for (let gr in group) {
            const sortedByStart = group[gr].sort((a, b) => a.start - b.start);
            const parent = sortedByStart[0];
            const firstChild = sortedByStart[1];

            if (!parent.children) parent.children = [];
            if (firstChild) parent.children.push(firstChild);
            parents.push(parent);
        }

        return parents;
    }
}
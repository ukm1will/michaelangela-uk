import _ from 'lodash';

function myOrderBy(arr, prop) {
    let nonzeros = arr.filter(r => r[prop] !== 0 );
    const firstGroup = _.orderBy(nonzeros, prop, "asc");
    let secondGroup =  arr.filter(r => r[prop] === 0);
    return [...firstGroup, ...secondGroup];
}

export default myOrderBy

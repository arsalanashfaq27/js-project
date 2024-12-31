let items = [];

function add(item) {
        items.push(item);
}
add('apples');
add('bananas');
add('mangoes');
console.log(items);

// remove
function remove(item) {
    let index = items.indexOf(item);
        items.splice(index, 2);
}
remove('mangoes');
console.log(items);

// chart
function lastChart(string) {
    return string ? string[string.length - 1] : null;
}
console.log(lastChart('banana'));

// reverse
function reverse(string) {
    return string.split('').reverse().join('');
}
console.log(reverse('apples'));

console.log(reverse(reverse('apples')));
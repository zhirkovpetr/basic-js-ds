module.exports = function removeKFromList(l, k) {
    if (!l.next) {
        if (l.value === k) {
            return null
        }
        return {value: l.value, next: null}
    }

    if (l.value === k) {
        return removeKFromList(l.next, k);
    } else {
        return {value: l.value, next: removeKFromList(l.next, k)}
    }


}

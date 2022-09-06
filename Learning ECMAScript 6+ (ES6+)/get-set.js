let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    }
};

attendance.addName = "John Snow";
console.log(attendance.list);

attendance.addName = "Khal Drogo";
attendance.addName = "Daenerys Targaryen";
console.log(attendance.list);
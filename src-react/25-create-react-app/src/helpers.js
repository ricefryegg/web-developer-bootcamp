const choice = (items) => {
    let index = Math.floor(Math.random() * items.length);

    return items[index];
}

const remove = (items, item) => {
    let index = items.indexOf(item);

    if (index !== -1) {
        return items.splice(index, 1);
    }

    return
}

export { choice, remove };
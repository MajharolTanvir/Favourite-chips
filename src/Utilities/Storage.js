const addToStored = item => {
    let chipsCard = getStoredData();

    // Find the quantity
    const quantity = chipsCard[item]
    if (quantity) {
        const newQuantity = chipsCard[item] + 1;
        chipsCard[item] = newQuantity;
    }
    else {
        chipsCard[item] = 1;
    }

    localStorage.setItem('addToCard', JSON.stringify(chipsCard));
}

const getStoredData = () => {
    let chipsCard = {}
    const storedCard = localStorage.getItem('addToCard')
    if (storedCard) {
        chipsCard = JSON.parse(storedCard);
    }
    return chipsCard;
}

// Remove item for local storage
const removeData = item => {
    const storedCard = localStorage.getItem('addToCard');
    if (storedCard) {
        const storedSection = JSON.parse('addToCard')
        console.log(storedSection);
        delete storedSection[item];
        localStorage.setItem('addToCard', JSON.stringify(storedSection));
    }
}

const deleteData = () => {
    localStorage.removeItem('addToCard')
}
export {
    addToStored,
    getStoredData,
    removeData,
    deleteData
}
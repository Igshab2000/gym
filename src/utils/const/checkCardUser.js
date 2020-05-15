const checkCardUser = (arrayData, indexCard) =>  {
    const checkCard = arrayData.find(item => item === indexCard);
    if(checkCard) {
        return '#04d13b'
    } else {
        return '#f0f6ff'
    }
}

export default checkCardUser;
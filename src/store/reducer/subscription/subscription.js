const initState = {
    subscriotion: {
        type: 'div',
        header: 'Абонементы',
        href: '/subscription',
        items: [
            {
                id: 0,
                header: '1 месяц',
                price: '1000р'
            },
            {
                id: 1,
                header: '2 месяца',
                price: '2000р'
            },
            {
                id: 2,
                header: '3 месяца',
                price: '2800р'
            },
            {
                id: 3,
                header: '5 месяцев',
                price: '4800р'
            },
            {
                id: 4,
                header: '6 месяцев',
                price: '5500р'
            },
            {
                id: 5,
                header: '8 месяцев',
                price: '7800р'
            },
            {
                id: 6,
                header: '10 месяцев',
                price: '9800р'
            },
            {
                id: 7,
                header: '12 месяцев',
                price: '11000р'
            },
        ]
    }
}

const SubscriotionReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;    
    }
}

export default SubscriotionReducer;
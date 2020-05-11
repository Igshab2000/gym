const initState = {
    trainers: {
        type: 'img',
        header: 'Тренерский состав',
        href: '/trainers',
        items: [
            {
                id: 1,
                src: 'trainers/1.jpg',
                name: 'Иван Иванов'
            },
            {
                id: 2,
                src: 'trainers/2.jpg',
                name: 'Николай Яблоков'
            },
            {
                id: 3,
                src: 'trainers/3.jpg',
                name: 'Тимур Медведев'
            },
            {
                id: 4,
                src: 'trainers/4.jpg',
                name: 'Ксения Иванова'
            },
            {
                id: 5,
                src: 'trainers/5.jpg',
                name: 'Елена Свиридова'
            },
            {
                id: 6,
                src: 'trainers/6.jpg',
                name: 'Михаил Волков'
            },
        ]
    }
}

const TrainersReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;    
    }
}

export default TrainersReducer;
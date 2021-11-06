import ScheduledList from "../Features/ScheduledList";
import DoneList from "../Features/DoneList";

export const routes = [
    {
        path: '/done',
        component: DoneList
    },
    {
        path: '/',
        exact: true,
        component: ScheduledList
    },
]

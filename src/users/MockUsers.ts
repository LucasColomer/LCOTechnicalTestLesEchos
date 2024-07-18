import { User } from "./User";

const BASE_USERS = new User({
    id: "507f1f77bcf86cd799439011",
    firstName: "Jamie",
    lastName: "Doe",
    gender: "M",
    email: "jamie.doe@example.com",
})

export const USER_WITH_ONE_SUBSCRIPTION: User = {
    ...BASE_USERS,
    subscriptions: ["RIGHT_1"],
};

export const USER_WITHOUT_SUBSCRIPTION: User = {
    ...BASE_USERS,
    subscriptions: [],
};

export const USER_WITH_TWO_SUBSCRIPTIONS: User = {
    ...BASE_USERS,
    subscriptions: ["RIGHT_1", "RIGHT_2"],
};
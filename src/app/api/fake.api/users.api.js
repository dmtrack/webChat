const users = [
    {
        _id: "67rdca3eeb7f6fg1",
        name: "John"
    },
    {
        _id: "67rdca3eeb7f6fgdasd2",
        name: "Melany"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd3",
        name: "Howard"
    }
];
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}
const fetchAllUsers = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 200);
    });

const addUser = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const users = JSON.parse(localStorage.getItem("users"));
            const newUser = {
                ...data,
                created_at: Date.now()
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            resolve(newUser);
        }, 200);
    });

const getUserById = (id) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userName = users.find((u) => u._id === id);
    return userName;
};

export { fetchAllUsers, addUser, getUserById };

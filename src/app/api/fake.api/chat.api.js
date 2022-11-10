const chats = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "JavaScript"
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "nodeJS"
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Java"
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "PHP"
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Ruby"
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "С++"
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Kotlin"
    }
];
if (!localStorage.getItem("chats")) {
    localStorage.setItem("chats", JSON.stringify(chats));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("chats")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const chats = JSON.parse(localStorage.getItem("chats"));
        const chatIndex = chats.findIndex((c) => c._id === id);
        chats[chatIndex] = { ...chats[chatIndex], ...data };
        localStorage.setItem("chats", JSON.stringify(chats));
        resolve(chats[chatIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("chats")).find(
                    (chat) => chat._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};

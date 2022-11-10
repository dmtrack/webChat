const chats = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "JavaScript",
        image: "https://www.svgrepo.com/show/327372/logo-javascript.svg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "nodeJS",
        image: "https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Java",
        image: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "PHP",
        image: "https://i.pinimg.com/originals/2d/3a/7d/2d3a7d7d1ad7adeded994de246f60c43.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Ruby",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Devicon-ruby-plain.svg/1200px-Devicon-ruby-plain.svg.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "С++",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Kotlin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kotlin_Icon_2021.svg/2048px-Kotlin_Icon_2021.svg.png"
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

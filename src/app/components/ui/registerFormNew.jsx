import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import getRandomAvatar from "../../utils/getRandomAvatar";
import API from "../../api";
import SelectField from "../common/form/selectField";
import { useHistory } from "react-router-dom";
import { authUser } from "../../utils/sessionStorage.service";
import { addUser } from "../../api/fake.api/users.api";

const RegisterForm = () => {
    const [data, setData] = useState({
        name: "",
        chatId: ""
    });

    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [chats, setChats] = useState({});
    useEffect(() => {
        API.chats.fetchAll().then(setChats);
    }, []);
    const arrayOfChats =
        chats &&
        Object.keys(chats).map((chatId) => ({
            label: chats[chatId].name,
            value: chats[chatId]._id
        }));

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        console.log(data);
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Name is required"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data,
            image: getRandomAvatar(),
            created_at: Date.now(),
            _id: Math.random().toString(36).substr(2, 9)
        };
        console.log(newData, "registrationData");
        history.push(`/chats/${data.chatId}`);
        authUser(newData);
        addUser(newData);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 bg-light">
                    <h4 className="mb-3">Registration</h4>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <SelectField
                            label="Room"
                            onChange={handleChange}
                            options={arrayOfChats}
                            name="chatId"
                            value={data.chatId}
                            defaultOption="Выберите чат"
                            error={errors.chatId}
                        />
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                            disabled={!isValid}
                        >
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;

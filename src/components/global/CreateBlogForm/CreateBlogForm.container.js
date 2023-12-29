import { useEffect, useState } from "react";
import CreateBlogFormComponent from "./CreateBlogForm.component";
import api from "../../../axios"
import { useNavigate } from "react-router-dom";

const CreateBlogForm = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [isValid, setIsValid] = useState(false);
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchCategories();
    }, [])

    useEffect(() => {
        if(
            (email && !/^[a-zA-Z0-9.]+@redberry\.ge$/.test(email)) ||
            (!/^.{4,}$/.test(title)) ||
            ((!/^(\S+\s+){1,}\S+$/.test(author) || !/^.{4,}$/.test(author) || !/^[ა-ჰ\s|]+$/u.test(author))) ||
            (!/^.{4,}$/.test(description)) ||
            !image
        ) {
            setIsValid(false);
            return;
        } else {
            setIsValid(true)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, title, author, description, date])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await api.post("/blogs", {
                email,
                title,
                description,
                author,
                publish_date:date,
                "image": image[0],
                categories: `[${selectedCategories}]`
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            navigate("/");
        } catch (e) {
            console.log(e)
        }
    }

    const selectCategory = (id) => {
        setSelectedCategories(prev => [...prev, id])
    }

    const removeCategory = (id) => {
        setSelectedCategories(prev => [...prev.filter(prevId => prevId !== id)])
    }

    return (
        <CreateBlogFormComponent 
            categories={categories} 
            selectedCategories={selectedCategories} 
            removeCategory={removeCategory} 
            selectCategory={selectCategory}
            setEmail={setEmail}
            setAuthor={setAuthor}
            setTitle={setTitle}
            setDescription={setDescription}
            setDate={setDate}
            email={email}
            isValid={isValid}
            handleSubmit={handleSubmit}
            setImage={setImage}
        />
    );
}

export default CreateBlogForm;
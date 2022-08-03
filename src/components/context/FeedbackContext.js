import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=views&_order=asc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const feedbackAdd = async (newFile) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFile)
        })

        const data = await response.json()
        setFeedback([...feedback, data])
    }





    const handleDelete = async (id) => {
        if (window.confirm('are you aure you want to delete')) {
            await fetch(`/feedback/${id}`, { method: "DELETE" })

            const filtered = feedback.filter((item) => item.id !== id)
            setFeedback(filtered)
        }
    }





    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, uptItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uptItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }







    return (
        <FeedbackContext.Provider
            value={{
                feedback, feedbackEdit, isLoading, handleDelete, feedbackAdd, editFeedback,
                updateFeedback
            }}
        >
            {
                children
            }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
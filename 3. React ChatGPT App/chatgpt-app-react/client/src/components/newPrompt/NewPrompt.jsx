import './newPrompt.css'
import { useEffect, useRef, useState } from "react"
import model from "../../lib/gemini";
import Markdown from "react-markdown";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const NewPrompt = (data) => {
  const endRef = useRef(null);
  const formRef = useRef(null);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const queryClient = useQueryClient();

  useEffect (() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  }, [question, answer]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data.data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          question: question.length ? question : undefined,
          answer,
        })
      }).then(res => res.json());
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["chat", data.data._id] }).then(() => {
        formRef.current.reset();
        setQuestion("")
        setAnswer("")
      });
    },
    onError:(err) => {
      console.log(err)
    }
  });

  const add = async (text) => {
    setQuestion(text);
    
    try {
      const result = await model.generateContent(text);
      const response = await result.response;
      setAnswer(response.text());

      mutation.mutate();

    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text);
  };

  return (
    <>
    {question && <div className="message user">{question}</div> }
    {answer && <div className="message">
      <Markdown>{answer}</Markdown>
      </div> }
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  )
}

export default NewPrompt
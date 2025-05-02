import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import AgentSelector from "./AgentSelector";

const AiPanel = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
  
    const handleGenerate = async () => {
      if (!prompt.trim()) {
        toast.error("Escribe un mensaje para la IA");
        return;
      }
  
      try {
        const token = localStorage.getItem("token");
  
        const res = await axios.post(
          "http://localhost:3000/ai/generate",
          { text: prompt },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
  
        setResult(res.data.transformText || "Sin respuesta.");
      } catch (error) {
        toast.error("Error al generar contenido con la IA");
      }
    };
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Generador con IA</h2>
        <AgentSelector/>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows={4}
          placeholder="Escribe una idea para inspirarte..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleGenerate}
        >
          Generar
        </button>
        {result && (
          <div className="mt-6 p-4 border bg-gray-100 rounded">
            <h3 className="font-bold mb-2">Resultado:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    );
  };
export default AiPanel
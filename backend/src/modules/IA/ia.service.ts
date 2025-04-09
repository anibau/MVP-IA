import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class IaService {
    private apiUrl = 'https://api.mistral.ai/v1/chat/completions'; // URL de la API
    private apiKey = process.env.MISTRAL_API_KEY; // Clave de API
  
    async transformContent(prompt: string): Promise<string> {
      try {
        const response = await axios.post(
          this.apiUrl,
          {
            model: 'mistral-7b', // Modelo a usar
            messages: [{ role: 'user', content: prompt }],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.apiKey}`,
            },
          }
        );
  
        return response.data.choices[0].message.content;
      } catch (error) {
        console.error('Error en IA:', error);
        throw new Error('Error al conectar con la IA');
      }
    }
}
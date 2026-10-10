import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Autoriser explicitement les bots d'IA
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'Googlebot', 'Google-Extended', 'PerplexityBot', 'bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://marseillefightclub.com/sitemap.xml',
  }
}

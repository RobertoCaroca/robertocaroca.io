'use client';

import { IconCloud } from "@/components/ui/icon-cloud";
import { TextAnimate } from "@/components/ui/text-animate";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const lightIcons = [
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png", 
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/anthropic.png", 
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/meta.png",
  "/icons/anthropic.png",
  "/icons/openai.png",
  "/icons/claude.png",
  "/icons/gemini.png",
  "/icons/meta.png",
];

const darkIcons = [
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png", 
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/anthropic-dark.png", 
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
  "/icons/anthropic-dark.png",
  "/icons/openai-dark.png",
  "/icons/claude-dark.png",
  "/icons/gemini-dark.png",
  "/icons/meta-dark.png",
];

export default function AISection() {
  const { theme } = useTheme();
  const icons = theme === 'dark' ? darkIcons : lightIcons;

  return (
    <section id="ai-section" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <FlickeringGrid 
          squareSize={6}
          gridGap={12}
          flickerChance={0.15}
          color={theme === 'dark' 
            ? 'rgb(99, 102, 241)' // indigo-500 for dark mode
            : 'rgb(79, 70, 229)'  // indigo-600 for light mode
          }
          maxOpacity={0.4}
          className="h-full w-full opacity-40 dark:opacity-30 mix-blend-color dark:mix-blend-plus-lighter"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextAnimate 
          as="h2"
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center font-display tracking-tight"
          animation="blurInDown"
          by="character"
          delay={0.2}
          duration={0.5}
        >
          ¿Que es AI?
        </TextAnimate>
        <TextAnimate 
          className="mb-1 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 text-center"
          animation="blurInUp"
          by="word"
          delay={0.3}
        >
          En el sentido práctico
        </TextAnimate>
        <div className="flex justify-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <IconCloud images={icons} />
          </div>
        </div>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed mt-8">
          En la practica lo que hoy estamos llamamos AI son modelos de procesamiento de lenguage natural...Que? Imagina que una LLM (Large Language Model) es como una persona que ha leído millones de libros, artículos y conversaciones, al punto que ha aprendido a predecir qué palabras deben venir después de otras para responder preguntas, escribir textos o traducir idiomas. Es como un asistente que ha estudiado muchísimo y puede ayudarte a redactar un correo, resumir información o incluso programar, pero sin entender realmente el mundo, solo combinando lo que ha aprendido. En efecto si una persona leyera 24/7 todos los texto con los que fue ChatGPT entrenado, demoraría 2600 años en leerlo todo.
        </p>
        <Button className="mt-16" href="#tools-section">
          Explorar herramientas
        </Button>
      </div>
    </section>
  );
} 
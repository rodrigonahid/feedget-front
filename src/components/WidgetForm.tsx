import { CloseButton } from "./CloseButton";

const feedbackTypes = {
  bug: {
    title: "Problema",
  },
  idea: {
    title: "Ideia",
  },
  other: {
    title: "Outro",
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>

      <footer>
        Feito com amor pelo
        <a
          className="underline underline-offset-2"
          href="https://rodrigonahid.com.br"
          target="_blank"
        >
          {" "}
          Rodrigo Nahid
        </a>
      </footer>
    </div>
  );
}

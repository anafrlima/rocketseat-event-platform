import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
  variant: "primary" | "secondary";
  targetUrl?: string;
}

export function Button({ variant, targetUrl }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <a
        href={targetUrl}
        className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
      >
        <Lightning size={24} />
        Acesso o Desafio
      </a>
    );
  }

  return (
    <a
      href={targetUrl}
      className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
    >
      <DiscordLogo size={24} />
      Comunidade no Discord
    </a>
  );
}

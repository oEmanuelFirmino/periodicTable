export function Header() {
  if (Number(screen.width) <= 1000) {
    return (
      <div
        className="
            bg-black
            w-full
            h-24
            text-2xl
            font-bold
            text-white
            flex
            items-center
            p-6
            mb-10
            "
      >
        <h1 className="title">Tabela Periódica</h1>
      </div>
    );
  } else if (Number(screen.width) > 1000) {
    return (
      <div
        className="
              bg-[#1a1a1a]
              w-full
              h-24
              text-6xl
              font-bold
              text-center
              text-white
              inline-flex
              items-center
              p-6
              mb-10
              border-b
              border-white
              justify-center
              "
      >

        <h1 className="basis-auto grow">Tabela Periódica</h1>
      </div>
    );
  }
}

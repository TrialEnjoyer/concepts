/*
 * An interesting background utilising triangle svgs, dark background and opacity, Plus:
 * A cool text animation effect from https://www.youtube.com/watch?v=W5oawMJaXbU 
 * The twist: Text is an svg.
*/

export default function Home() {

  const Triangle = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="150%" height="150%">
        <defs>
          <pattern id="triangleGridPattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <polygon points="25,0 50,50 0,50" fill="#00000000" strokeWidth={5} stroke="purple" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangleGridPattern)" transform="(-50,-50)">
          <animateTransform attributeName="transform" type="translate" from='0,0' to='-50,0' dur='10s' repeatCount='indefinite'/>
        </rect>
        <rect width="100%" height="100%" fill="url(#triangleGridPattern)" transform="translate(-25,50)">
          <animateTransform attributeName="transform" type="translate" from='0,-125' to='0,-75' dur='10s' repeatCount='indefinite'/>
        </rect>
      </svg>
    )
  }


  const Line = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="5">
      <line x1="0" y1="2.5" x2="20" y2="2.5" stroke="purple" stroke-width="5" stroke-linecap="round" />
    </svg>
  )

  const RandomLettering = (e:any) => {
    const title = 'INTERESTING CONCEPTS';
    const randomLetterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let iteration = 0;
    let interval = setInterval(() => {
      e.target.innerHTML = e.target.innerHTML
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return title[index];
          }

          return randomLetterString[Math.floor(Math.random() * randomLetterString.length)]
        })
        .join("");

      if (iteration >= title.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 50);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <div className="absolute w-full h-full overflow-hidden z-0">
          <Triangle />
        </div>
        <div className="container flex flex-col items-center justify-center px-4 py-16 z-[9]">
          <svg width='800' height='100'>
            <text onMouseEnter={RandomLettering} fillOpacity='0' fontWeight='bold' fontSize='48' x='400' y='80' textAnchor="middle" strokeWidth='2' stroke='#a3e635'>INTERESTING CONCEPTS</text>
          </svg>
        </div>
      </main>
    </>
  );
}

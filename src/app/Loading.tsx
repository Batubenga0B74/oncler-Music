"use client"
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/lottie/loading.json"
export default function Loading() {
  return (
    <main className="w-full h-screen grid place-items-center bg-black">
      <Lottie 
        loop={true}
        animationData={LoadingAnimation} 
      />
    </main>
  )
}


// describe("Card Play/Pause", () => {
//   it("chama play e pause corretamente", () => {
//     // cria funções fake para substituir o play/pause
//     const playMock = jest.fn();
//     const pauseMock = jest.fn();

//     // substitui o comportamento do <audio>
//     window.HTMLMediaElement.prototype.play = playMock;
//     window.HTMLMediaElement.prototype.pause = pauseMock;

//     render(<Card tracks={[mockTrack]} />);
//     const button = screen.getByRole("button");

//     // clique 1 → deve chamar play
//     fireEvent.click(button);
//     expect(playMock).toHaveBeenCalled();

//     // clique 2 → deve chamar pause
//     fireEvent.click(button);
//     expect(pauseMock).toHaveBeenCalled();
//   });
// });
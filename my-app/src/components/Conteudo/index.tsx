import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          cupiditate debitis quaerat impedit dolor veniam dicta fugit.
          Perferendis voluptas eos, unde quidem corporis mollitia quod sequi
          eius, optio impedit magnam?
        </p>

        {/* Importando imagem externa */}

        <figure>
          <img
            src="https://placehold.co/600x400/229999/000/png"
            alt="Figure de demonstração"
          />

          <figcaption>Imagem externa</figcaption>
        </figure>

        {/* Importando imagem interna */}

        <figure>
          <img src={imgQuadrado} alt="Figure de demonstração" />

          <figcaption>Imagem interna</figcaption>
        </figure>

        <figure>
          <img src="/quadradoVermelho.png" alt="Figure de demonstração" />

          <figcaption>Imagem estática</figcaption>
        </figure>


      </section>
    </main>
  );
}

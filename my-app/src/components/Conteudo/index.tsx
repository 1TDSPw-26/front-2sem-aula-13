<<<<<<< HEAD
import imgQuadrado from "../../img/quadrado.png";
=======
// import imgQuadrado from "../../img/quadrado.png";
import Imagens from "../Imagens";
>>>>>>> feature/exemplo-pf0670

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo</h2>
<<<<<<< HEAD
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


=======

            <Imagens/>

        {/* <figure>
          <img
            src="https://placehold.co/300x200/0000FF/FFFFFF/png"
            alt="Figure de demonstração"
          />
          <figcaption>Imagem Externa</figcaption>
        </figure>
        
        <figure>
          <img src={imgQuadrado} alt="Figure de demonstração" />
            <figcaption>Imagem Interna</figcaption>
        </figure>

        <figure>
          <img src="/image/quadrado-b.png" alt="Figure de demonstração" />
            <figcaption>Imagem Estática</figcaption>
        </figure> */}


        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          dolorem numquam ratione atque! Perspiciatis assumenda magnam neque
          omnis porro non sequi unde! Eius nihil error delectus et earum id quo.
        </p>
>>>>>>> feature/exemplo-pf0670
      </section>
    </main>
  );
}

import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
    return (
        <main>
            <section>
            <h2>Bem-vindo ao meu app!</h2>

            <figure>
                <img src="https://placehold.co/600x400/0000FF/FFFFFF/png" alt="Figure de demostração" />
                <figcaption>Imagem Externa</figcaption>
            </figure>

               <figure>
                <img src={imgQuadrado} alt="Figure de demostração" />
                <figcaption>Imagem Interna</figcaption>
            </figure>

            <figure>
                <img src="/quadrado-b.png" alt="Figure de demostração" />
                <figcaption>Imagem Estática</figcaption>
            </figure>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor similique cum commodi, libero illum beatae sequi ratione, dolores dignissimos blanditiis dolorem repellat magnam quos ipsam deleniti fuga culpa iure tempora eius deserunt possimus maiores! Repudiandae facilis quis iure ipsam temporibus, nobis, nulla illo deleniti repellat aliquid quae, cumque adipisci voluptates.</p>
            </section>
        </main>
    );
}
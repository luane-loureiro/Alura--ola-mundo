import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Luane!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Amante das artes, design e tecnologia, estudei na escola de belas artes da UFRJ e Desenho industrial na Universidade Eestácio de Sá, com bolsa integral.
            </p>
            <p className={styles.paragrafo}>
            Participei da jornada de iniciação científica da FAU, quando estudava na UFRJ.
            </p>
            <p className={styles.paragrafo}>
            Atualmente tenho minha própria empresa com marca registrada no INPI, onde eu trabalho como designer e sou responsavel pelas midias sociais.
            </p>
            <p className={styles.paragrafo}>
            Hoje, minha empresa tem mais de 5,5 mil curtidas no Facebook e mais de 3 mil seguidores no Instagram.
            </p>
            <p className={styles.paragrafo}>
            Como hobby tenho uma página sobre video games que se chama "To Com Lag" que tem mais de 24 mil curtidas no Facebook. 
            </p>
            <p className={styles.paragrafo}>
            Também tenho um pequeno canal no youtube para crianças Chamado Pintando com a Lua.
            </p>
            <p className={styles.paragrafo}>
            Gosto de video games e tenho uma pequena coleção de games retrô. Como sempre gostei de Games, acabei puxando algumas disciplinas do curso de jogos digitais, enquanto eu fazia Design na UESA.
            </p>
            <p className={styles.paragrafo}>
            No meu tempo livre, além de jogar videogame, gosto de ler, desenhar e fazer Trabalhos manuais.
            </p>

        </PostModelo>
    )
}


import styles from './rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <div className={styles.dev}>
                <MarcaRegistrada />
                <p>
                    Desenvolvido por Luane Loureiro
                </p>
            </div>
            <p>Junho 2024</p>
        </footer>
    )
}

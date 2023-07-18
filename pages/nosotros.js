import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Guitar MDZ, Sobre Nosotros, Tienda y Blog de Música'}
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre Nosotros' />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante eget erat tincidunt congue. Morbi luctus ornare imperdiet. Curabitur quis arcu nisl. Duis sit amet arcu interdum, aliquam justo non, auctor lectus. Morbi laoreet justo ut arcu ornare posuere. Donec condimentum libero sed vehicula finibus. Cras turpis augue, finibus eu tincidunt vitae, hendrerit nec mi. Etiam venenatis urna massa, nec tristique tortor ultrices sed. Bibendum ac iaculis eget, dictum sit amet diam. Aenean eget lobortis nisl.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante eget erat tincidunt congue. Morbi luctus ornare imperdiet. Curabitur quis arcu nisl. Consectetur adipiscing elit. Sed vel ante eget erat tincidunt congue. Morbi luctus ornare imperdiet. Curabitur quis arcu nisl. </p>
          </div>
        </div>
      </main>

    </Layout>

  )
}

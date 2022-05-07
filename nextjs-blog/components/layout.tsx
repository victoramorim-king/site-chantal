
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Chantal'
export const siteTitle = 'Chantal'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Precisa de um Web Designer? entre em contato comigo!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <ul className={utilStyles.ulNav}>
              <li>
                <a href="">Contato</a>
              </li>
              <li>
                <a href="">Representantes</a>
              </li>
           <li className={utilStyles.headerLogo}>
            <Image
              priority
              src="/images/logo-chantal-menu.png"
              className={utilStyles.header}
              height={'75px'}
              width={'215px'}
              alt={name}
              />
              </li> 
              <li>
                <a href="">Downlaods</a>
              </li>
              <li>
                <a href="">Pesquisar</a>
              </li>

            </ul>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <header className={styles.headeBl}> 
            <ul className={utilStyles.ulNavBl}>
              <li >
                <a href="">Contato</a>
              </li>
              <li>
                <a href="">Representantes</a>
              </li>
              <li>
                <a href="">Downlaods</a>
              </li>
              <li>
                <a href="">Pesquisar</a>
              </li>

            </ul>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
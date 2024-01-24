import Head from 'next/head';
import styles from '../styles/Home.module.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, ClosedCaptionButton, BigPlayButton } from 'video-react';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Video Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          React Video Player
        </h1>
        <Player autoPlay fluid={false} width={1024} poster="/poster.png">
          <source
            src="/video.mp4"
            type="video/mp4"
          />
          
          <track
            kind="captions"
            src="/caption.en.vtt"
            srcLang="en"
            label="English"
            default
          />
          <BigPlayButton position="center" />
          <ControlBar autoHide={false}>
            <ClosedCaptionButton order={7} />
          </ControlBar>
        </Player>

      </main>

      <footer>
        <a
          href="https://my.bloomboard.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by BloomBoard
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

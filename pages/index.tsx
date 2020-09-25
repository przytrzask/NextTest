/** @jsx jsx */
import { jsx } from "theme-ui"
import Head from "next/head"
import { Flex } from "theme-ui"

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main sx={styles.main}>
      <Flex sx={styles.history} bg="primary">
        <image src="/zeit.svg" alt="Computadora" />
      </Flex>
      <Flex
        style={{ flexDirection: "column" }}
        p={4}
        sx={styles.game}
        bg="muted"
      >
        <h1>Get In</h1>
        <p>Witaj w nowym najlepszym panelu klienta jaki widział świat.</p>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="password" />
        </label>
        <button>Zaloguj</button>
        <p>
          <small>
            Dokładnie sprawdzaj, czy informacje zawarte w SMSie autoryzacyjnym
            są zgodne z danymi transakcji
          </small>
        </p>
      </Flex>
    </main>

    <style jsx>{`
      label {
        width: 320px;
        padding-bottom: 2rem;
      }
      input {
        width: 320px;
        height: 44px;
        left: 0px;
        top: 0px;
        background: #ffffff;
        border: 1px solid #1a2151;
        border-radius: 10px;
      }
      button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 320px;
        height: 43px;
        left: 0px;
        top: 0px;
        background: #00cffd;
        border-radius: 22px;
        justify-content: center;
        align-items: center;
      }
      .container {
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.01);
        backdrop-filter: blur(250px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  history: {
    p: 4,
    borderRadius: 30,
    overflow: "auto",
    justifyContent: "center",
  },

  game: {
    p: 0,
    justifySelf: "center",
    maxWidth: 320,
  },
  main: {
    bg: "muted",
    borderRadius: 30,
    overflow: "hidden",
    display: "grid",
    width: 1024,
    gridTemplateColumns: "324px 700px",
    height: 542,
    boxShadow:
      "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(0, 0, 0, 0.15)",
  },
  h1: { color: "primary" },
  h2: { color: "secondary" },
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home

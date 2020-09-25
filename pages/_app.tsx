import * as React from "react"
import NextApp from "next/app"
import { ThemeProvider } from "theme-ui"
import theme from "../theme"

// body {
//   text-align: center;
//   background: linear-gradient(
//     180.73deg,
//     #7153fe 35%,
//     #9d46ff 71.51%,
//     rgba(162, 85, 255, 0) 100%
//   );
//   min-height: 100vh;
// }

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
